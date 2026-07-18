/** Textarea — multi-line field for messages / notes. */
export function Textarea({ label, helper, id, rows = 4, required = false, style = {}, ...rest }) {
  const inputId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", width: "100%" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--weight-medium)",
            color: "var(--text-secondary)",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--text-muted)" }}> *</span>}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        required={required}
        style={{
          padding: "var(--space-3) var(--space-4)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          lineHeight: "var(--leading-normal)",
          color: "var(--text)",
          background: "var(--field-bg)",
          border: "1px solid var(--border-strong)",
          borderRadius: "var(--radius-sm)",
          outline: "none",
          resize: "vertical",
          transition: "border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
          ...style,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--black)";
          e.currentTarget.style.boxShadow = "0 0 0 3px var(--hairline)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--border-strong)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {helper && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          {helper}
        </span>
      )}
    </div>
  );
}
