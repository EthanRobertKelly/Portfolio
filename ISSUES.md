# Portfolio — Issue Tracker

> Convert these to GitHub Issues once `gh` CLI is configured.
> Labels: `priority:high` `priority:medium` `priority:low`

---

## [priority:high]

### H1 — Tune Resume for Hard-Tech Mission Roles
Resume is structurally solid but needs a final pass:
- Summary paragraph could be tighter and more direct
- Keyword density: ensure ATS-critical terms appear in bullet context, not just skills list (systems engineering, embedded systems, commissioning, cross-functional, autonomous systems)
- Verify every bullet leads with impact, not task
- Consider whether "Systems Engineer (Consultant)" reads correctly to a hard-tech startup vs. a defense prime

### H2 — Tune Mission & Vision (Hero + Philosophy)
The hero statement and philosophy section are rewritten but not final:
- Hero statement needs one more pass — does it feel like Ethan or does it feel like a brief?
- "What I'm Looking For" block in Philosophy needs review — is it too long? Too direct? Not direct enough?
- The philosophy pull-quote ("Are we in discovery, or just learning fast?") is strong — make sure it still lands in the new framing

### H3 — Timeline: Reorganize Layout + Add Images
The timeline is the weakest visual section. Three photo placeholders were removed but the underlying issue remains — the section is text-heavy and linearly structured:
- Design a centered, visually engaging timeline layout (consider alternating left/right or card-based)
- Source and add real photos: China Lake onsite, MV Kennicott, Sea++ vessel, Fernware setup
- Each major entry should have a strong visual anchor
- Stats rows (tl-stats) are good but get lost — make them more prominent

### H4 — Login Gate for Job Searcher & Recipe Manager
Both tools are publicly accessible at `/job-searcher.html` and `/recipe-manager.html`. Until a login gate is built:
- Anyone visiting the portfolio can see active job search activity
- Consider at minimum a simple password gate or obscured URL
- Longer term: proper auth (GitHub OAuth or similar, no backend required with Netlify/Vercel)

---

## [priority:medium]

### M1 — Populate GitHub Profile
Portfolio links to `github.com/EthanRobertKelly`. What's there matters:
- Pin Fernware repo (create if not yet public)
- Pin Sea++ repo (publish code, even if rough)
- Add a GitHub profile README that matches portfolio positioning
- A bare GitHub profile undermines an otherwise strong portfolio

### M2 — Fernware: Create & Link GitHub Repo
Fernware is mentioned in the portfolio and resume but has no repo link:
- Create `EthanRobertKelly/Fernware` repo
- Add README with system diagram, parts list, wiring
- Link from portfolio timeline entry and resume

### M3 — Use Full Chris Cilino Quote
The current portfolio uses a truncated version. The full quote includes the scores (9/10 Communication, 8/10 Collaboration, 9/10 Task Ownership, 10/10 Big Picture) and the "rock star" + "should have been a lawyer" lines. Full version is far more compelling — add scores display to the qcard.

### M4 — Add More Peer Feedback to Portfolio
Currently showing 6 quotes. Full set has 11 reviewers. Strongest unused:
- Natalie Pippolo (China Lake chaos story — most compelling operational quote)
- Kyle Bode (Kennicott / OPCUA technical depth)
- Nick Leisle (independent + client-trusted — strong PM endorsement)
Consider a "show more" toggle to avoid overwhelming the page.

### M5 — Resume: Print & PDF Polish
`resume.html` is functional but needs a print pass:
- Open in browser, print to PDF, check line breaks and pagination
- Ensure no entries split across pages awkwardly
- Verify all links render correctly in print mode (they should show as plain text)
- Consider adding a subtle header with name + page number for multi-page output

### M6 — Nav Consistency Across All Three Pages
Job Searcher and Recipe Manager have minimal back links but no unified nav experience:
- Consider a consistent top bar across all three pages
- Should feel like one site, not three separate apps with a breadcrumb tacked on

---

## [priority:low]

### L1 — Sea++ GitHub Repo
Publish the Sea++ codebase (path planning, control system, CV obstacle avoidance):
- Even a partially documented repo demonstrates real technical depth
- Link from portfolio timeline and resume

### L2 — XML Tool: Build as Portfolio Demo
The Python bidirectional XML parser that renamed 19,000 variables is a genuinely impressive artifact:
- A simple web-based demo (upload XML, rename variables, download) would be a strong portfolio piece
- Demonstrates Python, systems thinking, and real engineering problem-solving
- Rebuild as `xml-tool.html` and re-link from the DMC timeline entry

### L3 — Peer Feedback Page: Link from Portfolio
`peer-feedback.html` exists but isn't linked from anywhere:
- Add a subtle link in the "What colleagues say" section header
- Or link from the footer
- Should be discoverable but not front-and-center

### L4 — Timeline: Sea++ Photo / Build Documentation
The Sea++ entry would benefit from:
- Photos of the vessel (build process, water testing, finished trimaran)
- A short technical breakdown card (drivetrain, sensors, control architecture)
- This is the strongest engineering proof-of-concept on the portfolio — treat it that way

### L5 — Consider Adding a "Currently Building" Section
A small, low-maintenance section near the hero or in the footer that shows what you're actively working on (Fernware, this portfolio, any new projects). Signals active engagement, not just past work.

### L6 — Mobile Responsiveness Audit
The portfolio has responsive CSS but hasn't been audited on mobile:
- Test on iOS Safari and Android Chrome
- The hero grid, timeline, and skills sections are likely the problem areas
- Job Searcher and Recipe Manager also need mobile passes

---

## Done ✓

- [x] Fix broken Cloudflare email encoding
- [x] Fix GitHub hero link placeholder
- [x] Remove dead XML tool link
- [x] Remove photo placeholders
- [x] Remove "Rice '24" from nav
- [x] Rewrite hero statement
- [x] Reframe "What I'm Focused On" for mission-driven positioning
- [x] Reframe DMC role description (accurate scope)
- [x] Flesh out Fernware with technical detail
- [x] Rewrite Sea++ to lead with military commission
- [x] Add "What I'm Looking For" block in Philosophy
- [x] Add skills ramp note above skills grid
- [x] Add contact section (was truncated)
- [x] Create print-ready resume.html
- [x] Create peer-feedback.html (split from resume)
- [x] Fix localStorage / window.storage for Job Searcher and Recipe Manager
- [x] Unified site structure (index, job-searcher, recipe-manager)
- [x] Rename GitHub repo to EthanRobertKelly.github.io
- [x] Set up SSH key and push pipeline
