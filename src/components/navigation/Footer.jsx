import { Link } from "react-router-dom";
import { SocialButton } from "./SocialButton.jsx";

/* Shared hover handlers for text links. */
const linkOver = (e) => (e.currentTarget.style.color = "var(--white)");
const linkOut = (e) => (e.currentTarget.style.color = "rgba(255,255,255,0.78)");
const linkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-base)",
  color: "rgba(255,255,255,0.78)",
  textDecoration: "none",
  width: "fit-content",
  transition: "color var(--dur) var(--ease-out)",
};
const headingStyle = {
  margin: 0,
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-xs)",
  fontWeight: "var(--weight-semibold)",
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.5)",
};

/**
 * Footer — dark ink footer with brand block, nav columns, a contact column,
 * social buttons and fine print. Multi-column on desktop, stacks on small screens.
 */
export function Footer({
  brand = "SALON NORDIC",
  tagline,
  columns = [],
  contact,
  social = [],
  location = "Helsinki · Suomi",
  bottomNote = "© Salon Nordic",
  style = {},
  ...rest
}) {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "var(--white)",
        padding: "var(--space-11) var(--gutter) var(--space-7)",
        ...style,
      }}
      {...rest}
    >
      <div
        className="sn-footer-grid"
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(220px, 1.6fr) repeat(auto-fit, minmax(150px, 1fr))",
          gap: "var(--space-9) var(--space-8)",
          alignItems: "start",
        }}
      >
        {/* Brand block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: 340 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: "var(--weight-medium)", letterSpacing: "var(--tracking-tight)" }}>
            {brand}
          </span>
          {tagline && (
            <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,0.7)" }}>
              {tagline}
            </p>
          )}
          {social.length > 0 && (
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-2)" }}>
              {social.map((s, i) => (
                <SocialButton key={i} name={s.name} label={s.label} href={s.href} tone="ghost" />
              ))}
            </div>
          )}
        </div>

        {/* Nav columns */}
        {columns.map((col, i) => (
          <nav key={i} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <span style={headingStyle}>{col.title}</span>
            {col.items.map((it, j) => (
              <Link key={j} to={it.href || "/"} style={linkStyle} onMouseEnter={linkOver} onMouseLeave={linkOut}>
                {it.label}
              </Link>
            ))}
          </nav>
        ))}

        {/* Contact column */}
        {contact && (
          <address style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", fontStyle: "normal" }}>
            <span style={headingStyle}>{contact.title || "Yhteystiedot"}</span>
            {contact.address && (
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,0.78)" }}>
                {(Array.isArray(contact.address) ? contact.address : [contact.address]).map((l, k) => (
                  <span key={k} style={{ display: "block" }}>{l}</span>
                ))}
              </p>
            )}
            {contact.phone && (
              <a href={"tel:" + contact.phone.replace(/\s+/g, "")} style={linkStyle} onMouseEnter={linkOver} onMouseLeave={linkOut}>
                {contact.phone}
              </a>
            )}
            {contact.email && (
              <a href={"mailto:" + contact.email} style={linkStyle} onMouseEnter={linkOver} onMouseLeave={linkOut}>
                {contact.email}
              </a>
            )}
          </address>
        )}
      </div>

      {/* Fine print */}
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "var(--space-9) auto 0",
          paddingTop: "var(--space-5)",
          borderTop: "1px solid var(--glass-border-dark)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-3)",
          justifyContent: "space-between",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        <span>{bottomNote}</span>
        <span>{location}</span>
      </div>
    </footer>
  );
}
