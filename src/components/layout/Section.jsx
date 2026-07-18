import { Container } from "./Container.jsx";

export function Section({ children, muted, ink, style }) {
  return (
    <section
      style={{
        paddingBlock: "var(--section-y)",
        background: ink ? "var(--black)" : muted ? "var(--bg-muted)" : "var(--bg)",
        color: ink ? "var(--white)" : "var(--text)",
        ...style,
      }}
    >
      <Container>{children}</Container>
    </section>
  );
}
