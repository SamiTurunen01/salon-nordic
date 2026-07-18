/**
 * IconButton — square/circular control for a single icon (menu, close, social).
 */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  label,
  style = {},
  ...rest
}) {
  const dims = { sm: 38, md: 46, lg: 54 };
  const variants = {
    solid: { background: "var(--black)", color: "var(--white)", border: "1px solid var(--black)" },
    outline: { background: "var(--white)", color: "var(--black)", border: "1px solid var(--border-strong)" },
    glass: {
      background: "var(--glass-bg-strong)",
      color: "var(--text-on-glass)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "var(--glass-backdrop)",
      WebkitBackdropFilter: "var(--glass-backdrop)",
    },
    ghost: { background: "transparent", color: "var(--black)", border: "1px solid transparent" },
  };
  return (
    <button
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dims[size],
        height: dims[size],
        borderRadius: "var(--radius-full)",
        cursor: "pointer",
        transition: "background var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e) => { if (variant === "ghost") e.currentTarget.style.background = "var(--surface-muted)"; }}
      onMouseLeave={(e) => { if (variant === "ghost") e.currentTarget.style.background = "transparent"; }}
      {...rest}
    >
      {children}
    </button>
  );
}
