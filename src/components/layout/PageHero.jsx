import { Container } from "./Container.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

/* Page hero for inner pages — eyebrow + serif title over muted band. */
export function PageHero({ eyebrow, title, lead }) {
  return (
    <section style={{ paddingTop: "calc(var(--section-y) + 40px)", paddingBottom: "var(--section-y-tight)", background: "var(--bg-muted)", borderBottom: "1px solid var(--border)" }}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} size="xl" />
        </Reveal>
      </Container>
    </section>
  );
}
