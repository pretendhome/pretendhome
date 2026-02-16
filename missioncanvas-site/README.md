# MissionCanvas Landing Site (v2)

This folder contains a static site:

- `index.html` (home + Palette question router + waitlist)
- `for-business-owners.html` (business-owner specific page)
- `styles.css` (shared site styling)
- `app.js` (question routing + waitlist form behavior)
- `CNAME` (`missioncanvas.ai`)

## Quick publish on GitHub Pages

1. Create/open your GitHub repo for Pages.
2. Copy all files from this folder into repo root.
3. Push to `main`.
4. In repo settings, enable Pages from `main` branch root.
5. Set custom domain to `missioncanvas.ai`.
6. Keep DNS:
   - `A @` -> GitHub Pages A records
   - `CNAME www` -> `<your-username>.github.io`

## Waitlist behavior

The waitlist form is frontend-only and opens the visitor's email client with prefilled content to:

- `hello@missioncanvas.ai`

This avoids backend setup for v1.

## Palette router behavior

The `Ask MissionCanvas` form in `index.html` runs a lightweight local router in `app.js`:

- Inputs: question, context, outcome, constraints
- Outputs: RIU-style route, primary agent, next artifact, and generated action brief
- Actions: copy brief or email brief to `hello@missioncanvas.ai`

## Update points

- Contact address appears in header/CTA links and form script.
- Main copy is plain text blocks in both HTML files.
