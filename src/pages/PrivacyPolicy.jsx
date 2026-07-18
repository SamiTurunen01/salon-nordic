import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";

/* Placeholder token, styled so it reads clearly as "fill this in". */
function Fill({ children }) {
  return (
    <span style={{
      background: "var(--bg-muted)",
      border: "1px dashed var(--border-strong)",
      borderRadius: "var(--radius-xs)",
      padding: "0 6px",
      color: "var(--text-secondary)",
      fontStyle: "italic",
    }}>
      {children}
    </span>
  );
}

function PolicyLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
    >
      {children}
    </a>
  );
}

function H2({ children }) {
  return (
    <h2 style={{
      margin: "0 0 var(--space-4)",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "var(--text-3xl)",
      lineHeight: 1.15,
      letterSpacing: "var(--tracking-display)",
      color: "var(--text)",
    }}>
      {children}
    </h2>
  );
}

function P({ children, style }) {
  return (
    <p style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", ...style }}>
      {children}
    </p>
  );
}

function UL({ children }) {
  return (
    <ul style={{ margin: "0 0 var(--space-3)", padding: "0 0 0 1.2em", display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)" }}>
      {children}
    </ul>
  );
}

function PolicySection({ children }) {
  return (
    <div style={{ paddingBlock: "var(--space-7)", borderBottom: "1px solid var(--hairline)" }}>
      {children}
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Custom hero: same visual language as PageHero, but a real <h1> for correct heading order. */}
      <section style={{ paddingTop: "calc(var(--section-y) + 40px)", paddingBottom: "var(--section-y-tight)", background: "var(--bg-muted)", borderBottom: "1px solid var(--border)" }}>
        <Container>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Tietosuoja
              </span>
              <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-5xl)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)", color: "var(--text)", textWrap: "balance" }}>
                Tietosuojaseloste
              </h1>
              <p style={{ margin: 0, maxWidth: "52ch", fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)" }}>
                Tämä seloste kertoo, miten käsittelemme henkilötietoja verkkosivustollamme ja yhteydenottolomakkeen kautta.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section style={{ paddingBlock: "var(--space-8)" }}>
        <div style={{ maxWidth: "70ch" }}>

          <PolicySection>
            <H2>1. Rekisterinpitäjä</H2>
            <P>Tämän verkkosivuston ja yhteydenottolomakkeen rekisterinpitäjä on:</P>
            <UL>
              <li>Yritys: <Fill>[Yrityksen nimi]</Fill></li>
              <li>Y-tunnus: <Fill>[Y-tunnus]</Fill></li>
              <li>Osoite: <Fill>[Osoite]</Fill></li>
              <li>Sähköposti: <Fill>[Sähköpostiosoite]</Fill></li>
              <li>Puhelin: <Fill>[Puhelinnumero]</Fill></li>
            </UL>
            <P>Yhteyshenkilö tietosuoja-asioissa: <Fill>[Yhteyshenkilön nimi ja yhteystiedot]</Fill></P>
          </PolicySection>

          <PolicySection>
            <H2>2. Rekisterin nimi</H2>
            <P>Verkkosivuston yhteydenottolomakkeen asiakasrekisteri.</P>
          </PolicySection>

          <PolicySection>
            <H2>3. Henkilötietojen käsittelyn tarkoitus</H2>
            <P>Henkilötietoja käsitellään seuraaviin tarkoituksiin:</P>
            <UL>
              <li>yhteydenottopyyntöjen vastaanottaminen ja niihin vastaaminen</li>
              <li>viestintä nykyisten ja mahdollisten asiakkaiden kanssa</li>
              <li>palvelu- ja ajanvarauskyselyiden käsittely</li>
              <li>roskapostin ja yhteydenottolomakkeen väärinkäytön estäminen</li>
              <li>verkkosivuston teknisen tietoturvan ylläpito</li>
            </UL>
          </PolicySection>

          <PolicySection>
            <H2>4. Yhteydenottolomake</H2>
            <P>Yhteydenottolomakkeen kautta voidaan kerätä seuraavia tietoja:</P>
            <UL>
              <li>nimi</li>
              <li>sähköpostiosoite</li>
              <li>puhelinnumero, mikäli se annetaan</li>
              <li>viestin sisältö</li>
              <li>suostumus tietosuojaselosteeseen</li>
              <li>lähetyksen päivämäärä ja kellonaika</li>
              <li>tekniset tiedot, joita tarvitaan roskapostin torjuntaan ja lomakkeen tietoturvaan</li>
            </UL>
            <P>Älä lähetä yhteydenottolomakkeella arkaluonteisia henkilötietoja.</P>
          </PolicySection>

          <PolicySection>
            <H2>5. Google Apps Script</H2>
            <P>Yhteydenottolomake käsitellään Google Apps Scriptin avulla. Lomakkeen tiedot välitetään Googlen palveluihin yhteydenottopyynnön toimittamista varten.</P>
            <P>Google Apps Scriptiä voidaan käyttää lomakkeen tietojen lähettämiseen sivuston ylläpitäjälle sähköpostitse ja/tai tallentamiseen Google Sheetsiin. Tietoja käytetään ainoastaan yhteydenottopyynnön käsittelyyn, eikä yhteydenottolomakkeen tietoja käytetä mainontaan ilman erillistä suostumusta.</P>
          </PolicySection>

          <PolicySection>
            <H2>6. Google reCAPTCHA v3</H2>
            <P>Verkkosivustolla käytetään Google reCAPTCHA v3 -palvelua roskapostin, automaattisten lähetysten ja väärinkäytön estämiseksi.</P>
            <P>reCAPTCHA analysoi teknisiä ja käyttäytymiseen liittyviä tietoja arvioidakseen, onko lomakkeen lähettäjä ihminen vai automatisoitu järjestelmä. Tähän voi sisältyä esimerkiksi IP-osoite, selain- ja laitetiedot, vuorovaikutus sivuston kanssa, ajankohta sekä reCAPTCHA-riskipisteytys.</P>
            <P>Google käsittelee tiedot oman tietosuojakäytäntönsä ja käyttöehtojensa mukaisesti. reCAPTCHA v3 toimii yleensä taustalla eikä näytä valintaruutua, mutta se voi silti käyttää evästeitä tai vastaavia tekniikoita osana toimintaansa.</P>
            <P>
              Lisätietoa: <PolicyLink href="https://policies.google.com/privacy">Googlen tietosuojakäytäntö</PolicyLink>
              {" "}ja <PolicyLink href="https://policies.google.com/terms">Googlen käyttöehdot</PolicyLink>.
            </P>
          </PolicySection>

          <PolicySection>
            <H2>7. Käsittelyn oikeusperuste</H2>
            <UL>
              <li>Yhteydenottopyynnön käsittely perustuu käyttäjän omaan pyyntöön ennen mahdollisen sopimuksen syntymistä.</li>
              <li>Asiakasviestintä voi perustua sopimuksen täytäntöönpanoon.</li>
              <li>Roskapostin torjunta ja sivuston tietoturva voivat perustua rekisterinpitäjän oikeutettuun etuun.</li>
              <li>Suostumusta käytetään silloin, kun laki sitä edellyttää.</li>
            </UL>
          </PolicySection>

          <PolicySection>
            <H2>8. Tietojen säilytysaika</H2>
            <P>Yhteydenottopyyntöjä säilytetään vain niin kauan kuin on tarpeen niiden käsittelyä ja niihin vastaamista varten. Asiakassuhteeseen liittyvää viestintää voidaan säilyttää asiakassuhteen keston ajan sekä kirjanpito-, sopimus- tai muun lakisääteisen velvoitteen edellyttämän ajan. Tarpeettomat tiedot poistetaan säännöllisesti.</P>
            <P>Tarkempi säilytysaika: <Fill>[Säilytysaika, esimerkiksi 12 kuukautta yhteydenoton käsittelystä]</Fill></P>
          </PolicySection>

          <PolicySection>
            <H2>9. Tietojen vastaanottajat ja palveluntarjoajat</H2>
            <P>Henkilötietoja voivat käsitellä:</P>
            <UL>
              <li>verkkosivuston ylläpitäjä</li>
              <li>Google, Google Apps Scriptin, Gmailin, Google Sheetsin ja reCAPTCHAn tarjoajana</li>
              <li>verkkosivuston hosting-palveluntarjoaja</li>
              <li>muut tekniset palveluntarjoajat vain silloin, kun se on välttämätöntä</li>
            </UL>
            <P>Henkilötietoja ei myydä kolmansille osapuolille.</P>
          </PolicySection>

          <PolicySection>
            <H2>10. Tietojen siirrot EU- ja ETA-alueen ulkopuolelle</H2>
            <P>Osa palveluntarjoajista, mukaan lukien Google, voi käsitellä tietoja EU- tai ETA-alueen ulkopuolella. Mahdolliset siirrot toteutetaan tietosuojalainsäädännön edellyttämällä tavalla, esimerkiksi käyttäen tietosuojan riittävyyttä koskevaa päätöstä, EU:n vakiosopimuslausekkeita tai muita lain sallimia suojatoimia.</P>
          </PolicySection>

          <PolicySection>
            <H2>11. Rekisteröidyn oikeudet</H2>
            <P>Sinulla on oikeus:</P>
            <UL>
              <li>saada pääsy omiin tietoihisi</li>
              <li>vaatia virheellisen tiedon oikaisemista</li>
              <li>vaatia tietojen poistamista</li>
              <li>vaatia käsittelyn rajoittamista</li>
              <li>vastustaa käsittelyä</li>
              <li>siirtää tiedot järjestelmästä toiseen, mikäli sovellettavissa</li>
              <li>peruuttaa antamasi suostumus, kun käsittely perustuu suostumukseen</li>
              <li>tehdä valitus tietosuojavaltuutetun toimistolle</li>
            </UL>
            <P>Tietosuojavaltuutetun toimisto: <PolicyLink href="https://tietosuoja.fi/">tietosuoja.fi</PolicyLink></P>
          </PolicySection>

          <PolicySection>
            <H2>12. Evästeet ja teknologiat</H2>
            <P>Google reCAPTCHA ja muut kolmannen osapuolen palvelut voivat käyttää evästeitä tai vastaavia tekniikoita. <Fill>[Linkki evästekäytäntöön / evästeasetuksiin, jos sivustolla on eväste-banneri]</Fill></P>
          </PolicySection>

          <PolicySection>
            <H2>13. Tietoturva</H2>
            <P>Käytämme kohtuullisia teknisiä ja organisatorisia toimenpiteitä henkilötietojen suojaamiseksi. Mikään internet-pohjainen palvelu ei kuitenkaan voi taata täydellistä tietoturvaa.</P>
          </PolicySection>

          <PolicySection>
            <H2>14. Tietosuojaselosteen muutokset</H2>
            <P>Tätä tietosuojaselostetta voidaan päivittää palveluiden, tietojenkäsittelykäytäntöjen tai lainsäädännön muuttuessa.</P>
            <P style={{ marginBottom: 0 }}>Viimeksi päivitetty: <Fill>[päivämäärä]</Fill></P>
          </PolicySection>

        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
