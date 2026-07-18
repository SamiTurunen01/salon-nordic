/** Badge — small status / category pill. */
export function Badge({ children, variant = "neutral", style = {}, ...rest }) {
  const variants = {
    neutral: { background: "var(--surface-muted)", color: "var(--text-secondary)", border: "1px solid var(--border)" },
    ink: { background: "var(--black)", color: "var(--white)", border: "1px solid var(--black)" },
    outline: { background: "transparent", color: "var(--black)", border: "1px solid var(--border-strong)" },
    glass: {
      background: "var(--glass-bg-strong)",
      color: "var(--text-on-glass)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "var(--glass-backdrop)",
      WebkitBackdropFilter: "var(--glass-backdrop)",
    },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        height: 26,
        padding: "0 var(--space-3)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-wide)",
        borderRadius: "var(--radius-full)",
        whiteSpace: "nowrap",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
