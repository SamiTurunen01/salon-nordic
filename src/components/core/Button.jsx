import { useState } from "react";

/**
 * Button — primary call-to-action across Salon Nordic.
 * Monochrome by design: solid ink, glass, outline or ghost.
 * Pass `as={Link}` with a `to` prop to render as a React Router link
 * that keeps this component's visual styling.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "0 var(--space-4)", height: 40, fontSize: "var(--text-sm)" },
    md: { padding: "0 var(--space-5)", height: 50, fontSize: "0.9375rem" },
    lg: { padding: "0 var(--space-6)", height: 58, fontSize: "var(--text-base)" },
  };

  const variants = {
    primary: {
      background: "var(--black)",
      color: "var(--white)",
      border: "1px solid var(--black)",
    },
    secondary: {
      background: "var(--white)",
      color: "var(--black)",
      border: "1px solid var(--border-strong)",
    },
    glass: {
      background: "var(--glass-bg-strong)",
      color: "var(--text-on-glass)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "var(--glass-backdrop)",
      WebkitBackdropFilter: "var(--glass-backdrop)",
      boxShadow: "var(--shadow-sm)",
    },
    ghost: {
      background: "transparent",
      color: "var(--black)",
      border: "1px solid transparent",
    },
  };

  const [hover, setHover] = useState(false);

  const Comp = as;
  return (
    <Comp
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        width: fullWidth ? "100%" : "auto",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-wide)",
        lineHeight: 1,
        borderRadius: "var(--radius-full)",
        cursor: "pointer",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transform: hover ? "scale(1.02)" : undefined,
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, background var(--dur) var(--ease-out)",
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={(e) => { setHover(false); e.currentTarget.style.transform = ""; }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(var(--press-scale))")}
      onMouseUp={(e) => (e.currentTarget.style.transform = hover ? "scale(1.02)" : "")}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Comp>
  );
}
