import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar.jsx";
import { Footer } from "../components/navigation/Footer.jsx";
import { IconButton } from "../components/core/IconButton.jsx";
import { Button } from "../components/core/Button.jsx";
import { BUSINESS } from "../config/business.js";
import { NAV_LINKS, FOOTER_COLUMNS } from "../config/navigation.js";
import { SEO, applySeo } from "../config/seo.js";

export function RootLayout() {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    applySeo(SEO);
  }, []);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu and jump to the top on every route change.
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const navStyle = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    ...(atTop
      ? { background: "var(--surface)", backdropFilter: "none", WebkitBackdropFilter: "none", boxShadow: "none" }
      : { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: "var(--shadow-sm)" }),
  };

  return (
    <div>
      <Navbar
        brand={BUSINESS.name}
        links={NAV_LINKS}
        scrolled
        style={navStyle}
        cta="Varaa aika"
        ctaTo="/yhteystiedot"
        onMenu={() => setMenuOpen(true)}
      />

      <Outlet />

      <Footer
        brand={BUSINESS.name}
        tagline={BUSINESS.tagline}
        columns={FOOTER_COLUMNS}
        contact={{ address: BUSINESS.address, phone: BUSINESS.phone, email: BUSINESS.email }}
        social={BUSINESS.social}
        location={`${BUSINESS.city} · ${BUSINESS.country}`}
        bottomNote={
          <span style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", alignItems: "center" }}>
            <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
            <a
              href="/tietosuojaseloste"
              onClick={(e) => { e.preventDefault(); navigate("/tietosuojaseloste"); }}
              style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Tietosuojaseloste
            </a>
          </span>
        }
      />

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "var(--glass-bg-strong)", backdropFilter: "var(--glass-backdrop)", WebkitBackdropFilter: "var(--glass-backdrop)", display: "flex", flexDirection: "column", padding: "var(--space-6) var(--gutter)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 76 }}>
            <span style={{ fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)" }}>{BUSINESS.name}</span>
            <IconButton label="Sulje" variant="outline" onClick={() => setMenuOpen(false)}>✕</IconButton>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginTop: "var(--space-6)" }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => navigate(l.href)}
                style={{ background: "none", border: "none", textAlign: "left", padding: "var(--space-3) 0", fontFamily: "var(--font-display)", fontSize: "var(--text-4xl)", fontWeight: 500, color: location.pathname === l.href ? "var(--text)" : "var(--text-secondary)", cursor: "pointer", letterSpacing: "var(--tracking-tight)" }}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div style={{ marginTop: "auto" }}>
            <Button variant="primary" size="lg" fullWidth onClick={() => navigate("/yhteystiedot")}>Varaa aika</Button>
          </div>
        </div>
      )}
    </div>
  );
}
