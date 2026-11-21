# mzolfaghari.github.io

Personal site of Reza Zolfaghari. It's plain static HTML/CSS/JS with no build step. GitHub Pages serves the `gh-pages` branch.

- `index.html`: page layout, bio and section text
- `assets/js/data.js`: shared content (papers, roles, themes)
- `assets/js/components.js`: Career, All papers and the pixel diffusion animation
- `assets/css/components.css`: styles for those components
- `assets/img/`, `assets/pubs/`: photo and paper figures

**Add a paper:** add an entry to `pubs` in `assets/js/data.js`.

**Preview locally:**
```bash
python3 -m http.server 8765
```
Then open http://localhost:8765.

**Publish:**
```bash
git add -A && git commit -m "Update site" && git push origin gh-pages
```

The previous React site is preserved in this branch's history (commit `9b67447`).
