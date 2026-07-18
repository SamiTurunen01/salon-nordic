import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { TeamCard } from "../components/salon/TeamCard.jsx";
import { SALON_DATA } from "../data/salonData.js";

export default function Team() {
  const D = SALON_DATA;
  return (
    <main>
      <PageHero eyebrow="Henkilöstö" title="Tiimimme"
        lead="Intohimoiset ammattilaiset, jotka kouluttautuvat jatkuvasti ja rakastavat työtään." />
      <Section>
        <div className="sn-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
          {D.team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 80}><TeamCard {...m} /></Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
