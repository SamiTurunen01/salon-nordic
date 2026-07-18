import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { GalleryGrid } from "../components/salon/GalleryGrid.jsx";
import { SALON_DATA } from "../data/salonData.js";

export default function Gallery() {
  const D = SALON_DATA;
  return (
    <main>
      <PageHero eyebrow="Galleria" title="Kädenjälkemme"
        lead="Selaa leikkauksia, värjäyksiä ja kampauksia — inspiroidu seuraavaan käyntiisi." />
      <Section>
        <Reveal>
          <GalleryGrid columns={4} items={D.gallery} />
        </Reveal>
      </Section>
      <CtaBand />
    </main>
  );
}
