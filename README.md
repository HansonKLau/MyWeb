# MyWeb — Hanson Lau's Personal Website

An enhanced rebuild of [hansonlau.github.io](https://hansonlau.github.io/).
Same content, modernized design, better responsiveness and accessibility.

## What's new vs. the old site

- **Modern design system**: CSS custom properties, dark + light theme (toggle in the navbar, respects `prefers-color-scheme`, persisted to `localStorage`).
- **Hero**: animated gradient aurora background, bio stats, portrait with a conic-gradient halo, prominent CTAs (See work / Download résumé).
- **Scroll-spy navbar**: `IntersectionObserver` highlights the current section; sticky header gets a subtle divider once you scroll.
- **Reveal-on-scroll** animations with graceful fallback for `prefers-reduced-motion` and no-JS.
- **Mobile menu**: accessible hamburger with proper `aria-expanded` / `aria-hidden`, closes on `Escape` and on viewport resize.
- **Timeline experience** with role chips (Juni Learning, UC Berkeley ATDP, tutoring, karate).
- **Education cards** for University GPA, high-school GPA, AP courses, and school links.
- **Projects grid** (Shorin-Ryu site, YouTube, résumé) with hover previews and external-link affordances.
- **Contact grid** with inline SVG icons (crisp at any size, themed via `currentColor`) instead of raster PNG icons.
- **Accessibility**: semantic HTML5, skip-link, visible focus states, `aria-labels`, keyboard-friendly interactions.
- **SEO**: `description`, Open Graph tags, theme color, meaningful `title`.
- **Performance**: Google Fonts preconnect, lazy-loaded project images, deferred script, no external frameworks.

## Content preserved from the old site

Everything that was on the old site is still here, just reorganized:

- Full "About Me" copy and interests (karate, badminton, video games).
- Education path: Creekside → Diablo Vista → Monte Vista → UC Davis.
- GPA numbers: HS unweighted 3.98, weighted 4.39, 10–12 weighted 4.57, UC GPA 3.896.
- 8 AP courses, listed as chips.
- Experience: Juni Learning (7 months), UC Berkeley ATDP, UNICEF tutoring → private tutoring, Matsubayashi Shorin-Ryu karate (2nd-kyu, under Sensei Eihachi Ota).
- Projects: Shorin-Ryu site, YouTube channel, résumé PDF.
- Contact: Email, GitHub (HansonLau), Instagram (hammylau7), Snapchat (chopchop6).
- All original images and the résumé PDF are preserved under `./images/` and `./assets/`.

## Project structure

```
MyWeb/
├── index.html          # Single-page site
├── style.css           # Design tokens, themes, layout
├── script.js           # Theme toggle, scroll-spy, reveal, mobile menu
├── images/             # Portraits, project thumbnails, logos (from old site)
└── assets/
    └── HansonLau-Resume.pdf
```

## Running locally

No build step. Any static server works:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open http://localhost:8080.

## Deploying

The site is 100% static — the easiest options:

- **GitHub Pages**: push this repo and enable Pages (Settings → Pages → Deploy from a branch → `main` / root).
- **Vercel / Netlify / Cloudflare Pages**: point them at the repo; no build command needed.
- **Custom domain**: works out of the box with any of the above once DNS is configured.

## Credits

Built with HTML, CSS, and a small amount of vanilla JavaScript. Fonts: Inter, Space Grotesk, JetBrains Mono (via Google Fonts). Icons: inline SVG.

© Hanson Lau
