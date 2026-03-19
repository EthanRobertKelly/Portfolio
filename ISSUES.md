# Portfolio — Issue Tracker

> Labels: `priority:high` `priority:medium` `priority:low`
> Owner: `@ethan` (content/assets you provide) · `@claude` (build tasks)

---

## Needs From You — @ethan

### Y1 — Gather Photos
- [x] China Lake / NAWS — `NAWS.jpeg` live
- [x] Ironman — `Ironman.png` live
- [x] Surfboard art — `SURF ART.jpg` / `SURF ART2.jpg` live
- [x] Headshot — `Headshot.jpeg` live in hero
- [ ] Sea++ (design sketches, CFD screenshots, hull, water trial) — pending Y3 IP check
- [ ] Fernware — project in progress, on hold

### ~~Y2 — Write Your Timeline Moments~~ ✓
Done: timeline built from resume + provided context. All major moments are live.

### Y3 — Confirm Sea++ IP Before Publishing `priority:medium`
The capstone was a military research commission. Before publishing the code publicly, worth a quick check with Rice or the commissioning body that there's no IP restriction.

### Y4 — Create Fernware GitHub Repo
Project in progress — on hold until ready to publish.

### Y5 — Headshot / Photo for Hero `priority:low`
The hero section has no photo of you. A clean headshot or candid (onsite, on the water, working) would make the top of the portfolio dramatically more personal and memorable.

---

## Build Tasks — @claude

## [priority:high]

### ~~H1 — Tune Resume for Hard-Tech Mission Roles~~ ✓
Done: summary rewritten with ATS keywords in context; title simplified to "Systems Engineer" (consulting context moved to subline); all DMC bullets rewritten to lead with impact; RoboCam, Sea++, Fernware bullets tightened.

### H2 — Tune Mission & Vision (Hero + Philosophy)
The hero statement and philosophy section are rewritten but not final:
- Hero statement needs one more pass — does it feel like Ethan or does it feel like a brief?
- "What I'm Looking For" block in Philosophy needs review — is it too long? Too direct? Not direct enough?
- The philosophy pull-quote ("Are we in discovery, or just learning fast?") is strong — make sure it still lands in the new framing

### ~~H3 — Timeline v3: Vertical Narrative with Chapters & Moments~~ ✓
Done: wave-spine timeline live with 3 chapters, all major moments, photos, stats, and quotes. Still adding photos as Ethan provides them (Fernware, China Lake onsite).

### ~~H4 — Login Gate for Job Searcher & Recipe Manager~~ ✓
Done: sessionStorage password gate ("ethank") added to both `/job-searcher.html` and `/recipe-manager.html`. Gate clears on tab close. Longer-term OAuth upgrade still possible.

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

### ~~M3 — Use Full Chris Cilino Quote~~ ✓
Done: full quote with scores (Communication 9, Collaboration 8, Task Ownership 9, Big Picture 10) and "rock star" / "should have been a lawyer" lines added to the portfolio qcard.

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

### ~~M6 — Nav Consistency Across All Three Pages~~ ✓
Done: nav links to Job Hunter HQ and Kitchen Codex added to main portfolio nav; back-links present on both tools.

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

### ~~L3 — Peer Feedback Page: Link from Portfolio~~ ✓
Done: "Full peer feedback transcripts →" link added after the Working With Me section.

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

- [x] H4 — Password gate on job-searcher.html and recipe-manager.html (sessionStorage, "ethank")
- [x] M3 — Full Chris Cilino quote with scores added to portfolio
- [x] M6 — Nav links to Job HQ and Kitchen added; consistent back-links across tools
- [x] L3 — Peer feedback page linked from portfolio (after Working With Me section)
- [x] NAWS China Lake entry expanded ($25B facility, $10M scope, Precision Filters, critical path framing)
- [x] Gecko project entry removed (theory only, never built)
- [x] Engineering Philosophy section removed from portfolio

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
