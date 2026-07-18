import { useState } from "react";
import { BUSINESS } from "../../config/business.js";

/**
 * GalleryGrid — premium portrait/square masonry. Tiles flow into balanced
 * columns (CSS multi-column) and never span horizontally, so the layout stays
 * elegant and gap-free at every width. Each item picks an aspect ratio via
 * `ratio` ("portrait" | "tall" | "square" | a number). Hover zooms the image
 * and lifts a soft glass caption. Failed/empty images degrade to a refined
 * tonal placeholder — never a flat gray block.
 */

const RATIO_MAP = { portrait: "4 / 5", tall: "3 / 4", square: "1 / 1", landscape: "4 / 5" };

function resolveRatio(it) {
  if (typeof it.ratio === "number" && it.ratio > 0) return String(it.ratio);
  if (it.ratio && RATIO_MAP[it.ratio]) return RATIO_MAP[it.ratio];
  if (it.tall) return RATIO_MAP.tall;
  if (it.wide) return RATIO_MAP.square; // legacy: collapse wide → square, never landscape
  return RATIO_MAP.portrait;
}

function GalleryTile({ it, gap }) {
  const [failed, setFailed] = useState(false);
  const showImg = it.image && !failed;
  const capText = typeof it.caption === "string" ? it.caption : "";

  return (
    <figure
      style={{
        position: "relative",
        margin: 0,
        marginBottom: gap,
        breakInside: "avoid",
        WebkitColumnBreakInside: "avoid",
        aspectRatio: resolveRatio(it),
        overflow: "hidden",
        borderRadius: "var(--radius-md)",
        background: "var(--surface-muted)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("[data-img]");
        const cap = e.currentTarget.querySelector("[data-cap]");
        if (img) img.style.transform = "scale(1.06)";
        if (cap) { cap.style.opacity = "1"; cap.style.transform = "translateY(0)"; }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("[data-img]");
        const cap = e.currentTarget.querySelector("[data-cap]");
        if (img) img.style.transform = "scale(1)";
        if (cap) { cap.style.opacity = "0"; cap.style.transform = "translateY(8px)"; }
      }}
    >
      {showImg ? (
        <img
          data-img
          src={it.image}
          alt={capText}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform var(--dur-slow) var(--ease-out)",
          }}
        />
      ) : (
        <div
          data-img
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "repeating-linear-gradient(135deg, var(--bg-muted) 0, var(--bg-muted) 11px, var(--surface) 11px, var(--surface) 22px)",
            transition: "transform var(--dur-slow) var(--ease-out)",
          }}
        >
          <span
            style={{
              fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
              fontSize: "var(--text-xs)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-subtle)",
            }}
          >
            {capText || BUSINESS.name}
          </span>
        </div>
      )}

      {it.caption && (
        <figcaption
          data-cap
          style={{
            position: "absolute",
            left: "var(--space-3)",
            bottom: "var(--space-3)",
            padding: "var(--space-2) var(--space-3)",
            background: "var(--glass-bg-strong)",
            border: "1px solid var(--glass-border)",
            backdropFilter: "var(--glass-backdrop)",
            WebkitBackdropFilter: "var(--glass-backdrop)",
            borderRadius: "var(--radius-full)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--text-on-glass)",
            opacity: 0,
            transform: "translateY(8px)",
            transition: "opacity var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)",
          }}
        >
          {it.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function GalleryGrid({
  items = [],
  columns = 3,
  gap = "var(--space-3)",
  minColWidth = "165px",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        // column-count caps the count; column-width sets the floor → fully
        // responsive (fewer columns as the viewport narrows) with no media queries.
        columnCount: columns,
        columnWidth: minColWidth,
        columnGap: gap,
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => (
        <GalleryTile key={i} it={it} gap={gap} />
      ))}
    </div>
  );
}
