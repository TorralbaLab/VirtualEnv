# VirtualEnv (paper project page)

This is a lightweight, static project-page scaffold (Nerfies-style) for:

**VirtualEnv: A Platform for Embodied AI Research**  
arXiv:2601.07553v2 (Feb 7, 2026)

## What’s included

- `index.html` – single-page site (Bulma layout + Nerfies-style structure)
- `static/css/index.css` – small custom CSS layer
- `static/js/index.js` – navbar + optional carousel init
- `static/images/` – placeholder teaser + two charts recreated from numbers reported in the paper

## How to view locally

Just open `index.html` in your browser.

> Note: The page uses CDN links for Bulma / FontAwesome / Bulma extensions.  
> So you’ll need an internet connection the first time you load it.

## How to customize

- Replace `static/images/teaser.png` with a real teaser from the paper.
- Add rollout videos to `static/videos/` and embed them in `index.html`.
- Add “Code / Dataset / Demo” buttons once URLs are available.
- If you want fully offline hosting, download the CDN assets and update the links in `index.html`.

## Template credit

This page is styled after the Nerfies project-page template: https://nerfies.github.io/
