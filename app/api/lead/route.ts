import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface LeadPayload {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  location: string;
  page?: string;
  source?: string;
  honeypot?: string;
  formStartedAt?: number;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
    gclid?: string;
    fbclid?: string;
    referrer?: string;
    landingPage?: string;
  };
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const ipBuckets = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const window = ipBuckets.get(ip) ?? [];
  const recent = window.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    ipBuckets.set(ip, recent);
    return false;
  }
  recent.push(now);
  ipBuckets.set(ip, recent);
  return true;
}

function isLikelyBot(payload: LeadPayload): { isBot: boolean; reason?: string } {
  if (payload.honeypot && payload.honeypot.length > 0) {
    return { isBot: true, reason: 'honeypot' };
  }
  if (payload.formStartedAt) {
    const elapsed = Date.now() - payload.formStartedAt;
    if (elapsed < 1500) return { isBot: true, reason: `submitted in ${elapsed}ms` };
  }
  const text = `${payload.fullName} ${payload.email} ${payload.location}`.toLowerCase();
  if (/(http|https):\/\//.test(text)) return { isBot: true, reason: 'url in fields' };
  if (/cyrillic|chinese/.test(text)) return { isBot: true, reason: 'non-latin block' };
  return { isBot: false };
}

function isValid(payload: LeadPayload): { ok: boolean; error?: string } {
  if (!payload.fullName || payload.fullName.length < 2) return { ok: false, error: 'fullName required' };
  if (!payload.phone || payload.phone.replace(/\D/g, '').length < 7) return { ok: false, error: 'phone required' };
  if (!payload.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) return { ok: false, error: 'email invalid' };
  if (!payload.treatment) return { ok: false, error: 'treatment required' };
  if (!payload.location || payload.location.length < 2) return { ok: false, error: 'location required' };
  return { ok: true };
}

const LEAD_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbw0QaLFaG-XujztIC0ZyJ_DXbvlP9BHc7F2wbwOq0D9bRYijhYq8Dje_l4enKWfoUVvfg/exec';

async function relayToWebhook(payload: LeadPayload, ip: string): Promise<void> {
  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({ ...payload, ip, receivedAt: new Date().toISOString() }),
      redirect: 'follow',
    });
    if (!res.ok) {
      console.error('[lead] webhook returned non-2xx', res.status);
    }
  } catch (err) {
    console.error('[lead] webhook error', err);
  }
}

async function sendGA4Event(payload: LeadPayload, clientId: string): Promise<void> {
  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) return;
  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: 'generate_lead',
              params: {
                treatment: payload.treatment,
                location: payload.location,
                source: payload.source ?? 'direct',
                gclid: payload.utm?.gclid,
                campaign: payload.utm?.campaign,
              },
            },
          ],
        }),
      },
    );
  } catch (err) {
    console.error('[lead] GA4 MP error', err);
  }
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? request.headers.get('x-real-ip')
    ?? 'unknown';

  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 });
  }

  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const bot = isLikelyBot(payload);
  if (bot.isBot) {
    console.log(`[lead] dropped bot (${bot.reason}) from ${ip}`);
    return NextResponse.json({ ok: true });
  }

  const validation = isValid(payload);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const clientId = request.cookies.get('_ga')?.value?.split('.').slice(-2).join('.') ?? `${Date.now()}.${Math.floor(Math.random() * 1e9)}`;

  await Promise.all([
    relayToWebhook(payload, ip),
    sendGA4Event(payload, clientId),
  ]);

  return NextResponse.json({ ok: true });
}
