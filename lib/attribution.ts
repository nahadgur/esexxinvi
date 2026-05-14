const STORAGE_KEY = 'ide_attribution_v1';
const COOKIE_NAME = 'ide_attr';
const COOKIE_MAX_AGE_DAYS = 90;

export interface Attribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landingPage?: string;
  capturedAt?: number;
}

function setCookie(name: string, value: string, maxAgeDays: number) {
  if (typeof document === 'undefined') return;
  const maxAge = maxAgeDays * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1] ? decodeURIComponent(match[1]) : null;
}

export function captureFirstTouchAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;

  const existing = getCookie(COOKIE_NAME);
  if (existing) {
    try {
      return JSON.parse(existing) as Attribution;
    } catch {
      // fall through
    }
  }

  const params = new URLSearchParams(window.location.search);
  const attr: Attribution = {
    utmSource: params.get('utm_source') ?? undefined,
    utmMedium: params.get('utm_medium') ?? undefined,
    utmCampaign: params.get('utm_campaign') ?? undefined,
    utmContent: params.get('utm_content') ?? undefined,
    utmTerm: params.get('utm_term') ?? undefined,
    gclid: params.get('gclid') ?? undefined,
    fbclid: params.get('fbclid') ?? undefined,
    referrer: document.referrer || undefined,
    landingPage: window.location.pathname + window.location.search,
    capturedAt: Date.now(),
  };

  const compact: Attribution = Object.fromEntries(
    Object.entries(attr).filter(([, v]) => v !== undefined && v !== ''),
  ) as Attribution;

  if (Object.keys(compact).length > 0) {
    setCookie(COOKIE_NAME, JSON.stringify(compact), COOKIE_MAX_AGE_DAYS);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(compact));
    } catch {
      // sessionStorage may be unavailable in private mode
    }
    return compact;
  }
  return null;
}

export function readAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;
  const cookie = getCookie(COOKIE_NAME);
  if (cookie) {
    try {
      return JSON.parse(cookie) as Attribution;
    } catch {
      // fall through
    }
  }
  try {
    const fromSession = sessionStorage.getItem(STORAGE_KEY);
    if (fromSession) return JSON.parse(fromSession) as Attribution;
  } catch {
    // ignore
  }
  return null;
}
