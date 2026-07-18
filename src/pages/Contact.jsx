import { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { GlassCard } from "../components/layout/GlassCard.jsx";
import { Button } from "../components/core/Button.jsx";
import { Input } from "../components/forms/Input.jsx";
import { Select } from "../components/forms/Select.jsx";
import { Textarea } from "../components/forms/Textarea.jsx";
import { Checkbox } from "../components/forms/Checkbox.jsx";
import { SocialButton } from "../components/navigation/SocialButton.jsx";
import { BUSINESS } from "../config/business.js";
import { SERVICES } from "../data/services.js";
import { TEAM_MEMBERS } from "../data/team.js";

const MAP_QUERY = encodeURIComponent(`${BUSINESS.address.join(", ")}, ${BUSINESS.country}`);

export default function Contact() {
  const B = BUSINESS;
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  return (
    <main>
      <PageHero eyebrow="Yhteystiedot" title="Varaa aika"
        lead="Jätä varauspyyntö tai poikkea käymään — vastaamme yleensä saman päivän aikana." />
      <Section>
        <div className="sn-contact" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "var(--space-9)", alignItems: "start" }}>
          {/* Form */}
          <Reveal>
            <GlassCard tone="strong" padding="xl" elevation="md" style={{ background: "var(--surface)", minWidth: 0 }}>
              {sent ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingBlock: "var(--space-6)", textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500 }}>Kiitos!</span>
                  <p style={{ margin: 0, color: "var(--text-secondary)" }}>Varauspyyntösi on vastaanotettu. Otamme sinuun pian yhteyttä.</p>
                  <div style={{ marginTop: "var(--space-3)" }}>
                    <Button variant="secondary" onClick={() => setSent(false)}>Lähetä uusi</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (!consent) { setConsentError(true); return; } setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                  <div className="sn-form-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "var(--space-4)" }}>
                    <Input label="Nimi" placeholder="Etunimi Sukunimi" required />
                    <Input label="Puhelin" type="tel" placeholder="040 123 4567" required />
                  </div>
                  <Input label="Sähköposti" type="email" placeholder="nimi@esimerkki.fi" required />
                  <div className="sn-form-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "var(--space-4)" }}>
                    <Select label="Palvelu" options={SERVICES.map((s) => s.title)} />
                    <Select label="Kampaaja" options={["Kuka tahansa", ...TEAM_MEMBERS.map((t) => t.name)]} />
                  </div>
                  <Textarea label="Viesti" rows={4} placeholder="Kerro toiveistasi tai toivotusta ajankohdasta…" />
                  <div>
                    <Checkbox
                      label={
                        <span>
                          Hyväksyn{" "}
                          <Link
                            to="/tietosuojaseloste"
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                          >
                            tietosuojakäytännön
                          </Link>{" "}
                          ja yhteydenoton. *
                        </span>
                      }
                      checked={consent}
                      onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setConsentError(false); }}
                    />
                    {consentError && (
                      <p style={{ margin: "var(--space-2) 0 0", color: "var(--error, #d92d20)", fontSize: "var(--text-sm)" }}>Hyväksy tietosuojakäytäntö ja yhteydenotto ennen viestin lähettämistä.</p>
                    )}
                  </div>
                  <Button variant="primary" size="lg" fullWidth type="submit">Lähetä varauspyyntö</Button>
                </form>
              )}
            </GlassCard>
          </Reveal>

          {/* Details */}
          <Reveal delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <div>
                <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Käyntiosoite</h3>
                <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.6, overflowWrap: "anywhere" }}>{B.address.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</p>
              </div>
              <div>
                <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Yhteys</h3>
                <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.7 }}>
                  <a href={"tel:" + B.phone} style={{ color: "var(--text)", textDecoration: "none", display: "block", overflowWrap: "anywhere" }}>{B.phone}</a>
                  <a href={"mailto:" + B.email} style={{ color: "var(--text)", textDecoration: "none", display: "block", overflowWrap: "anywhere" }}>{B.email}</a>
                </p>
              </div>
              {B.social && B.social.length > 0 && (
                <div>
                  <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Seuraa meitä</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
                    {B.social.map((s) => (
                      <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                        <SocialButton name={s.name} label={s.label} href={s.href} tone="solid" />
                        <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", textDecoration: "none", fontSize: "var(--text-base)", overflowWrap: "anywhere" }}>{s.handle}</a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Aukioloajat</h3>
                <div style={{ maxWidth: 280 }}>
                  {B.hours.map(([d, h]) => (
                    <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-2) 0", borderBottom: "1px solid var(--hairline)" }}>
                      <span style={{ color: "var(--text-secondary)" }}>{d}</span><span style={{ fontWeight: 600 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)", width: "100%", minWidth: 0 }}>
                <iframe
                  title={`Kartta - ${B.address.join(", ")}`}
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
