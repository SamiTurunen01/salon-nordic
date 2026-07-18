import { Link, useLocation } from "react-router-dom";
import { Button } from "../core/Button.jsx";

/* Sliding underline: a pseudo-element bar that scales in from the left on
   hover/focus and stays put for the active link. */
const NAVLINK_CSS = `
.sn-navlink { position: relative; padding-bottom: 4px; }
.sn-navlink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform var(--dur) var(--ease-out);
}
.sn-navlink:hover { color: var(--nav-active-color); }
.sn-navlink:hover::after,
.sn-navlink:focus-visible::after,
.sn-navlink[data-active]::after { transform: scaleX(1); }

/* CSS Shimmer — a soft light band glides once across the "Varaa aika" CTA on
   hover (no looping). Sits on a clipped, positioned button surface. */
.sn-cta-shimmer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 55%;
  pointer-events: none;
  background: linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
  transform: translateX(-200%) skewX(-12deg);
  z-index: 1;
}
@media (prefers-reduced-motion: no-preference) {
  .sn-cta-shimmer:hover::before { animation: sn-cta-shine 0.9s ease; }
}
@keyframes sn-cta-shine {
  from { transform: translateX(-200%) skewX(-12deg); }
  to   { transform: translateX(330%) skewX(-12deg); }
}
`;

/**
 * Navbar — sticky glass top bar. Goes transparent over a hero and frosts
 * once scrolled (pass `scrolled`). Mobile collapses to a menu button.
 * `links` items use `href` as a client-side route path.
 */
export function Navbar({
  brand = "SALON NORDIC",
  links = [],
  cta = "Varaa aika",
  ctaTo = "/yhteystiedot",
  scrolled = true,
  onMenu,
  style = {},
  ...rest
}) {
  const location = useLocation();
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-6)",
        height: 76,
        padding: "0 var(--gutter)",
        background: scrolled ? "var(--glass-bg-strong)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--glass-border)" : "transparent"}`,
        backdropFilter: scrolled ? "var(--glass-backdrop)" : "none",
        WebkitBackdropFilter: scrolled ? "var(--glass-backdrop)" : "none",
        "--nav-active-color": scrolled ? "var(--text)" : "var(--white)",
        transition: "background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      <Link
        to="/"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--weight-bold)",
          letterSpacing: "var(--tracking-eyebrow)",
          color: scrolled ? "var(--text)" : "var(--white)",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        {brand}
      </Link>

      <style>{NAVLINK_CSS}</style>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }} data-nav-links>
        {links.map((l) => {
          const active = location.pathname === l.href;
          return (
            <Link
              key={l.href}
              to={l.href}
              className="sn-navlink"
              data-active={active ? "" : undefined}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-medium)",
                letterSpacing: "var(--tracking-wide)",
                textDecoration: "none",
                color: active
                  ? (scrolled ? "var(--text)" : "var(--white)")
                  : (scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.75)"),
                transition: "color var(--dur) var(--ease-out)",
              }}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Button
          as={Link}
          to={ctaTo}
          variant={scrolled ? "primary" : "glass"}
          size="sm"
          className="sn-cta-shimmer"
          data-nav-cta
          style={{ position: "relative", overflow: "hidden" }}
        >
          {cta}
        </Button>
        <button
          aria-label="Avaa valikko"
          data-nav-menu
          onClick={onMenu}
          style={{
            display: "none",
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: scrolled ? "var(--text)" : "var(--white)",
            fontSize: 20,
          }}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
