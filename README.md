# Mohit Bhandari — Portfolio

A personal portfolio for a full-stack developer, built with **React 18 + Vite**.

## Tech stack

- React 18
- Vite 5
- Plain CSS (design tokens + components) — no UI framework

## Getting started

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
```

Vite will print a local URL (usually http://localhost:5173). Open it in your browser.

## Build for production

```bash
npm run build      # outputs static files to /dist
npm run preview    # serve the built /dist locally to test
```

Deploy the contents of `/dist` to any static host — Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

## Project structure

```
react-portfolio/
├─ index.html              # HTML shell, loads fonts + mounts the app
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx             # React entry point
   ├─ App.jsx              # composes all sections
   ├─ index.css            # imports tokens + portfolio styles
   ├─ data.js              # ALL content lives here — edit this
   ├─ styles/
   │  ├─ colors_and_type.css   # design tokens (colors, type, spacing)
   │  └─ portfolio.css         # layout + component styles
   ├─ hooks/
   │  └─ useObservers.js   # scroll-reveal + active-nav + nav-scrolled
   └─ components/
      ├─ Icons.jsx         # all SVG icons
      ├─ common.jsx        # SectionLabel, IconLink helpers
      ├─ Nav.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Work.jsx
      ├─ Experience.jsx
      ├─ Skills.jsx
      ├─ Achievements.jsx
      ├─ Education.jsx
      └─ Contact.jsx
```

## Editing your content

Open **`src/data.js`** — your projects, skills, achievements, facts, coursework,
and all profile links (`LINKS`) are defined there. Update the placeholder
GitHub / LinkedIn / LeetCode / npm URLs with your real ones.

## License

Personal project — © 2026 Mohit Bhandari.
