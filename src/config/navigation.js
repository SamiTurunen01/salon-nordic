/**
 * NAVIGATION — routes shown in the navbar and the footer's link columns.
 *
 * `href` values must match the routes registered in src/App.jsx. Add,
 * remove or reorder entries here; no other file needs to change.
 */
export const NAV_LINKS = [
  { label: "Etusivu", href: "/" },
  { label: "Palvelut", href: "/palvelut" },
  { label: "Hinnasto", href: "/hinnasto" },
  { label: "Galleria", href: "/galleria" },
  { label: "Meistä", href: "/meista" },
  { label: "Yhteystiedot", href: "/yhteystiedot" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Palvelut",
    items: [
      { label: "Leikkaus", href: "/palvelut" },
      { label: "Värjäys", href: "/palvelut" },
      { label: "Balayage", href: "/palvelut" },
      { label: "Hoidot", href: "/palvelut" },
    ],
  },
  {
    title: "Salon",
    items: [
      { label: "Meistä", href: "/meista" },
      { label: "Galleria", href: "/galleria" },
      { label: "Hinnasto", href: "/hinnasto" },
      { label: "Yhteystiedot", href: "/yhteystiedot" },
    ],
  },
];
