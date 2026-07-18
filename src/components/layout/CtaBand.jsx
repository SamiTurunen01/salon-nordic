import { Link } from "react-router-dom";
import { Container } from "./Container.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";
import { Button } from "../core/Button.jsx";
import { SALON_IMG } from "../../data/images.js";

/* Full-bleed dark CTA band used to close pages. */
export function CtaBand() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--black)", color: "var(--white)", paddingBlock: "var(--section-y)" }}>
      <div style={{ position: "absolute", inset: 0, background: `center/cover no-repeat url("${SALON_IMG.heroAlt}")`, opacity: 0.22, filter: "grayscale(0.4)" }} />
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)", maxWidth: 720, marginInline: "auto" }}>
          <Eyebrow tone="inverse" withRule>Varaa aikasi</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-5xl)", lineHeight: 1.05, letterSpacing: "var(--tracking-display)" }}>
            Uusi tyylisi odottaa
          </h2>
          <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.7, color: "rgba(255,255,255,0.78)", maxWidth: "52ch" }}>
            Varaa aika muutamassa sekunnissa — kerro toiveistasi, niin hoidamme loput.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
            <Button as={Link} to="/yhteystiedot" variant="glass" size="lg">Varaa aika</Button>
            <Button as={Link} to="/palvelut" variant="ghost" size="lg" style={{ color: "var(--white)" }}>Tutustu palveluihin</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
