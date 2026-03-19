# Portfolio — Issue Tracker

> Labels: `priority:high` `priority:medium` `priority:low`
> Owner: `@ethan` (content/assets you provide) · `@claude` (build tasks)

---

## Needs From You — @ethan

### Y1 — Gather Photos `priority:high`
The timeline lives or dies by real images. Needed:
- China Lake onsite (any — equipment, workspace, the site)
- Sea++ at any stage (design sketches, CFD screenshots, hull build, water trial)
- Ironman — race day, training, finish line
- Surfboard shaping — in progress, finished board
- Fernware setup — the actual system running
- Any other moment that mattered

Even rough phone photos are fine. The gradient placeholders swap out instantly.

### Y2 — Write Your Timeline Moments `priority:high`
20-30 moments that tell your story chronologically. Format doesn't matter — bullet points, notes, voice memo transcript. For each moment: what happened, when, and why it mattered. Professional AND personal. This is the raw material for Timeline v3.

Examples of what I'm looking for:
- "Sep 2024 — first day at DMC, thrown onto Watsonville immediately"
- "Mar 2025 — arrived at China Lake, FAT was failing, had to figure it out live"
- "Nov 2023 — Ironman finish, 11:42, Woodlands TX"
- "Summer 2024 — shaped my first surfboard in the garage"

### Y3 — Confirm Sea++ IP Before Publishing `priority:medium`
The capstone was a military research commission. Before publishing the code publicly, worth a quick check with Rice or the commissioning body that there's no IP restriction.

### Y4 — Create Fernware GitHub Repo `priority:medium`
Build the repo on your end — I'll add the link everywhere once it exists. Even a basic README with a photo and parts list is enough to start.

### Y5 — Headshot / Photo for Hero `priority:low`
The hero section has no photo of you. A clean headshot or candid (onsite, on the water, working) would make the top of the portfolio dramatically more personal and memorable.

---

## Build Tasks — @claude

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

### H3 — Timeline v3: Vertical Narrative with Chapters & Moments `@claude`
Complete redesign as a long vertical narrative — chapters (DMC, Sea++, Rice) with individual moments inside them. Professional and personal woven together. Blocked on Y1 (photos) and Y2 (moments list) from Ethan.

Design direction:
- Continuous vertical timeline, chapters as headers with a colored bar
- Individual moments as panels inside each chapter — varying sizes and layouts
- Photo panels, quote panels, stat panels, mixed panels
- Personal moments (Ironman, surfboard) sit alongside professional ones at the right point in time
- Sea++ shown as a design process: brief → elected lead → CFD → build → water trial
- Fernware, Rice, BHYC as compact moments

**Blocked on: Y1, Y2**

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

### C1 — GitHub Profile README `@claude` `priority:medium`
Write and push a profile README to github.com/EthanRobertKelly that matches the portfolio positioning. Pinned repos (portfolio + Fernware once Y4 is done) with a short bio.

### C2 — Timeline Page: Dedicated `/timeline` vs Embedded `@claude` `priority:medium`
Decide and build: does the narrative timeline live as a section on the main page (good for SEO, one destination) or a separate `/timeline.html` (less cluttered main page, more room to breathe)? Recommendation: separate page linked from the hero and nav.

---

## Done ✓

- [x] Fix broken Cloudflare email encoding
- [x] Fix GitHub hero link placeholder
- [x] Remove dead XML tool link
- [x] Remove photo placeholders
- [x] Remove "Rice '24" from nav
- [x] Rewrite + tighten hero statement (3 sharp lines, not a paragraph)
- [x] Fix redundant title-line in hero (now shows Rice '24 · Mechanical Engineering)
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
