import { Badge } from "../core/Badge.jsx";

/**
 * ServiceCard — image-topped card for a salon service. Hover lifts & zooms
 * the image; an optional badge marks featured/new services.
 */
export function ServiceCard({
  image,
  title,
  description,
  priceFrom,
  badge,
  duration,
  onSelect,
  style = {},
  ...rest
}) {
  return (
    <article
      onClick={onSelect}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        cursor: onSelect ? "pointer" : "default",
        transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(var(--hover-lift))";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        const img = e.currentTarget.querySelector("[data-img]");
        if (img) img.style.transform = "scale(1.06)";

      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "none";
        const img = e.currentTarget.querySelector("[data-img]");
        if (img) img.style.transform = "scale(1)";

      }}
      {...rest}
    >
      <div style={{ position: "relative", aspectRatio: "4 / 5", flex: "none", overflow: "hidden", background: "var(--surface-muted)" }}>
        {image ? (
          <img
            data-img
            src={image}
            alt={title || ""}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
        ) : (
          <div
            data-img
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, var(--gray-200), var(--gray-100))",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
        )}
        {badge && (
          <div style={{ position: "absolute", top: "var(--space-3)", left: "var(--space-3)" }}>
            <Badge variant="glass">{badge}</Badge>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flex: "1 1 auto", flexDirection: "column", gap: "var(--space-2)", padding: "var(--space-5)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-3)" }}>
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--text)",
            }}
          >
            {title}
          </h3>
          {priceFrom && (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text)",
                whiteSpace: "nowrap",
              }}
            >
              {priceFrom}
            </span>
          )}
        </div>
        {description && (
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--text-secondary)",
              textWrap: "pretty",
            }}
          >
            {description}
          </p>
        )}
        {duration && (
          <span
            style={{
              marginTop: "auto",
              paddingTop: "var(--space-3)",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {duration}
          </span>
        )}
      </div>
    </article>
  );
}
