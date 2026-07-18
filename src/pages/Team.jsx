import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { TeamCard } from "../components/salon/TeamCard.jsx";
import { TEAM_MEMBERS } from "../data/team.js";

export default function Team() {
  return (
    <main>
      <PageHero eyebrow="Henkilöstö" title="Tiimimme"
        lead="Intohimoiset ammattilaiset, jotka kouluttautuvat jatkuvasti ja rakastavat työtään." />
      <Section>
        <div className="sn-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
          {TEAM_MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 80}><TeamCard {...m} /></Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
