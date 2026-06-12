# esexxinvi handoff queue

Dated run-blocks from the automated writer/publisher. Newest at the bottom.

---

## 2026-06-09 — writer run (esexxinvi-invisalign-writer)

- **Site:** esexxinvi (invisaligndentistsessex.uk)
- **Spoke written:** `invisalign-over-40s-essex` — "Invisalign for Over-40s and Over-50s in Essex"
- **Hub:** H7 `invisalign-for-adults` (was 0 spokes, now 1; first content in this hub)
- **draft:** true
- **Links:** up-link to /guides/invisalign-for-adults/, pillar link to /treatments/adults/, /clinics/ directory, plus the built-in Get matched CTA. No same-hub siblings published yet, so no sibling links. External authorities (NHS, Align Technology) cited in prose, not linked.
- **YMYL:** no fabricated testimonials/stats/credentials; gum-health gate emphasised; matching framing kept (we connect, we do not treat); no treatment guarantees; UK English; no em dashes.
- **tsc:** NOT VERIFIED this run — see blocker below.
- **git:** NOT COMMITTED this run — see blocker below.

### BLOCKER (needs a Claude Code session on the real machine)

The bash sandbox in this Cowork run mounted a **stale/inconsistent snapshot** of the
repo: `data/blog.ts` appeared in the shell as the old 748-byte pre-migration stub
(no posts), and `app/HomeClient.tsx` had trailing NUL-byte corruption plus CRLF
endings, while the file tools (Read/Edit) correctly saw and wrote the live,
fully-populated tree. Because the shell and the live filesystem were out of sync,
`npx tsc --noEmit` and `git` could not be trusted, and committing from the shell
would have pushed a broken stale state to `main`.

The article edit itself landed correctly on the live `data/blog.ts` (verified via
the file tools) and on `docs/SILO-PLAN.md` (section 8 H7 count 0 -> 1).

**To finish on the real machine:**
1. `npx tsc --noEmit` (expect clean; rename round-trip if tsbuildinfo is stale).
2. Confirm `app/HomeClient.tsx` is intact (HEAD is clean; only the sandbox copy was corrupt).
3. `git add data/blog.ts docs/SILO-PLAN.md docs/HANDOFF-QUEUE.md` then commit:
   `feat(esexxinvi): add H7 adults spoke invisalign-over-40s-essex (draft)` and push to `main`.

### Status

- Buffer (parked drafts) after this run: count from `data/blog.ts` where `draft:true` (this is the 1st).
- Total toward 100 spokes: ~14 written (13 published seed + 1 new draft).
- **Next run:** H8 `what-invisalign-can-fix` (suitability) is still at 0 spokes — write a condition-framed Essex spoke there next (each links its exact /treatments/<condition>/ page).

---

## 2026-06-10 — writer run (esexxinvi-invisalign-writer)

- **Site:** esexxinvi (invisaligndentistsessex.uk)
- **Spoke written:** `can-invisalign-fix-crowded-teeth` — "Can Invisalign Fix Crowded Teeth?"
- **Hub:** H8 `what-invisalign-can-fix` (was 0 spokes, now 1; first content in this hub, clears the priority gap flagged last run)
- **draft:** true
- **Body:** 843 words, answer-first ~50-word opening, 6 sections, 5 distinct FAQs.
- **Links:** up-link to /guides/what-invisalign-can-fix/ (anchor "what Invisalign can treat"), exact condition pillar /treatments/crowded/, /guides/invisalign-cost-essex/ for the NHS-vs-private band reference, /clinics/ directory, plus the built-in Get matched CTA. No same-hub siblings published yet, so no sibling links. External authorities (NHS, Align Technology, IOTN) cited in prose, not linked.
- **Essex substance:** mid/south Essex NHS orthodontic footprint and IOTN eligibility, CM/SS/CO postcode districts, named towns (Chelmsford, Basildon, Southend, Colchester, Brentwood, Rayleigh, Clacton, Shenfield, Billericay), commuter appointment spacing.
- **YMYL:** no fabricated testimonials/stats/credentials; matching framing kept (we connect, we do not treat); explicit "no reputable dentist guarantees an outcome"; UK English; no em dashes. Did not target the reserved head term (treatments page owns "crowded teeth Invisalign"); framed as a suitability question.
- **tsc:** NOT VERIFIED in-sandbox — same blocker as 2026-06-09 (see below). New entry validated in isolation with `node` (parses clean, 0 em dashes, all links present).
- **git:** NOT COMMITTED in-sandbox — see blocker below.

### BLOCKER (recurring — needs a Claude Code session on the real machine)

Same root cause as the 2026-06-09 run. The Cowork bash sandbox mounted a **stale,
partially-synced snapshot** of the repo: `data/blog.ts` showed in the shell as a
truncated 41,890-byte copy (mtime frozen at the pre-edit time, cut off mid-way
through the new entry), and the shell could create files but `rm`/unlink returned
"Operation not permitted". The file tools (Read/Edit) correctly saw and wrote the
live, fully-populated tree. Because the shell and the live filesystem are out of
sync, `npx tsc --noEmit` and `git` cannot be trusted, and committing from the shell
would push the broken stale state to `main`.

The article edit itself landed correctly on the live `data/blog.ts` and
`docs/SILO-PLAN.md` (section 8, H8 count 0 -> 1), verified via the file tools.

**To finish on the real machine:**
1. `npx tsc --noEmit` (expect clean; rename round-trip if tsbuildinfo is stale).
2. `git add data/blog.ts docs/SILO-PLAN.md docs/HANDOFF-QUEUE.md` then commit:
   `feat(esexxinvi): add H8 suitability spoke can-invisalign-fix-crowded-teeth (draft)` and push to `main`.

### Status

- Buffer (parked drafts) after this run: 2 (`invisalign-over-40s-essex` H7, `can-invisalign-fix-crowded-teeth` H8), both awaiting the publisher and a Claude Code commit.
- Total toward 100 spokes: ~15 written (13 published seed + 2 new drafts).
- **Next run:** H8 still thin (1/10) and H7 thin (1/10). Suggested next: another H8 condition spoke linking its treatment page (gaps -> /treatments/gaps/, or overbite -> /treatments/overbite/), or an H9 Essex town spoke. Avoid reserved head terms; keep the suitability/question framing.


## 2026-06-10 — writer run (esexxinvi): H7 adults spoke `discreet-invisalign-professionals` (draft)

- **Site:** esexxinvi (invisaligndentistsessex.uk). **Hub:** H7 invisalign-for-adults. **Slug:** discreet-invisalign-professionals. **draft:** true. **Words:** ~820 body.
- **Angle:** Invisalign for busy working professionals in Essex — discretion at work, first-week speech/lisp before presentations, removing trays for meetings/client lunches, fitting short appointments around a London commute. Distinct from the existing H7 over-40s spoke (which owns gum health / crowns / relapse), no paraphrase of the national invisaligndentists.uk.
- **Links:** up-link to /guides/invisalign-for-adults/ (anchor "guide to Invisalign for adults"), pillar /treatments/adults/, /clinics/ matching CTA. No same-hub siblings published (over-40s still draft), so no sibling links. Align Technology / SmartTrack cited in prose, not linked. 0 external hyperlinks.
- **Essex substance:** Liverpool Street commuter line from Chelmsford, Shenfield, Billericay; client-facing roles in Southend, Brentwood, Colchester; CM/SS/CO postcode districts; early-morning/evening clinic slots; at-home weekly aligner change before the train.
- **YMYL:** no fabricated testimonials/stats/credentials; matching framing kept (we connect, we do not treat); editorial-team byline; advisory board + success stories untouched; UK English; no em dashes; did not target reserved head terms.
- **tsc:** `npx tsc --noEmit` clean (verified in-sandbox; sandbox FS in sync this run, unlike 2026-06-09/earlier-06-10 blocked runs).
- **Note:** the file-tool Edit truncated data/blog.ts mid-run (same stale-snapshot class of issue as prior runs); recovered by rebuilding from `git show HEAD:data/blog.ts` and inserting the new post via an in-place python write in the bash/git world. git diff confirms a clean +31 insertion, no deletions.
- **git:** committed to main locally as `1f69545`. **Push FAILED** (sandbox has no GitHub credentials: `could not read Username for https://github.com`). Local main is one commit ahead of origin (origin at d9959a5). Needs a `git push origin main` from the real machine.

### Status (after this run)
- Buffer (parked drafts): 3 (`invisalign-over-40s-essex` H7, `discreet-invisalign-professionals` H7, `can-invisalign-fix-crowded-teeth` H8) awaiting the publisher.
- Total toward 100 spokes: ~16 written (13 published seed + 3 new drafts).
- **Next run:** H8 still thin (1/10) and H7 now 2/10. Suggested next: an H8 condition spoke linking its exact treatment page (gaps -> /treatments/gaps/, overbite -> /treatments/overbite/), or an H9 Essex town spoke. Avoid reserved head terms; keep suitability/question framing.


## 2026-06-11 — writer run (esexxinvi): H8 suitability spoke `close-gaps-between-teeth` (draft)

- **Site:** esexxinvi (invisaligndentistsessex.uk). **Hub:** H8 what-invisalign-can-fix. **Slug:** close-gaps-between-teeth. **draft:** true. **Words:** ~1080 body, 5 FAQs.
- **Angle:** Can Invisalign close gaps / spacing — distinct from the existing H8 crowded-teeth spoke. Owns the spacing/diastema sub-intent: causes of gaps (tooth-jaw size mismatch, labial frenum, missing teeth, tongue thrust, gum disease), how aligners close space, when restorative/frenectomy/gum work is needed first, and why retainers matter most for relapse-prone gap cases. No paraphrase of the national invisaligndentists.uk.
- **Links:** up-link to /guides/what-invisalign-can-fix/ (anchor "the problems Invisalign can treat"), exact treatment-page pillar /treatments/gaps/ (H8 rule), /guides/invisalign-cost-essex/ contextual, /clinics/ directory, plus the auto-rendered matching CTA. No same-hub siblings published (crowded still draft), so no sibling links. Align Technology / SmartTrack cited in prose, not linked. 0 external hyperlinks.
- **Essex substance:** mid & south Essex NHS / IOTN access; Chelmsford, Basildon, Southend, Colchester, Rayleigh, Brentwood, Clacton, Billericay, Shenfield; CM/SS/CO postcode districts; London commuter framing; 6-8 week appointment spacing.
- **YMYL:** no fabricated testimonials/stats/credentials; matching framing kept (we connect, we do not treat); editorial-team byline; advisory board + success stories untouched; UK English; no em dashes; did not target reserved head terms (no "gaps Invisalign" / "Invisalign [town]").
- **tsc:** `npx tsc --noEmit` clean (tsbuildinfo rm blocked by sandbox perms; ran full check, exit 0).
- **Note:** same file-tool Edit truncation as prior runs (stale-snapshot mount class). Recovered the established way: rebuilt from `git show HEAD:data/blog.ts` and spliced the new post via an in-place python write in the bash/git world. `git diff` confirms a clean +32 insertion, no deletions.
- **git:** see run summary for hash. Sandbox has no GitHub credentials, so push is expected to fail and is noted there; needs `git push origin main` from the real machine (prior unpushed local commit 1f69545 is also still ahead of origin).

### Status (after this run)
- Buffer (parked drafts): 4 (`invisalign-over-40s-essex` H7, `discreet-invisalign-professionals` H7, `can-invisalign-fix-crowded-teeth` H8, `close-gaps-between-teeth` H8) awaiting the publisher.
- Total toward 100 spokes: ~17 written (13 published seed + 4 new drafts).
- **Next run:** H8 now 2/10, H7 2/10 — both still thin. Suggested next: another H8 condition spoke linking its exact treatment page (overbite -> /treatments/overbite/, underbite -> /treatments/underbite/, or crossbite -> /treatments/crossbite/), or begin H9 Essex town spokes. Avoid reserved head terms; keep the suitability/question framing.

## 2026-06-11 — esexxinvi writer run (teeth-shifted-after-braces)

- **Site:** esexxinvi (invisaligndentistsessex.uk)
- **Spoke written:** `teeth-shifted-after-braces` — "Invisalign for Teeth That Shifted After Braces in Essex"
- **Hub:** H7 invisalign-for-adults (was thin at 2 spokes, now 3). draft:true.
- **Why:** next gap on priority order (thin hubs first); distinct adult intent (orthodontic relapse) not yet a standalone spoke, only a subsection in invisalign-over-40s-essex.
- **Length:** ~970 words, answer-first opening, 6 sections, 5 FAQs.
- **Linking:** up-link to /guides/invisalign-for-adults/; sideways /guides/invisalign-cost-essex/; pillar /treatments/crowded/; matching CTA + /clinics/. No sibling links (both H7 siblings still draft). External: 1 (NHS orthodontics), Align Technology named.
- **tsc:** `npx tsc --noEmit` clean (exit 0).
- **Link gate:** check-links.mjs — 29 slugs, 0 broken.
- **Note:** same file-tool Edit truncation as prior runs (stale-snapshot mount class). Recovered the established way: restored data/blog.ts + the two collaterally-truncated client files (BlogPostClient.tsx, GuideHubClient.tsx) from `git show HEAD:` via redirect, then spliced the new post in the bash/git world with python. git diff confirms a clean single +post insertion to data/blog.ts plus the section-8 count bump.
- **git:** committed locally as `4b74fa5`. Push failed (no GitHub credentials in sandbox: "could not read Username for https://github.com"). Push pending from a credentialed environment / next Claude Code session.

## 2026-06-12 — esexxinvi writer run (can-invisalign-fix-overbite)

- **Site:** esexxinvi (invisaligndentistsessex.uk)
- **Spoke written:** `can-invisalign-fix-overbite` — "Can Invisalign Fix an Overbite?"
- **Hub:** H8 what-invisalign-can-fix (was thin at 2 spokes, now 3). draft:true.
- **Why:** priority order = thin hubs first; H8 was the thinnest named-priority hub. Next condition after crowded + gaps, links its exact treatment page per the H8 rule.
- **Essex substance:** mid/south Essex NHS access + IOTN, CM/SS/CO postcodes, Chelmsford/Basildon/Southend/Colchester/Brentwood/Clacton/Rayleigh/Billericay/Shenfield commuter framing, private-cost reality. Not a national-site paraphrase; overbite/deep-bite/overjet distinction is the differentiating angle.
- **Length:** ~1130 words, answer-first ~60-word opening, 5 sections, 5 distinct FAQs.
- **Linking:** up-link to /guides/what-invisalign-can-fix/; pillar /treatments/overbite/ (exact condition page); sideways /guides/invisalign-cost-essex/; matching CTA + /clinics/. No sibling links (both H8 siblings still draft). External authorities named inline (Align Technology, NHS, IOTN), no outbound hyperlinks.
- **tsc:** `npx tsc --noEmit` clean (exit 0).
- **Link gate:** check-links.mjs — 30 slugs, 0 broken.
- **Note:** same file-tool Edit truncation as prior runs (stale-snapshot mount class; bash mount also blocks all deletes this run, and a stale .git/index.lock from the 2026-06-11 run was present). Recovered the established way: rebuilt data/blog.ts from `git show HEAD:` and spliced the new post via in-place python in the bash/git world. Committed using a temp GIT_INDEX_FILE to bypass the undeletable index.lock. git diff confirms a clean single +post insertion plus the section-8 count bump.
- **git:** see run summary for hash. Sandbox has no GitHub credentials, so push is expected to fail and is noted there; needs `git push origin main` from the real machine (prior unpushed local commits 4b74fa5 and 1f69545 are also still ahead of origin).

### Status (after this run)
- Buffer (parked drafts): 6 (`invisalign-over-40s-essex` H7, `discreet-invisalign-professionals` H7, `teeth-shifted-after-braces` H7, `can-invisalign-fix-crowded-teeth` H8, `close-gaps-between-teeth` H8, `can-invisalign-fix-overbite` H8) awaiting the publisher.
- Total toward 100 spokes: ~20 written (14 published seed + 6 parked drafts).
- **Next run:** H8 now 3/10, H7 3/10 — both still thin. Suggested next: another H8 condition spoke linking its exact treatment page (underbite -> /treatments/underbite/, or crossbite -> /treatments/crossbite/), or begin H9 Essex town spokes (12 town pages exist). Avoid reserved head terms; keep the suitability/question framing.

## 2026-06-12 08:40 — esexxinvi-invisalign-writer (esexxinvi)
- Sites: esexxinvi: wrote ONE new H8 spoke "Can Invisalign Fix an Underbite?" (slug can-invisalign-fix-underbite, draft:true, hub what-invisalign-can-fix); SILO-PLAN section 8 H8 count 3->4
- Staged files: data/blog.ts, docs/SILO-PLAN.md (both committed)
- Live flips this run: none (writer task; draft only)
- tsc: pass
- Commit prompt / git state: committed eb2ed01 on main (amended once to drop an accidentally-included pre-staged HANDOFF-QUEUE.md deletion left by a crashed git process; stale .git/index.lock and .git/HEAD.lock removed). Push failed: sandbox has no GitHub credentials. Prior unpushed commits also still ahead of origin; needs `git push origin main` from the real machine.
- Status: PENDING PUSH
