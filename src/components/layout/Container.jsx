export function Container({ children, narrow, style }) {
  return (
    <div style={{ maxWidth: narrow ? "var(--container-narrow)" : "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)", ...style }}>
      {children}
    </div>
  );
}
