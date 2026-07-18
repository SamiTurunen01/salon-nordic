# Salon Website Template

A reusable React + Vite website template for a hair salon / barbershop
("kampaamo"), built as a template repository — click **Use this template**
on GitHub, edit a handful of config files, and deploy. No business-specific
data lives in components: names, addresses, opening hours, services, team
photos and gallery images are all data, kept separate from the UI code.

The sample content (Salon Nordic, a fictional salon in Joensuu, Finland) is
placeholder data demonstrating the template — replace it with your own.

## Tech stack

- **React 18** + **React Router 7** (client-side routing, `BrowserRouter`)
- **Vite** (dev server + build)
- Plain CSS with a small design-token system (`src/styles/tokens/*.css`) —
  no CSS framework, no CSS-in-JS library; components use inline `style`
  objects that read `var(--token)` values
- No backend — the contact form is client-side only (see
  [Contact form](#contact-form) below)

## Quick start

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Using this as a template for a new salon

Everything you need to rebrand this site lives in `src/config/` and
`src/data/`. You should not need to touch component code (`src/components/`,
`src/pages/`, `src/layouts/`) to stand up a new salon's site.

### 1. Business details — `src/config/business.js`

The single source of truth for who the business is: name, tagline, trade
category, city/country, street address, phone, email, opening hours,
social links, and the small stat pairs (`"12+" / "vuotta"`) shown in the
homepage hero. Edit the `BUSINESS` object; every page and component that
needs this data (Navbar, Footer, Contact page, homepage hero) imports it
from here.

The Contact page's embedded Google map is built automatically from
`BUSINESS.address` + `BUSINESS.country` — you don't need to hand-craft a
maps URL, just keep the address accurate.

### 2. Navigation — `src/config/navigation.js`

`NAV_LINKS` (navbar + mobile menu) and `FOOTER_COLUMNS` (footer link
columns). `href` values must match the routes registered in `src/App.jsx`
— if you add or remove a page, update both files.

### 3. SEO — `src/config/seo.js`

`SEO.title` / `SEO.description` / `SEO.url` / `SEO.image` are applied to
`document.title`, the meta description, canonical link, and Open
Graph/Twitter tags at runtime via `applySeo()` (called once from
`RootLayout`). Because this is a static single-page app, also update the
matching `<title>` / `<meta name="description">` in **`index.html`** —
that's the fallback seen by crawlers and link-preview bots before the
app's JS runs, and by anyone viewing page source. Keep the two in sync;
`index.html` has a comment marking where.

### 4. Services, pricing, team, gallery — `src/data/`

- `src/data/services.js` — `SERVICES` (service cards, with an `image` from
  `src/data/images.js`), `PACKAGES` (bundled homepage packages), `PRICE_LIST`
  (grouped rows shown on the Hinnasto/pricing page)
- `src/data/team.js` — `TEAM_MEMBERS` (name, role, photo, specialties)
- `src/data/gallery.js` — `GALLERY_ITEMS` (image, caption, aspect `ratio`:
  `"portrait" | "tall" | "square"`)

### 5. Images — `src/assets/images/` + `src/data/images.js`

Drop your own photos into `src/assets/images/` and import them in
`src/data/images.js`'s `SALON_IMG` map; `services.js`, `team.js` and
`gallery.js` all reference images through that map. Two entries
(`hero`, `heroAlt`) and the four team portraits still point at remote
Unsplash placeholder URLs in the original sample data — swap those for
real photography (see the comment at the top of `images.js`).

### 6. Legal page — `src/pages/PrivacyPolicy.jsx`

The privacy policy page is written generically but leaves legal-entity
specifics (company name, business ID, retention period, etc.) as visibly
dashed `[Fill in]`-style placeholders — fill those in yourself or have a
lawyer review the page before going live. It's boilerplate, not legal
advice.

### 7. Site metadata — `package.json`

Update `name`, `description` and `version` for your project once you've
rebranded it (cosmetic only — not read by the app at runtime).

## Project structure

```
src/
  config/         business.js, navigation.js, seo.js — edit these first
  data/           services.js, team.js, gallery.js, images.js
  pages/          one file per route (Home, Services, Pricing, Gallery, Team, Contact, PrivacyPolicy)
  layouts/        RootLayout.jsx — navbar + footer + mobile menu shell
  components/
    core/         Button, Badge, Eyebrow, IconButton
    forms/        Input, Select, Textarea, Checkbox
    layout/       Section, Container, GlassCard, Reveal, PageHero, CtaBand, SectionHeading
    navigation/   Navbar, Footer, SocialButton
    salon/        ServiceCard, PricingCard, TeamCard, GalleryGrid
  styles/
    global.css    resets + responsive breakpoint overrides
    tokens/       color, typography, spacing, effects, motion CSS variables
```

## Contact form

The booking form on the Contact page is front-end only: it validates the
consent checkbox and shows a "thank you" state on submit, but doesn't send
anywhere. `PrivacyPolicy.jsx` mentions Google Apps Script and reCAPTCHA as
the assumed integration path — wire the form's `onSubmit` in
`src/pages/Contact.jsx` up to whatever backend (Apps Script, a form
service, your own API) you actually use, and update the privacy policy to
match what you actually collect and process.

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and
deploys to GitHub Pages on every push to `main`. It passes the repository
name as `VITE_BASE_PATH` automatically, so a forked/template-generated repo
deploys correctly at `https://<user>.github.io/<repo>/` without editing
anything.

**Using a custom domain instead:**
1. Add a `public/CNAME` file containing your domain.
2. Set `base: "/"` in `vite.config.js` (or override `VITE_BASE_PATH=/` in
   the workflow) since the site will be served from the domain root.
3. Update `public/404.html`'s `pathSegmentsToKeep` to `0` (see the comment
   in that file — it explains the GitHub Pages SPA deep-link redirect
   trick this template uses).

## Making this repository a GitHub Template Repository

If you're setting this repo up as the source others will click **Use this
template** on:

1. GitHub → repo **Settings** → check **Template repository** (near the
   top of the General settings page).
2. Anyone clicking **Use this template** gets a fresh repo with this
   README, config and code — no git history from your own edits.

From there, a new user's workflow is exactly the "Using this as a
template" section above: edit `src/config/*`, `src/data/*`, replace images,
push to `main`, done.

## License

No license file is included — add one (`LICENSE`) appropriate to how you
intend this template to be used/shared before publishing it publicly.
