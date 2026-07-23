import { Link, useNavigate } from "react-router-dom";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { Eyebrow } from "../components/core/Eyebrow.jsx";
import { Button } from "../components/core/Button.jsx";
import { GlassCard } from "../components/layout/GlassCard.jsx";
import { SectionHeading } from "../components/layout/SectionHeading.jsx";
import { ServiceCard } from "../components/salon/ServiceCard.jsx";
import { GalleryGrid } from "../components/salon/GalleryGrid.jsx";
import { TeamCard } from "../components/salon/TeamCard.jsx";
import { BUSINESS } from "../config/business.js";
import { SERVICES, PRICE_LIST } from "../data/services.js";
import { GALLERY_ITEMS } from "../data/gallery.js";
import { TEAM_MEMBERS } from "../data/team.js";
import { SALON_IMG } from "../data/images.js";

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      {/* Photo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: `center/cover no-repeat url("${SALON_IMG.hero}")` }} />
      {/* Directional scrim — darkens ONLY the left, where the copy sits, and clears fully to the right.
         No vertical/bottom gradient, so the photo (and the bottom-right stats card) stay bright. */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 42%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0) 100%)" }} />
      <Container style={{ position: "relative", zIndex: 2, width: "100%", paddingBottom: "var(--space-10)", paddingTop: "120px" }}>
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <Reveal><Eyebrow tone="inverse" withRule>{BUSINESS.category} · {BUSINESS.city}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: 0, color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-6xl)", lineHeight: 1.02, letterSpacing: "var(--tracking-display)", textWrap: "balance", overflowWrap: "break-word", textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.25)" }}>
              Hiuksesi,<br/>parhaimmillaan
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "var(--text-xl)", lineHeight: 1.6, maxWidth: "46ch", textShadow: "0 3px 20px rgba(0,0,0,0.65)" }}>
              Pohjoismaista tyylikkyyttä ja kokeneita kampaajia. Räätälöimme jokaisen leikkauksen ja sävyn juuri sinulle.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
              <Button as="a" href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" style={{ background: "var(--white)", color: "var(--black)", borderColor: "var(--white)" }}>Varaa aika</Button>
              <Button as={Link} to="/palvelut" variant="glass" size="lg" iconRight={<span>→</span>}>Palvelut</Button>
            </div>
          </Reveal>
        </div>
      </Container>

      <div style={{ position: "absolute", right: "var(--gutter)", bottom: "var(--space-10)", display: "none" }} className="sn-hero-stats">
        <GlassCard tone="dark" padding="md" style={{ display: "flex", gap: "var(--space-6)" }}>
          {BUSINESS.stats.map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500 }}>{n}</div>
              <div style={{ fontSize: "var(--text-xs)", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{l}</div>
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  );
}

function FeaturedServices() {
  const navigate = useNavigate();
  return (
    <Section muted>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-5)", flexWrap: "wrap", marginBottom: "var(--space-8)" }}>
          <SectionHeading eyebrow="Palvelut" title="Suosituimmat hoidot" lead="Pieni valikoima siitä, mitä osaamme — koko listan löydät palveluista." />
          <Button as={Link} to="/palvelut" variant="secondary">Kaikki palvelut</Button>
        </div>
      </Reveal>
      <div className="sn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "var(--space-5)" }}>
        {SERVICES.slice(0, 3).map((s, i) => (
          <Reveal key={s.id} delay={i * 80} style={{ display: "flex", minWidth: 0 }}>
            <ServiceCard {...s} onSelect={() => navigate("/palvelut")} style={{ width: "100%" }} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function GalleryPreview() {
  return (
    <Section>
      <Reveal>
        <SectionHeading align="center" eyebrow="Galleria" title="Töitämme" lead="Otos kädenjäljestämme — leikkauksia, värejä ja kampauksia." />
      </Reveal>
      <Reveal style={{ marginTop: "var(--space-8)" }}>
        <GalleryGrid columns={4} items={GALLERY_ITEMS.slice(0, 8)} />
      </Reveal>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-7)" }}>
        <Button as={Link} to="/galleria" variant="secondary">Koko galleria</Button>
      </div>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section muted>
      <Reveal>
        <SectionHeading align="center" eyebrow="Hinnasto" title="Palvelut ja hinnat" lead="Selkeä hinnoittelu. Hinta määräytyy palvelun laajuuden sekä hiusten pituuden ja paksuuden mukaan." />
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-7)", marginTop: "var(--space-8)" }}>
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-7)" }}>
        <Button as={Link} to="/hinnasto" variant="ghost" iconRight={<span>→</span>}>Katso koko hinnasto</Button>
      </div>
    </Section>
  );
}

function TeamPreview() {
  return (
    <Section>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-5)", flexWrap: "wrap", marginBottom: "var(--space-8)" }}>
          <SectionHeading eyebrow="Henkilöstö" title="Tutustu tekijöihin" lead="Kokenut tiimi, joka kuuntelee ja kertoo rehellisesti, mikä toimii." />
          <Button as={Link} to="/meista" variant="secondary">Koko tiimi</Button>
        </div>
      </Reveal>
      <div className="sn-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
        {TEAM_MEMBERS.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}><TeamCard {...m} /></Reveal>
        ))}
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <GalleryPreview />
      <PricingPreview />
      <TeamPreview />
      <CtaBand />
    </main>
  );
}
