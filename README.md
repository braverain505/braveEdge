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
| Calculator copy, defaults and assumptions | `roi` |
| FAQ questions and answers | `faqs` |
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

## Time-saved calculator

`#calculator` asks visitors for two numbers — how many people touch the process,
and how many repetitive hours each of them spends on it per week — and reports
how much time automation could recover per week, per year, in working days and
in weeks.

**It reports time only.** There are deliberately no money figures anywhere in the
calculator, so the site never implies a savings claim or a price. If you ever
want monetary output back, you would need to reintroduce a rate input and an
`Intl.NumberFormat` currency formatter in `src/components/RoiCalculator.jsx`.

Everything is calculated in the browser; nothing is sent anywhere until the
visitor presses **Send me this estimate**, which drops the figures into the
contact form for them.

The assumptions live in `roi.assumptions` in `src/data/site.js`:

| Setting | Default | Meaning |
| --- | --- | --- |
| `automatableShare` | `0.7` | Share of the time entered assumed automatable |
| `workingWeeks` | `46` | Paid weeks per year (allows for holidays) |
| `hoursPerWeek` | `40` | Used to express savings as "weeks freed" |
| `hoursPerDay` | `8` | Length of a working day, used for "days freed" |

The displayed estimate deliberately states these assumptions next to the result,
so a visitor is never shown a number without its basis.

---

## Contact form

The form works with **zero configuration**: with no backend set, submitting it
opens the visitor's email client with the enquiry pre-filled.

To collect submissions server-side instead, set `VITE_CONTACT_ENDPOINT` (see
`.env.example`) to an endpoint accepting a JSON `POST`:

```
VITE_CONTACT_ENDPOINT=https://your-form-endpoint.example/submit
```

The payload is `{ name, email, company, process }`. Any form service, serverless
function or automation webhook (for example a Zapier/Make catch hook) works.

---

## Analytics

Analytics is **off by default** and no third-party script is loaded until you
opt in.

```bash
# .env
VITE_ANALYTICS_PROVIDER=simple
```

`simple` injects the Simple Analytics script, which is cookieless and needs no
cookie banner. It identifies your site by hostname — there is no key to copy, but
you do need the domain registered in their dashboard. If your domain differs from
`company.url`, also set `VITE_SITE_URL`.

For any other provider, set `VITE_ANALYTICS_SCRIPT_SRC` to the script URL from
their dashboard (and `VITE_ANALYTICS_DOMAIN` if they need a `data-domain`).

### Tracked events

Custom events are fired through `src/lib/analytics.js`, which dispatches to
whichever provider global is present and is a safe no-op when nothing is
configured:

| Event | Fires when |
| --- | --- |
| `cta_clicked` | Hero or closing call-to-action is clicked |
| `product_access_clicked` | Someone opens a product access link |
| `roi_estimate_requested` | Someone sends the calculator estimate to the form |
| `contact_form_submitted` | Contact form is submitted |

These tell you whether the site is actually generating enquiries, not just
traffic.

---

## What the build generates

`plugins/seo.js` runs at build time and generates everything from
`src/data/site.js`, so the visible page and its metadata cannot drift apart:

- **`sitemap.xml`** for the deployed domain (also referenced by
  `public/robots.txt`).
- **`404.html`** — a `noindex` copy of the page. Static hosts such as GitHub
  Pages serve this for unknown paths, so mistyped URLs still land on the site.
- **Structured data** injected into the HTML: `Organization`, `WebSite` and
  `FAQPage` JSON-LD, including an `Organization.knowsAbout` list built from your
  services.

Notes:

- A placeholder phone number is automatically **excluded** from structured data
  until you set a real one in `company.phone`.
- Google limited FAQ rich results to mostly government and health sites, so
  treat the `FAQPage` markup as a correctness and discoverability win rather
  than a guaranteed rich snippet. The FAQ content itself helps regardless.
- Set `VITE_SITE_URL` and the build rewrites the `canonical`/`og:url` tags in
  `index.html` to match.

---

## Before going live

- [ ] Set the real domain: `VITE_SITE_URL`, or edit `company.url` plus the
      `canonical`/`og:url` tags in `index.html`, and `public/robots.txt`.
- [ ] Update `company.email` and `company.phone` in `src/data/site.js` — the
      placeholders are `hello@braveedge.tech` and `+1 (000) 000-0000`. A real
      phone number is added to structured data automatically.
- [ ] Add a social share image: drop a 1200×630 `og.png` into `public/` and add
      `<meta property="og:image" content="/og.png" />` to `index.html`.
- [ ] Decide on analytics (see above) and add a privacy note if you enable it.

---

## Deploying

`dist/` is fully static — no server, no runtime, no routing rules needed
(the site is one page with anchor links).

- **GitHub Pages** — publish `dist/` to the `gh-pages` branch, or via a GitHub
  Actions workflow. The generated `404.html` handles unknown paths.
- **Netlify / Cloudflare Pages / Vercel** — build command `npm run build`,
  publish directory `dist`.
- **Any web host or S3 bucket** — upload `dist/`.

Whatever you choose, make sure the site is served over HTTPS.

---

## Project structure

```
braveedge/
├── index.html              # HTML shell, SEO meta (structured data is injected at build)
├── vite.config.js          # Vite + SEO plugin wiring
├── tailwind.config.js      # brand colours, fonts, shadows, animations
├── plugins/seo.js          # generates sitemap, 404.html, JSON-LD, analytics tags
├── public/                 # favicon, robots.txt (copied as-is to dist/)
└── src/
    ├── main.jsx            # entry point + self-hosted font imports
    ├── App.jsx             # section order + contact-form draft state
    ├── index.css           # Tailwind layers, button/card/eyebrow classes
    ├── data/site.js        # ← all page content, product links, FAQ, ROI config
    ├── lib/analytics.js    # provider-agnostic event tracking
    └── components/
        ├── Navbar.jsx          # sticky header + mobile menu
        ├── Hero.jsx            # headline + animated workflow mock
        ├── ValueBar.jsx        # value statements under the hero
        ├── Services.jsx        # six service cards
        ├── Products.jsx        # product access links
        ├── Process.jsx         # four-step delivery process
        ├── WhyUs.jsx           # differentiators + before/after panel
        ├── RoiCalculator.jsx   # interactive savings estimator
        ├── Faq.jsx             # accordion (native <details>)
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

- **Branding**: the wordmark in `src/components/Logo.jsx` is the two-tone
  `BraveEdge` — "Brave" in brand blue, "Edge" in the teal accent, matching the
  blue-to-teal pairing used by the mark and the scroll progress bar. Colours
  differ per variant: `brand-600`/`teal-700` on light, `brand-300`/`teal-400` on
  dark. `teal-700` is the only teal dark enough to stay legible at wordmark size
  on white.
- **Company name**: since the visible wordmark is just "BraveEdge", the complete
  name (`BraveEdge Technologies`) is carried by the page title, `og:` tags,
  footer copyright and blurb, structured data, the "Why BraveEdge Technologies"
  eyebrow, and the header home link's accessible name.
- **Header layout**: the inline nav appears at `lg` (1024px+), with the
  redundant "Product access" shortcut only at `xl`. Below `lg` everything moves
  into the hamburger menu.
- **Typography** is self-hosted via `@fontsource` (imported in `src/main.jsx`), so
  the page makes no third-party requests and needs no cookie banner.
- **Accessibility**: keyboard focus rings, semantic landmarks, `aria` labels on
  toggles, and `prefers-reduced-motion` support are built in. The FAQ uses native
  `<details>`/`<summary>`, so it works without JavaScript.
- **No test suite.** `npm run build` is the main check; the built output lives in
  `dist/`.
