import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { GlassCard } from "../components/layout/GlassCard.jsx";
import { SectionHeading } from "../components/layout/SectionHeading.jsx";
import { Button } from "../components/core/Button.jsx";
import { BUSINESS } from "../config/business.js";

const STEPS = [
  { n: "01", title: "Valitse palvelu", text: "Selaa palveluvalikoimaa ja valitse haluamasi käsittely." },
  { n: "02", title: "Valitse kampaaja ja aika", text: "Katso reaaliaikaiset vapaat ajat ja valitse sinulle sopivin." },
  { n: "03", title: "Vahvista varaus", text: "Saat varausvahvistuksen suoraan sähköpostiin tai tekstiviestillä." },
];

export default function Booking() {
  const B = BUSINESS;
  return (
    <main>
      <PageHero eyebrow="Ajanvaraus" title="Varaa aika verkossa"
        lead="Näet vapaat ajat ja varaat käyntisi muutamassa minuutissa — myös iltaisin ja viikonloppuisin." />

      <Section>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-6)", maxWidth: 640, marginInline: "auto" }}>
            <SectionHeading
              align="center"
              eyebrow="Verkkoajanvaraus"
              title="Löydä sopiva aika"
              lead="Käytämme Timma-ajanvarausjärjestelmää, jotta näet reaaliaikaisesti vapaat ajat ja voit varata käyntisi juuri silloin, kun se sinulle parhaiten sopii."
            />
            <Button as="a" href={B.bookingUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Varaa aika
            </Button>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
              Varaus avautuu Timman ajanvaraussivulle uuteen välilehteen.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section muted>
        <Reveal>
          <SectionHeading align="center" eyebrow="Näin se toimii" title="Kolme askelta varattuun aikaan" />
        </Reveal>
        <div className="sn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "var(--space-5)", marginTop: "var(--space-8)" }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", padding: "var(--space-6)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", height: "100%" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500, color: "var(--text-muted)" }}>{s.n}</span>
                <h3 style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 600 }}>{s.title}</h3>
                <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <GlassCard tone="strong" padding="xl" elevation="md" style={{ background: "var(--surface)", display: "flex", flexWrap: "wrap", gap: "var(--space-7)", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ maxWidth: 420 }}>
              <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Varaa puhelimitse
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Etkö löydä sopivaa aikaa verkosta tai haluat kysyä jotain ennen varausta? Soita meille aukioloaikojen puitteissa.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <a href={"tel:" + B.phone} style={{ color: "var(--text)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500 }}>{B.phone}</a>
              <div style={{ minWidth: 220 }}>
                {B.hours.map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", padding: "var(--space-1) 0" }}>
                    <span style={{ color: "var(--text-secondary)" }}>{d}</span>
                    <span style={{ fontWeight: 600 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </main>
  );
}
