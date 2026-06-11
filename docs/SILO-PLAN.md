# Invisalign Dentists Essex (esexxinvi) — silo plan (this site only)

Niche: Invisalign, Essex. Independent **matching/referral** service (fixed listing
fee, not paid per lead; does not provide treatment). YMYL health site. Domain
invisaligndentistsessex.uk. Ten pillar hubs at `/guides/[slug]/`, one hundred spokes
at `/blog/[slug]/` (10 per hub), the 6 condition pages as commercial pillars at
`/treatments/[service]/`, 12 town pages at `/locations/[town]/`, plus the clinics
directory and the matching CTA.

UK English, no em dashes, no fabricated content. The advisory board
(`data/advisory/board-members.ts`) and success stories (`data/stories/patient-stories.ts`)
are correctly empty/placeholder; keep them empty until real GDC-verified reviewers /
consented patients exist. Author byline = editorial team; credit a named GDC dentist
only where real review happened.

## 0. Cross-domain rule (critical)

This is the Essex sibling of the NATIONAL invisaligndentists.uk (#1). Same niche,
same 6 conditions. To avoid cross-domain near-duplicate content (CLAUDE.md hard
rule), esexxinvi single-owns the **Essex-local** angle: named Essex towns and
postcodes, local clinics, NHS access in mid/south Essex, commuter and local-event
context. NEVER synonym-paraphrase a national-site article onto here. Where a topic is
generic (e.g. "does Invisalign hurt"), give it a genuinely Essex frame or keep it
shorter and link the local context.

## 1. Reserved head terms (not targeted by hubs/spokes)

| Reserved query | Owned by |
|---|---|
| Invisalign Essex / Invisalign dentist Essex | Homepage `/` + treatments index |
| Invisalign [town] (Chelmsford, Southend, etc.) | `/locations/[town]/` |
| [condition] Invisalign (crowded, overbite, etc.) | `/treatments/[service]/` |

## 2. The ten pillar hubs (/guides)

Maps the existing 4 guide categories into a 10-hub structure.

| ID | Hub | Reserved subtopic | From existing category |
|---|---|---|---|
| H1 | Invisalign cost in Essex | invisalign cost essex | costs |
| H2 | The Invisalign treatment process and timeline | invisalign treatment process | treatment-process |
| H3 | Invisalign vs braces and other aligners | invisalign vs braces | comparisons |
| H4 | Living with Invisalign | living with invisalign | treatment-process (diet) |
| H5 | Comfort, pain and side effects | does invisalign hurt | treatment-process |
| H6 | Invisalign for teens and children | invisalign teen | local (parents guide) |
| H7 | Invisalign for adults and professionals | invisalign for adults | treatments/adults |
| H8 | What Invisalign can fix (suitability) | invisalign suitability | treatments (conditions) |
| H9 | Invisalign in Essex (local guide) | invisalign essex guide | local |
| H10 | Choosing a provider and at-home aligner risks | invisalign provider vs mail order | comparisons (at-home) |

## 3. Mapping the 17 existing guide articles

Promote/keep as the hub pillar or slot as a spoke under the matching hub:

- **H1 cost:** true-cost-invisalign-uk (pillar), financing-payment-plans, invisalign-nhs-essex, private-health-insurance-cover.
- **H2 process:** invisalign-journey-step-by-step (pillar), how-long-does-invisalign-take, invisalign-attachments-buttons.
- **H3 vs braces/aligners:** invisalign-vs-traditional-braces (pillar), ceramic-braces-vs-invisalign, invisalign-vs-spark-vs-clearcorrect.
- **H4 living with:** invisalign-diet-food-rules.
- **H5 comfort/pain:** does-invisalign-hurt.
- **H6 teens:** parents-guide-invisalign-teen.
- **H9 Essex local:** essex-commuter-guide-invisalign, wedding-invisalign-timeline-essex, top-questions-invisalign-consultation.
- **H10 provider/at-home:** dangers-of-at-home-mail-order-aligners.

That covers 8 of 10 hubs with real seed content; H7 (adults) and H8 (suitability)
start from the treatment pages and need new spokes.

## 4. The hundred spokes (/blog), 10 per hub

10 unique-intent spokes per hub; existing articles above count toward the total.
Priority gaps (Essex-framed, not national paraphrase):

- **H1:** what Invisalign costs in Essex by case; is Invisalign on the NHS in Essex; 0% finance in Essex; Invisalign Lite vs Full cost; hidden costs (retainers, refinements); is it cheaper abroad and the risks.
- **H2:** first consultation and ClinCheck; how many aligners; refinements; what IPR is; switching trays; what happens if it stops tracking.
- **H3:** Invisalign vs metal braces; vs ceramic; vs lingual; vs Spark/ClearCorrect; vs at-home aligners (risk); which is faster.
- **H4:** eating and drinking; cleaning aligners; coffee and staining; smoking; gum and snacks; speech and the first week.
- **H5:** how to relieve aligner pain; why new trays hurt; sore spots and ulcers; chewies; managing the first 48 hours.
- **H6:** Invisalign Teen explained; compliance for teenagers; age to start; school and sport; parent's cost guide (Essex).
- **H7:** Invisalign for professionals; over-40s and over-50s; relapse after childhood braces; discretion at work; wedding/event timing (Essex).
- **H8:** Invisalign for crowded teeth / gaps / overbite / underbite / crossbite (each links its treatment page); severe cases; with crowns/fillings.
- **H9:** Invisalign in [town] guides for the 12 Essex towns; commuter guide; NHS access in mid/south Essex; finding a Platinum clinic near you.
- **H10:** how to choose an Essex Invisalign provider; what Platinum/Diamond tier means; the risks of mail-order aligners; getting a second opinion; how our matching works.

## 5. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub (`/guides/<hub>/`) and to the most relevant
  pillar in context: a `/treatments/<condition>/` page, a `/locations/<town>/` page
  (H9 town spokes), or a `/clinics/` listing, plus the matching CTA.
- H8 condition spokes always link their exact treatment page.
- H9 local spokes link their town page and the clinics directory.
- Hubs link down to their 10 spokes + the relevant treatment pillar; sideways to
  1-2 adjacent hubs where natural (H1<->H3 cost-vs, H5<->H4, H6<->H7, H9<->H10).
- External: max 2/page, one per domain, cite a named authority (GDC, NHS, Align
  Technology) first mention only. Attribute clinical claims.

## 6. Architecture prerequisite (Claude Code, before the writer runs)

1. Convert guides to a data-driven `/guides/[slug]/` hub route + `data/guides.ts`
   with the 10 hubs. Migrate the 17 existing nested articles to `/blog/[slug]/`
   spokes (or keep the best as hub pillar content) and **308-redirect** the old
   `/guides/<category>/<article>/` URLs to the new locations. Update nav + sitemap.
2. Extend `data/blog.ts` with `hub` + `draft` fields and a draft gate (draft:true
   404s, excluded from /blog, hub grids, sitemap).
3. Ensure Article/MedicalWebPage + BreadcrumbList + FAQPage schema on hubs and
   spokes, author `@id` to the editorial entity, datePublished + dateModified.
4. Hide or finish the placeholder advisory-board entry ("Dr. [Full Name]") so a
   placeholder reviewer never renders live; keep success-stories empty until real.

Until 1-3 exist, the writer stays disabled (pre-flight guard logs a handoff).

## 7. Automation (schedulers, mirror essexdental/Harlow)

- **`esexxinvi-invisalign-writer`** (writer): one Essex-framed spoke per run as a
  `draft:true` blog entry under the right hub, with schema + inline up-link + one
  pillar link + matching CTA. NEVER paraphrase the national invisaligndentists.uk;
  require real Essex substance. Created DISABLED until section 6 exists.
- **`esexxinvi-invisalign-publisher`** (publisher): flips the oldest parked draft
  live 2/week and wires siblings. Domain is live; enable after the hubs exist and a
  first batch is human-reviewed (YMYL).

## 8. Status tracker

| Hub | Seed content | Target | Notes |
|---|---|---|---|
| H1 Cost | 4 | 10 | costs category |
| H2 Process | 3 | 10 | treatment-process |
| H3 vs braces/aligners | 3 | 10 | comparisons |
| H4 Living with | 1 | 10 | diet article |
| H5 Comfort/pain | 1 | 10 | does-it-hurt |
| H6 Teens | 1 | 10 | parents guide |
| H7 Adults | 3 | 10 | over-40s, professionals, relapse-after-braces spokes (draft) |
| H8 Suitability | 2 | 10 | crowded + close-gaps spokes (draft) |
| H9 Essex local | 3 | 10 | local category + town pages |
| H10 Provider/at-home | 1 | 10 | mail-order danger article |

Totals: 10 hubs, 100 spokes; ~17 articles seed the silo, ~83 to write (Essex-framed).
## Slug rules (writer: follow on every spoke)

Kebab-case: lowercase, hyphens only, ASCII only, 3-6 words, under ~60 chars.
Do NOT: include a year/date; reuse or near-duplicate an existing slug; use a
reserved head term or the parent hub's head term; keyword-stuff or repeat a word;
use stop words (a/the/to/for). Never rename or reuse a published slug.
