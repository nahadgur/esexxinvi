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

## 2026-06-13 00:32 — esexxinvi-invisalign-writer (esexxinvi)
- Sites: esexxinvi: one new H8 draft spoke can-invisalign-fix-crossbite appended to data/blog.ts; SILO-PLAN section 8 H8 count 4 -> 5
- Staged files: data/blog.ts, docs/SILO-PLAN.md (committed 4be2d55)
- Live flips this run: none
- tsc: pass
- Commit prompt / git state: committed 4be2d55 on main; push failed (no credentials in sandbox) — needs push from Claude Code
- Status: PENDING PUSH

## 2026-06-13 08:36 — esexxinvi-invisalign-writer (esexxinvi)
- Sites: esexxinvi: one new H7 adults draft spoke `invisalign-teeth-grinding` ("Can You Have Invisalign If You Grind Your Teeth?", hub invisalign-for-adults) appended to data/blog.ts. Bruxism/grinding angle, distinct from the 3 existing H7 drafts (over-40s, professionals, relapse). 897 words, answer-first opening, 5 sections, 5 distinct FAQs. Essex substance throughout: CM/SS/CO postcodes, Chelmsford/Southend/Colchester/Basildon/Brentwood/Shenfield/Billericay, mid/south Essex NHS. NHS teeth-grinding page is the one external link; Align Technology named. Links: inline up-link /guides/invisalign-for-adults/, pillar /treatments/adults/, /clinics/ matching CTA. No sibling links (all H7 siblings still draft). Article/MedicalWebPage + Breadcrumb + FAQ schema via the shared builders. Matching framing kept (we connect, we do not treat); no fabricated content; UK English; no em dashes; reserved head terms avoided.
- Staged files: data/blog.ts (committed 4f72361)
- Live flips this run: none (writer task; draft only)
- tsc: pass; check-links.mjs: 0 broken across 33 slugs
- Commit prompt / git state: committed 4f72361 on main (data/blog.ts only). SILO-PLAN section 8 tracker H7 3->4 is edited in the working tree (line 130 now shows 4) but the commit did NOT capture it: this mount returns "Operation not permitted" on unlink/rename of .git/index.lock and .git/HEAD.lock, so the index update for SILO-PLAN.md was silently discarded ("no changes added to commit" despite the working-tree edit). Stale lock files had to be moved aside (mv works, rm does not) several times to let the blog.ts commit through, leaving harmless .git/*.lock.* clutter. ACTION on the real machine: `git add docs/SILO-PLAN.md && git commit -m "esexxinvi: tracker H7 3->4 grinding"`, then `git push origin main`. This commit (4f72361) plus prior PENDING PUSH commits (4be2d55 and earlier) are still ahead of origin; sandbox has no GitHub credentials.
- Status: PENDING PUSH

## 2026-06-15 01:02 — esexxinvi-invisalign-writer (esexxinvi)
- Sites: esexxinvi: one new H8 suitability draft spoke `can-invisalign-fix-open-bite` ("Can Invisalign Fix an Open Bite in Essex?", hub what-invisalign-can-fix) appended to data/blog.ts. Open-bite angle, distinct from the 5 existing H8 drafts (crowded, close-gaps, overbite, underbite, crossbite). ~1000-word body, answer-first opening, 6 sections, 5 distinct FAQs (close it / cause / relapse-tongue-thrust / severe-skeletal-limits / NHS-Essex). Essex substance throughout: CM/SS/CO postcodes, Chelmsford/Brentwood/Southend/Basildon/Rayleigh/Colchester/Clacton/Shenfield/Billericay, mid/south Essex NHS position. NHS named for habit/orthodontics; Align Technology (SmartTrack/ClinCheck) named. Links: inline up-link /guides/what-invisalign-can-fix/, pillar /treatments/overbite/ (bite correction), /clinics/ matching CTA. No external hyperlink used (authorities named inline). No sibling links (all H8 siblings still draft). draft:true. Matching framing kept (we connect, we do not treat); no fabricated content; UK English; no em dashes; reserved head terms avoided. Chose H8 over H7 within the priority pair because H7's remaining intents overlap the rich over-40s spoke (intent-duplication hard rule); H8 open bite is a clean, recognised, uncovered malocclusion.
- Staged files: data/blog.ts (open-bite entry), docs/SILO-PLAN.md (section 8 tracker H8 5->6) — edited in working tree, NOT committed (see below).
- Live flips this run: none (writer task; draft only).
- tsc: pass (npx tsc --noEmit clean after rename round-trip). check-links.mjs: 0 broken across 34 slugs.
- Commit prompt / git state: COMMIT FAILED. The mounted .git is read-only to this sandbox: every unlink/rename under .git returns "Operation not permitted", and .git/index is corrupt ("bad signature 0x00000000 / index file corrupt") with a stale .git/index.lock that cannot be removed. No git command succeeds. Working-tree files are correct and verified. ACTION on the real machine (Claude Code): clear the stale lock and rebuild the index, e.g. `rm -f .git/index.lock && git reset` (or `git read-tree HEAD`), then `git add data/blog.ts docs/SILO-PLAN.md && git commit -m "esexxinvi: H8 open-bite draft spoke + tracker H8 5->6" && git push origin main`. NOTE the prior PENDING PUSH commits 4f72361 (grinding spoke, plus its uncommitted SILO-PLAN H7 3->4 tracker edit) and 4be2d55 and earlier are still ahead of / not pushed to origin; this run adds the open-bite working-tree changes on top. Do not commit docs/HANDOFF-QUEUE.md.
- Status: PENDING PUSH

## 2026-06-15 08:39 — esexxinvi-invisalign-writer (invisaligndentistsessex.uk)
- Sites: esexxinvi — wrote 1 H7 (adults) spoke "Invisalign and Teeth Whitening for Adults in Essex" (slug invisalign-teeth-whitening-adults), draft:true, 835-word body + 5 FAQs, Essex substance (Brentwood/Chelmsford/Loughton/Southend/Colchester/Leigh-on-Sea), GDC/NHS/Align attributed, links up to /guides/invisalign-for-adults/ + pillar /treatments/adults/ + matching CTA /clinics/.
- Staged files: data/blog.ts, docs/SILO-PLAN.md (H7 tracker 4->5)
- Live flips this run: none (writer only; awaits publisher)
- tsc: pass (npx tsc --noEmit clean). check-links.mjs: 0 broken across 35 slugs.
- Commit prompt / git state: COMMIT FAILED. Sandbox .git is read-only/corrupt again ("bad signature 0x00000000 / index file corrupt"); safe-commit could not write. Working tree is correct and verified. NOTE: data/blog.ts was truncated mid-write once during this run and rebuilt by hand; final file is intact (736 lines, helper exports present, tsc clean). ACTION on the real machine (Claude Code): rebuild the index then commit, e.g. `rm -f .git/index.lock && git read-tree HEAD` (or `git reset`), then `git add data/blog.ts docs/SILO-PLAN.md && git commit -m "esexxinvi: H7 adults whitening draft spoke + tracker H7 4->5" && git push origin main`. Prior PENDING PUSH commit 4f72361 (grinding spoke) and earlier are still ahead of origin; this run stacks the whitening working-tree changes on top. Do not commit docs/HANDOFF-QUEUE.md.
- Status: PENDING PUSH

## 2026-06-16 00:38 — esexxinvi-invisalign-writer (invisaligndentistsessex.uk)
- Sites: esexxinvi — wrote 1 H7 (adults) spoke "Retainers After Invisalign and How to Avoid Relapse" (slug retainers-after-invisalign), draft:true, ~1080-word body + 5 distinct FAQs (how-long-wear / stop-wearing-relapse / fixed-vs-removable / replacement-cost-Essex / included-in-price). Unique primary intent = post-treatment RETENTION, which no existing spoke owns; chosen because H7's plan-named intents (over-40s, professionals, relapse, grinding, whitening) are saturated and retention is the recurring adult relapse theme on this site. Essex substance throughout (Chelmsford/Southend/Brentwood/Colchester/Shenfield/Basildon, NHS-not-funded note for cosmetic retention). Authorities named inline (Align Technology = Vivera material; NHS funding position) with no external hyperlink, matching house style. Links: inline up-link /guides/invisalign-for-adults/ (varied anchor "deciding whether adult treatment is right for you"), pillar /treatments/adults/, matching CTA /clinics/. No sibling links (all H7 siblings still draft). Matching framing kept (we connect, we do not treat); no guarantees; UK English; no em dashes; reserved head terms avoided.
- Staged files: data/blog.ts (retainers-after-invisalign entry, appended after the whitening draft), docs/SILO-PLAN.md (section 8 tracker H7 5->6) — edited in working tree, NOT committed (see below).
- Live flips this run: none (writer only; awaits publisher).
- tsc: pass (npx tsc --noEmit clean). check-links.mjs: 0 broken across 36 slugs.
- Commit prompt / git state: COMMIT FAILED (same recurring sandbox condition as the prior open-bite and whitening runs). A stale .git/index.lock from a timed-out safe-commit is owned by uid nifty-jolly-maxwell while this shell runs as uid 1192, so unlink/rm returns "Operation not permitted"; safe-commit detects no live git process but cannot clear the lock and loops to timeout. No git command can commit. Working-tree files are correct and verified (tsc + link gate green). ACTION on the real machine (Claude Code): clear the stale lock then commit, e.g. `rm -f .git/index.lock .git/*.lock.* && git reset` (or `git read-tree HEAD`), then `git add data/blog.ts docs/SILO-PLAN.md && git commit -m "esexxinvi: H7 adults retainers draft spoke + tracker H7 5->6" && git push origin main`. This run's changes STACK ON TOP of the prior still-unpushed PENDING PUSH work (whitening + tracker H7 4->5, open-bite + tracker H8 5->6, grinding 4f72361, and earlier ahead-of-origin commits). Do not commit docs/HANDOFF-QUEUE.md.
- Status: PENDING PUSH

## 2026-06-16 08:40 — esexxinvi-invisalign-writer (invisaligndentistsessex.uk)
- Sites: esexxinvi — wrote 1 H8 (suitability) spoke "Can You Have Invisalign with Crowns, Veneers and Fillings?" (slug invisalign-crowns-veneers-fillings), draft:true, ~880-word body + 5 distinct FAQs (crowns / attachments-bonding-to-porcelain / implant-cannot-move / veneer-sequencing-before-or-after / fillings-damage). Unique primary intent = suitability with EXISTING DENTAL WORK (restorations/implants), the plan's named H8 "with crowns/fillings" gap; no existing spoke owns it. H7's plan-named intents are saturated, so picked the explicit unwritten H8 intent. Essex substance throughout (Chelmsford/Southend/Colchester/Brentwood/Basildon/Rayleigh/Clacton, CM/SS/CO postcodes, NHS general-dentistry restorative history). Authorities named inline (Align Technology = ClinCheck/attachments; GDC-registered planning) with no external hyperlink, house style. Links: inline up-link /guides/what-invisalign-can-fix/ (varied anchor "what Invisalign can and cannot treat"), pillar /treatments/adults/, matching CTA /clinics/. No sibling links (all H8 siblings still draft). Matching framing kept (we connect, we do not treat); no guarantees; UK English; no em dashes; reserved head terms avoided.
- Staged files: data/blog.ts (crowns-veneers-fillings entry appended after retainers draft), docs/SILO-PLAN.md (section 8 tracker H8 6->7) — COMMITTED this run.
- Live flips this run: none (writer only; awaits publisher).
- tsc: pass (npx tsc --noEmit clean after rename round-trip). check-links.mjs: 0 broken across 37 slugs.
- Commit prompt / git state: COMMIT SUCCEEDED this run = df085df ("esexxinvi: add H8 suitability spoke invisalign-crowns-veneers-fillings (draft)"). Cleared the recurring stale .git/index.lock by RENAMING it aside (mv .git/index.lock .git/index.lock.stale) since rm returns "Operation not permitted" on this mount; commit then completed (git emitted harmless "unable to unlink tmp_obj/HEAD.lock" warnings but wrote the commit object). PUSH BLOCKED: `git push` fails with "could not read Username for https://github.com: No such device or address" (no credentials in sandbox). Local main is now AHEAD of origin by 3 (df085df + the prior PENDING PUSH commits incl. 4f72361 grinding). ACTION on the real machine (Claude Code): delete leftover lock artifact `.git/index.lock.stale`, then `git push origin main` to drain df085df and the earlier ahead-of-origin commits. Do not commit docs/HANDOFF-QUEUE.md.
- Status: PENDING PUSH
