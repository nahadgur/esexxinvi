# Schema Architecture Reference
## invisaligndentistsessex.uk — YMYL Aggregator Schema System

---

## Entity Map

| Entity | Schema Type | @id Anchor | Where Defined |
|---|---|---|---|
| The directory | `Organization` + `ProfessionalService` | `/#organization` | Root layout (global) |
| The website | `WebSite` | `/#website` | Root layout (global) |
| A town hub page | `CollectionPage` | `/locations/[town]/#webpage` | Town hub page.tsx |
| Featured clinics list | `ItemList` | `/locations/[town]/#itemlist` | Town hub page.tsx |
| A matrix page | `MedicalWebPage` | `/locations/[town]/[service]/#webpage` | Matrix page.tsx |
| A clinic entity | `Dentist` | `/clinics/[slug]/#dentist` | Referenced everywhere, defined in clinic profile |
| A clinic page | `ProfilePage` | `/clinics/[slug]/#webpage` | Clinic profile page.tsx |
| The treatment | `MedicalProcedure` | (inline, no stable @id needed) | Matrix page.tsx |
| FAQs | `FAQPage` | (no @id — standalone block) | Matrix page.tsx |

---

## Critical Separation Rules

### 1. The directory is NEVER a dental provider

```json
// CORRECT — directory Organization
{
  "@type": ["Organization", "ProfessionalService"],
  "description": "Independent directory... We are not a dental practice."
}

// WRONG — never do this
{
  "@type": "Dentist",
  "name": "Invisalign Dentists Essex"
}
```

### 2. AggregateRating belongs to the Dentist, not the page

```json
// CORRECT
{ "@type": "Dentist", "name": "Nuffield Dental",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8" } }

// WRONG
{ "@type": "CollectionPage",
  "aggregateRating": { ... } }
```

### 3. Clinic @id is stable and consistent across all pages

The same clinic must always resolve to the same `@id`:
```
/clinics/nuffield-dental-chelmsford/#dentist
```
This allows Google to consolidate the entity across the 6 treatment pages
that feature the same clinic. If @id is inconsistent, Google treats them
as separate entities and ratings do not consolidate.

### 4. MedicalWebPage is ONLY for treatment information pages

| Page type | Primary schema type | Reason |
|---|---|---|
| Homepage | `WebPage` | General landing |
| /locations/ | `CollectionPage` | Index of locations |
| /locations/[town]/ | `CollectionPage` | Index of treatments for a town |
| /locations/[town]/[service]/ | `MedicalWebPage` | Health information + provider matching |
| /clinics/[slug]/ | `ProfilePage` | About a specific clinic |
| /treatments/[service]/ | `MedicalWebPage` | Treatment guide |
| /blog/[post]/ | `Article` | Editorial content |

### 5. priceRange on the Dentist, not the MedicalWebPage

Price information describes what the CLINIC charges. Attaching it to the
directory page rather than the Dentist entity is a misrepresentation.

---

## Variable → Schema Field Mapping

| Matrix variable | Schema field | Schema type | Node |
|---|---|---|---|
| `clinic_1_name` | `name` | string | Dentist |
| `clinic_1_slug` | `@id` anchor + `url` | string | Dentist |
| `clinic_1_tier` | `additionalProperty.value` | PropertyValue | Dentist |
| `clinic_1_google_rating` | `aggregateRating.ratingValue` | AggregateRating | Dentist |
| `clinic_1_review_count` | `aggregateRating.reviewCount` | AggregateRating | Dentist |
| `schema_geo_lat` | `geo.latitude` | GeoCoordinates | Dentist |
| `schema_geo_long` | `geo.longitude` | GeoCoordinates | Dentist |
| `price_range_low` + `price_range_high` | `priceRange` | string | Dentist |
| `wait_time_days` | FAQ 3 answer body | string (interpolated) | FAQPage |
| `finance_min_monthly` | FAQ 1 answer body | string (interpolated) | FAQPage |
| `price_variance_note` | FAQ 1 answer body (anchor) | string (verbatim) | FAQPage |
| `town_name` | `addressLocality`, page names | string | Multiple |
| `town_slug` | `@id` anchors, `url` fields | string | Multiple |

---

## Injection Pattern — page.tsx

Each schema block is a separate `<script type="application/ld+json">` tag.
Do NOT combine all blocks into one tag — separate tags allow Google to process
each independently and reduces the blast radius if one block has a validation error.

```tsx
// Order matters for Google's parser — inject in this sequence:
// 1. BreadcrumbList       (navigation context)
// 2. Primary page type    (CollectionPage or MedicalWebPage)
// 3. Dentist entities     (clinic data — conditional on data presence)
// 4. FAQPage              (conditional on matrix data presence)

{schemas.map((schema, i) => (
  <script
    key={i}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
  />
))}
```

---

## YMYL Quality Signals Checklist

For a medical aggregator, Google applies heightened quality scrutiny. Each
of the following is addressed in the schema system:

- [x] **E-E-A-T — Experience**: `foundingDate` on Organization; `caseVolume` PropertyValue on Dentist
- [x] **E-E-A-T — Expertise**: `medicalSpecialty: Dentistry`; `knowsAbout` on Organization
- [x] **E-E-A-T — Authoritativeness**: Stable `@id` anchors enable entity consolidation across pages
- [x] **E-E-A-T — Trust**: Explicit aggregator disclaimer in `description`; `lastReviewed` on MedicalWebPage
- [x] **Aggregator separation**: Directory is never typed as `Dentist` or `MedicalOrganization`
- [x] **Rating integrity**: `aggregateRating` only on `Dentist` nodes; never fabricated without real data
- [x] **Price integrity**: `priceRange` on `Dentist` entity; `priceVarianceNote` verbatim in FAQ
- [x] **Treatment accuracy**: `MedicalProcedure` nodes use factual clinical descriptions; no marketing language
- [x] **No fake geo**: `GeoCoordinates` on clinics only, conditional on real data; never on directory
- [x] **No fake phone**: `telephone` on clinics only, conditional; never on directory Organization

---

## Schema Validation

Test each page type at:
- https://validator.schema.org/ — paste JSON-LD directly
- https://search.google.com/test/rich-results — test full page URL post-deployment
- https://search.google.com/search-console/rich-results — monitor after indexing

Expected rich result eligibility:
| Page type | Expected rich result |
|---|---|
| /locations/[town]/[service]/ | FAQ rich result (FAQPage) |
| /clinics/[slug]/ | Review snippet (AggregateRating on Dentist) |
| Sitewide | Sitelinks search box (WebSite SearchAction) |
