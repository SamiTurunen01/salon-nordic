import { Badge } from "../core/Badge.jsx";
import { Button } from "../core/Button.jsx";

/**
 * PricingCard — a price plan / package. `featured` flips it to ink-on-dark
 * to draw the eye to the recommended package.
 */
export function PricingCard({
  name,
  price,
  unit = "€",
  caption,
  items = [],
  featured = false,
  badge,
  cta = "Varaa aika",
  onCta,
  style = {},
  ...rest
}) {
  const dark = featured;
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        padding: "var(--space-7) var(--space-6)",
        background: dark ? "var(--black)" : "var(--surface)",
        color: dark ? "var(--white)" : "var(--text)",
        border: `1px solid ${dark ? "var(--black)" : "var(--border)"}`,
        borderRadius: "var(--radius-xl)",
        boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: dark ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
          }}
        >
          {name}
        </span>
        {badge && <Badge variant={dark ? "glass" : "ink"}>{badge}</Badge>}
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-5xl)",
            fontWeight: "var(--weight-medium)",
            lineHeight: 1,
            letterSpacing: "var(--tracking-display)",
          }}
        >
          {price}
        </span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", color: dark ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}>
          {unit}
        </span>
      </div>
      {caption && (
        <p style={{ margin: "calc(-1 * var(--space-3)) 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: dark ? "rgba(255,255,255,0.65)" : "var(--text-muted)" }}>
          {caption}
        </p>
      )}

      <div style={{ height: 1, background: dark ? "var(--glass-border-dark)" : "var(--border)" }} />

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)", flex: 1 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: "var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)", color: dark ? "rgba(255,255,255,0.85)" : "var(--text-secondary)" }}>
            <span aria-hidden style={{ color: dark ? "var(--white)" : "var(--black)" }}>—</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <Button variant={dark ? "glass" : "primary"} fullWidth size="md" onClick={onCta}>
        {cta}
      </Button>
    </div>
  );
}
