import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { SectionHeading } from "../components/layout/SectionHeading.jsx";
import { PRICE_LIST } from "../data/services.js";

export default function Pricing() {
  return (
    <main>
      <PageHero eyebrow="Hinnasto" title="Laadukkaat palvelut selkein hinnoin"
        lead="Hinnat määräytyvät hiusten pituuden, paksuuden ja palvelun laajuuden mukaan. Tarkka hinta vahvistetaan ennen työn aloittamista." />

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Yksittäiset palvelut" title="Koko hinnasto" />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-7)", marginTop: "var(--space-7)" }}>
          {PRICE_LIST.map((col) => (
            <Reveal key={col.group}>
              <div>
                <h3 style={{ margin: "0 0 var(--space-4)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>{col.group}</h3>
                <div>
                  {col.rows.map(([name, price]) => (
                    <div key={name} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", padding: "var(--space-3) 0", borderBottom: "1px solid var(--hairline)" }}>
                      <span style={{ color: "var(--text-secondary)" }}>{name}</span>
                      <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
