import { useNavigate } from "react-router-dom";
import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { ServiceCard } from "../components/salon/ServiceCard.jsx";
import { SERVICES } from "../data/services.js";

export default function Services() {
  const navigate = useNavigate();
  return (
    <main>
      <PageHero eyebrow="Palvelut" title="Leikkaukset, värit & hoidot"
        lead="Jokainen palvelu alkaa konsultaatiolla — kuuntelemme toiveesi ja suunnittelemme lopputuloksen yhdessä." />
      <Section>
        <div className="sn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "var(--space-5)" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80} style={{ display: "flex", minWidth: 0 }}>
              <ServiceCard {...s} onSelect={() => navigate("/yhteystiedot")} style={{ width: "100%" }} />
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
