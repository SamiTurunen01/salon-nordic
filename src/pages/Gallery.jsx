import { Section } from "../components/layout/Section.jsx";
import { Reveal } from "../components/layout/Reveal.jsx";
import { PageHero } from "../components/layout/PageHero.jsx";
import { CtaBand } from "../components/layout/CtaBand.jsx";
import { GalleryGrid } from "../components/salon/GalleryGrid.jsx";
import { GALLERY_ITEMS } from "../data/gallery.js";

export default function Gallery() {
  return (
    <main>
      <PageHero eyebrow="Galleria" title="Kädenjälkemme"
        lead="Selaa leikkauksia, värjäyksiä ja kampauksia — inspiroidu seuraavaan käyntiisi." />
      <Section>
        <Reveal>
          <GalleryGrid columns={4} items={GALLERY_ITEMS} />
        </Reveal>
      </Section>
      <CtaBand />
    </main>
  );
}
