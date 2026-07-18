/**
 * SectionHeading — eyebrow + large serif display title + optional lead.
 * The repeated section opener across the template.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "ink",
  size = "lg",
  style = {},
  ...rest
}) {
  const isInverse = tone === "inverse";
  const sizes = { md: "var(--text-3xl)", lg: "var(--text-4xl)", xl: "var(--text-5xl)" };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        maxWidth: align === "center" ? "var(--container-narrow)" : "none",
        marginInline: align === "center" ? "auto" : 0,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: isInverse ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: "var(--weight-medium)",
          fontSize: sizes[size],
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-display)",
          color: isInverse ? "var(--white)" : "var(--text)",
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          style={{
            margin: 0,
            maxWidth: "52ch",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: isInverse ? "rgba(255,255,255,0.78)" : "var(--text-secondary)",
            textWrap: "pretty",
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
