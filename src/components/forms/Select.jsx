/** Select — labelled native dropdown styled to match the system. */
export function Select({ label, helper, id, options = [], required = false, style = {}, ...rest }) {
  const inputId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
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
      <div style={{ position: "relative", minWidth: 0 }}>
        <select
          id={inputId}
          required={required}
          style={{
            width: "100%",
            minWidth: 0,
            height: 52,
            padding: "0 var(--space-7) 0 var(--space-4)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            color: "var(--text)",
            background: "var(--field-bg)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-sm)",
            outline: "none",
            appearance: "none",
            cursor: "pointer",
            transition: "border-color var(--dur) var(--ease-out)",
            ...style,
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--black)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
          {...rest}
        >
          {options.map((o) => (
            <option key={typeof o === "string" ? o : o.value} value={typeof o === "string" ? o : o.value}>
              {typeof o === "string" ? o : o.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          style={{
            position: "absolute",
            right: "var(--space-4)",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--text-muted)",
            fontSize: 12,
          }}
        >
          ▾
        </span>
      </div>
      {helper && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          {helper}
        </span>
      )}
    </div>
  );
}
