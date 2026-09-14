# BraveEdge Technologies — website

Marketing site for BraveEdge Technologies, an automation agency. Static, single
page, no backend required.

Built with **Vite + React + Tailwind CSS**. `npm run build` produces a plain
folder of static files that can be served by any host.

---

## Quick start

```bash
npm install
npm run dev      # local dev server, http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

Deploying = upload the contents of `dist/`.

---

## Editing content

Almost everything lives in **one file**: `src/data/site.js`.

| What you want to change | Where |
| --- | --- |
| Company name, email, phone, location, domain | `company` |
| Navbar links | `nav` |
| Hero headline, subtitle, buttons | `hero` |
| The four statements under the hero | `valueProps` |
| Service cards | `services` |
| Product access links | `products` |
| The four process steps | `process` |
| "Why us" points | `differentiators` |
| Contact copy | `contact` |
| Footer copy and link columns | `footer` |

Brand colours, fonts and shadows are in `tailwind.config.js`. Sections are
composed in `src/App.jsx` — delete a line there to remove a section.

---

## Adding a product / access link

Open `src/data/site.js` and add an entry to the `products` array:

```js
export const products = [
  {
    name: 'Clearis',
    status: 'live',
    tag: 'Platform',
    url: 'https://clearis.site',
    description: 'One line about what it does and who it is for.',
  },
];
```

- `status: 'live'` with a `url` renders an **"Open …"** button that opens in a
  new tab.
- `status: 'soon'` (or a missing `url`) renders an **"Access on request"** badge
  instead.
- The card grid reflows automatically, so adding entries needs no layout work.

---

## Contact form

The form works with **zero configuration**: with no backend set, submitting it
opens the visitor's email client with the enquiry pre-filled.

To collect submissions server-side instead, create a `.env` file
(see `.env.example`) with an endpoint that accepts a JSON `POST`:

```
VITE_CONTACT_ENDPOINT=https://your-form-endpoint.example/submit
```

The payload is `{ name, email, company, process }`. Any form service, serverless
function or automation webhook (for example a Zapier/Make catch hook) works.

---

## Before going live

- [ ] Set the real domain in `index.html` (`canonical`, `og:url`) and in
      `public/robots.txt`. They currently point at `https://braveedge.tech/`.
- [ ] Update `company.email` / `company.phone` in `src/data/site.js` — the
      placeholders are `hello@braveedge.tech` and `+1 (000) 000-0000`.
- [ ] Add a social share image: drop a 1200×630 `og.png` into `public/` and add
      `<meta property="og:image" content="/og.png" />` to `index.html`.
- [ ] Add a `sitemap.xml` in `public/` (single page, so it is one URL).
- [ ] Optional: add analytics, and a privacy note if you add tracking.

---

## Deploying

`dist/` is fully static — no server, no runtime, no routing rules needed
(the site is one page with anchor links).

- **GitHub Pages** — publish the `dist/` folder to the `gh-pages` branch, or via
  a GitHub Actions workflow.
- **Netlify / Cloudflare Pages / Vercel** — build command `npm run build`,
  publish directory `dist`.
- **Any web host or S3 bucket** — upload `dist/`.

Whatever you choose, make sure the site is served over HTTPS.

---

## Project structure

```
braveedge/
├── index.html              # HTML shell, fonts, SEO meta
├── tailwind.config.js      # brand colours, fonts, shadows, animations
├── public/                 # favicon, robots.txt (copied as-is to dist/)
└── src/
    ├── main.jsx            # entry point
    ├── App.jsx             # section order
    ├── index.css           # Tailwind layers, button/card/eyebrow classes
    ├── data/site.js        # ← all page content and product links
    └── components/
        ├── Navbar.jsx          # sticky header + mobile menu
        ├── Hero.jsx            # headline + animated workflow mock
        ├── ValueBar.jsx        # value statements under the hero
        ├── Services.jsx        # six service cards
        ├── Products.jsx        # product access links
        ├── Process.jsx         # four-step delivery process
        ├── WhyUs.jsx           # differentiators + before/after panel
        ├── CTA.jsx             # closing call to action
        ├── Contact.jsx         # contact details + form
        ├── Footer.jsx
        ├── ScrollProgress.jsx  # top progress bar
        ├── BackToTop.jsx
        ├── Reveal.jsx          # scroll-in animation wrapper
        ├── SectionHeading.jsx  # shared section header
        ├── Logo.jsx            # wordmark
        └── Icons.jsx           # inline SVG icon set (no icon dependency)
```

## Notes

- **Typography** loads Inter and Plus Jakarta Sans from Google Fonts. To go fully
  self-hosted, install the `@fontsource` packages and import them in
  `src/main.jsx`, then remove the `<link>` tags from `index.html`.
- **Accessibility**: keyboard focus rings, semantic landmarks, `aria` labels on
  toggles, and `prefers-reduced-motion` support are built in.
- **No tests yet.** `npm run build` is the main check; the built output lives in
  `dist/`.
