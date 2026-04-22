# Portfolio

Single-page portfolio with a collage-poster design (stickers, stamps, polaroids) and a light/dark theme toggle.

## Run
- Open [index.html](index.html) in your browser.

## Edit Content
- Main structure + copy: [index.html](index.html)
- Visual styling (palette, stickers, polaroids, layout): [styles.css](styles.css)
- Smooth scroll + theme toggle: [script.js](script.js)

## Add Project Screenshots
The “Top Picks” section uses a placeholder block for each project.

Option A (recommended): replace the placeholder `<div class="polaroid-media"></div>` with an `<img>` tag.
- Add your screenshots into the repo (e.g. `assets/taskflow.png`)
- Update each project card in [index.html](index.html)

Option B: keep placeholders until images are ready.

## Notes
- Internal links (anything that starts with `#`) smooth-scroll.
- Dark mode preference persists via `localStorage`.