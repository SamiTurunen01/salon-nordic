/* Brand glyphs — simple geometric paths, sized to inherit currentColor. */
function SocialGlyph({ name }) {
  if (name === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.69l.4-3.12h-3.09V7.89c0-.9.25-1.51 1.54-1.51h1.65V3.59c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.02 1.46-4.02 4.13V9.88H7.56V13h2.7v8z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * SocialButton — circular icon button used in the footer and contact page.
 * tone="ghost" → outlined for dark backgrounds; tone="solid" → filled dark for light backgrounds.
 */
export function SocialButton({ name, label, href = "#", tone = "ghost", style = {}, ...rest }) {
  const ghost = tone !== "solid";
  const base = {
    width: 46,
    height: 46,
    flex: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-full)",
    textDecoration: "none",
    background: ghost ? "rgba(255,255,255,0.06)" : "var(--black)",
    color: ghost ? "rgba(255,255,255,0.85)" : "var(--white)",
    border: ghost ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--black)",
    transition: "background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)",
  };
  const over = (e) => {
    const el = e.currentTarget;
    if (ghost) {
      el.style.background = "var(--white)";
      el.style.color = "var(--black)";
      el.style.borderColor = "var(--white)";
    } else {
      el.style.background = "var(--white)";
      el.style.color = "var(--black)";
    }
    el.style.transform = "translateY(-2px)";
  };
  const out = (e) => {
    const el = e.currentTarget;
    el.style.background = base.background;
    el.style.color = base.color;
    el.style.borderColor = ghost ? "rgba(255,255,255,0.2)" : "var(--black)";
    el.style.transform = "none";
  };
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...base, ...style }}
      onMouseEnter={over}
      onMouseLeave={out}
      onFocus={over}
      onBlur={out}
      {...rest}
    >
      <SocialGlyph name={name} />
    </a>
  );
}
