/**
 * TeamCard — stylist portrait, name, role and specialties. Portrait is
 * grayscale at rest and warms to full tone on hover (editorial salon motif).
 */
export function TeamCard({ image, name, role, specialties = [], style = {}, ...rest }) {
  return (
    <figure
      style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-4)", ...style }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("[data-img]");
        if (img) { img.style.filter = "grayscale(0)"; img.style.transform = "scale(1.04)"; }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("[data-img]");
        if (img) { img.style.filter = "grayscale(1)"; img.style.transform = "scale(1)"; }
      }}
      {...rest}
    >
      <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "var(--surface-muted)" }}>
        <div
          data-img
          style={{
            position: "absolute",
            inset: 0,
            background: image ? `center/cover no-repeat url("${image}")` : "linear-gradient(135deg, var(--gray-200), var(--gray-100))",
            filter: "grayscale(1)",
            transition: "filter var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out)",
          }}
        />
      </div>
      <figcaption style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: "var(--weight-medium)", letterSpacing: "var(--tracking-tight)", color: "var(--text)" }}>
          {name}
        </span>
        {role && (
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>
            {role}
          </span>
        )}
        {specialties.length > 0 && (
          <p style={{ margin: "var(--space-2) 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)" }}>
            {specialties.join(" · ")}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
