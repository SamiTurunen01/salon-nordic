import { useRef, useState, useEffect } from "react";

/** Checkbox — labelled square checkbox with a clear checkmark when checked. */
export function Checkbox({ label, checked, defaultChecked, id, style = {}, onChange, ...rest }) {
  const inputId = useRef(id || `cb-${Math.random().toString(36).slice(2, 8)}`).current;
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(!!(checked ?? defaultChecked));

  useEffect(() => {
    if (isControlled) setInternalChecked(!!checked);
  }, [checked, isControlled]);

  const isChecked = isControlled ? !!checked : internalChecked;

  return (
    <label
      htmlFor={inputId}
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "var(--space-3)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-snug)",
        color: "var(--text-secondary)",
        ...style,
      }}
    >
      <span
        style={{
          position: "relative",
          width: 20,
          height: 20,
          flex: "0 0 auto",
          marginTop: 1,
          borderRadius: "var(--radius-xs)",
          border: `1px solid ${isChecked ? "var(--black)" : "var(--border-strong)"}`,
          background: isChecked ? "var(--black)" : "var(--field-bg)",
          display: "grid",
          placeItems: "center",
          transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        }}
      >
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          aria-hidden="true"
          style={{
            opacity: isChecked ? 1 : 0,
            transition: "opacity var(--dur-fast) var(--ease-out)",
          }}
        >
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke="var(--white)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          id={inputId}
          type="checkbox"
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            opacity: 0,
            cursor: "pointer",
          }}
          onChange={(e) => {
            if (!isControlled) setInternalChecked(e.currentTarget.checked);
            if (onChange) onChange(e);
          }}
          {...rest}
        />
      </span>
      <span>{label}</span>
    </label>
  );
}
