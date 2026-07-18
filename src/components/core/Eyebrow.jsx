/**
 * Eyebrow — uppercase, wide-tracked micro label that sits above headings.
 * A signature motif of this design system; often paired with a short rule.
 */
export function Eyebrow({ children, withRule = false, tone = "muted", style = {}, ...rest }) {
  const colors = { muted: "var(--text-muted)", ink: "var(--black)", inverse: "rgba(255,255,255,0.7)" };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: colors[tone],
        ...style,
      }}
      {...rest}
    >
      {withRule && (
        <span style={{ width: 28, height: 1, background: "currentColor", opacity: 0.5, display: "inline-block" }} />
      )}
      {children}
    </span>
  );
}
