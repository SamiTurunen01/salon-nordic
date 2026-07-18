/**
 * BUSINESS — every fact about the salon itself.
 *
 * This is the one file you need to edit to re-brand this template for a new
 * salon: name, location, contact details, opening hours, social links and
 * the small headline stats shown on the homepage hero. Everything else in
 * the app (Navbar, Footer, Contact page, homepage hero, SEO tags) reads
 * from this object — nothing salon-specific should be hardcoded elsewhere.
 */
export const BUSINESS = {
  // Shown in the navbar, footer and as the fallback gallery caption.
  name: "Salon Nordic",

  // One line under the brand name in the footer, and used in the default
  // SEO description.
  tagline: "Pohjoismaista tyylikkyyttä ja henkilökohtaista palvelua.",

  // Short trade/industry label, used in the homepage hero eyebrow
  // ("Kampaamo · Joensuu"). Keep it short — one or two words.
  category: "Kampaamo",

  // City and country, used in the hero eyebrow, the footer's fine-print
  // location, and the SEO title/description.
  city: "Joensuu",
  country: "Suomi",

  // Street address as an array of display lines (e.g. street, then
  // postcode + city). Also used to build the Google Maps embed query on
  // the Contact page, so keep it accurate.
  address: ["Esimerkkikatu 12", "80100 Joensuu"],

  phone: "040 123 4567",
  email: "info@salonnordic.fi",

  // [day label, hours label] pairs, shown on the Contact page in order.
  hours: [
    ["Ma–Pe", "9–20"],
    ["La", "9–16"],
    ["Su", "Suljettu"],
  ],

  // name must match an icon in SocialButton's SocialGlyph (facebook, instagram).
  social: [
    { name: "facebook", label: "Salon Nordic Facebookissa", handle: "Salon Nordic", href: "https://facebook.com/salonnordic" },
    { name: "instagram", label: "@salonnordic Instagramissa", handle: "@salonnordic", href: "https://instagram.com/salonnordic" },
  ],

  // [value, label] pairs for the small stats card in the homepage hero.
  stats: [
    ["12+", "vuotta"],
    ["6", "stylistiä"],
    ["4,9★", "arviot"],
  ],
};
