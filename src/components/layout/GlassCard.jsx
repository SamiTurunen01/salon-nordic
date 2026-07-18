/**
 * GlassCard — the signature frosted surface. A translucent, blurred panel
 * with an inner highlight ring. Best placed over imagery or a tinted bg.
 */
export function GlassCard({
  children,
  tone = "light",
  elevation = "md",
  padding = "lg",
  interactive = false,
  style = {},
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--glass-bg)",
      borderColor: "var(--glass-border)",
      color: "var(--text-on-glass)",
    },
    strong: {
      background: "var(--glass-bg-strong)",
      borderColor: "var(--glass-border)",
      color: "var(--text-on-glass)",
    },
    dark: {
      background: "var(--glass-bg-dark)",
      borderColor: "var(--glass-border-dark)",
      color: "var(--white)",
    },
  };
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)",
    xl: "var(--space-7)",
  };
  const elevations = {
    flat: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-glass)",
    lg: "var(--shadow-lg), inset 0 1px 0 0 var(--glass-highlight)",
  };
  const t = tones[tone];
  return (
    <div
      style={{
        position: "relative",
        background: t.background,
        color: t.color,
        border: `1px solid ${t.borderColor}`,
        borderRadius: "var(--radius-lg)",
        padding: pads[padding],
        backdropFilter: "var(--glass-backdrop)",
        WebkitBackdropFilter: "var(--glass-backdrop)",
        boxShadow: elevations[elevation],
        transition:
          "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "translateY(var(--hover-lift))";
        e.currentTarget.style.boxShadow = "var(--shadow-xl), inset 0 1px 0 0 var(--glass-highlight)";
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = elevations[elevation];
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
