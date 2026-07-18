import { BUSINESS } from "./business.js";

/**
 * SEO — document title, meta description and social-share tags.
 *
 * This is a single-page app with one static index.html, so there's one
 * global set of tags rather than per-route ones. Edit the values below;
 * `applySeo()` (called once from RootLayout) writes them into <head> at
 * runtime. Also update the matching <title>/<meta description> in
 * index.html — that's what shows up before the app's JS has run (crawlers,
 * link-preview bots, a slow first paint).
 */
export const SEO = {
  title: `${BUSINESS.name} — ${BUSINESS.category} ${BUSINESS.city}`,
  description: `${BUSINESS.name} — ${BUSINESS.tagline} Varaa aika verkossa.`,
  lang: "fi",

  // Canonical site URL, used for the canonical link and og:url. Set this to
  // the real deployed URL (custom domain, or https://<user>.github.io/<repo>/).
  url: "https://example.com/",

  // Optional: absolute URL to an image (1200×630 recommended) used for link
  // previews on social media. Leave blank to omit og:image/twitter:image.
  image: "",
};

/** Create (or reuse) a <meta> tag matched by attribute + value, and set its content. */
function setMeta(attr, value, content) {
  let tag = document.head.querySelector(`meta[${attr}="${value}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/** Sync <title>, the meta description, canonical link and OG/Twitter tags to SEO. Call once on app mount. */
export function applySeo(seo = SEO) {
  document.documentElement.lang = seo.lang;
  document.title = seo.title;

  setMeta("name", "description", seo.description);
  setMeta("property", "og:title", seo.title);
  setMeta("property", "og:description", seo.description);
  setMeta("property", "og:type", "website");
  setMeta("name", "twitter:card", seo.image ? "summary_large_image" : "summary");
  setMeta("name", "twitter:title", seo.title);
  setMeta("name", "twitter:description", seo.description);

  if (seo.url) {
    setMeta("property", "og:url", seo.url);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);
  }

  if (seo.image) {
    setMeta("property", "og:image", seo.image);
    setMeta("name", "twitter:image", seo.image);
  }
}
