/** Input — labelled text field with optional helper / error. */
export function Input({
  label,
  helper,
  error,
  id,
  required = false,
  style = {},
  ...rest
}) {
  const inputId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", width: "100%", minWidth: 0 }}>
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
      <input
        id={inputId}
        required={required}
        style={{
          height: 52,
          width: "100%",
          minWidth: 0,
          padding: "0 var(--space-4)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          color: "var(--text)",
          background: "var(--field-bg)",
          border: `1px solid ${error ? "var(--danger)" : "var(--border-strong)"}`,
          borderRadius: "var(--radius-sm)",
          outline: "none",
          transition: "border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
          ...style,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--black)";
          e.currentTarget.style.boxShadow = "0 0 0 3px var(--hairline)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--border-strong)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {(helper || error) && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: error ? "var(--danger)" : "var(--text-muted)",
          }}
        >
          {error || helper}
        </span>
      )}
    </div>
  );
}
