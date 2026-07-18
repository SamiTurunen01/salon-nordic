/* Salon Nordic — sample content (Finnish). Swap freely when adapting. */
import { SALON_IMG as IMG } from "./images.js";

export const SALON_DATA = {
  brand: "SALON NORDIC",
  tagline: "Pohjoismaista tyylikkyyttä Helsingin sydämessä.",
  nav: [
    { label: "Etusivu", href: "/" },
    { label: "Palvelut", href: "/palvelut" },
    { label: "Hinnasto", href: "/hinnasto" },
    { label: "Galleria", href: "/galleria" },
    { label: "Meistä", href: "/meista" },
    { label: "Yhteystiedot", href: "/yhteystiedot" },
  ],

  services: [
    { id: "leikkaus", title: "Leikkaus & viimeistely", image: IMG.service1, priceFrom: "alk. 55 €", duration: "45 MIN",
      description: "Henkilökohtainen leikkaus, pesu ja muotoilu. Lopputulos, joka istuu arkeen ja kasvaa kauniisti." },
    { id: "varjays", title: "Värjäys", image: IMG.service3, priceFrom: "alk. 95 €", duration: "120 MIN", badge: "Suosituin",
      description: "Räätälöity sävy juuri sinun ihollesi ja tyylillesi. Hellävaraiset, korkealaatuiset värit." },
    { id: "balayage", title: "Balayage & raidat", image: IMG.service2, priceFrom: "alk. 140 €", duration: "180 MIN",
      description: "Käsin maalatut, luonnolliset vaalennukset, jotka tuovat syvyyttä ja valoa hiuksiin." },
    { id: "hoito", title: "Hoidot & kiilto", image: IMG.service4, priceFrom: "alk. 45 €", duration: "30 MIN", badge: "Uutuus",
      description: "Syväravitsevat hoidot palauttavat kosteuden ja kiillon. Ihanteellinen värjäyksen rinnalle." },
    { id: "kampaus", title: "Juhlakampaukset", image: IMG.g3, priceFrom: "alk. 75 €", duration: "60 MIN",
      description: "Häihin, juhliin ja erityishetkiin. Suunnittelemme kampauksen, joka kestää koko illan." },
    { id: "parturi", title: "Parturipalvelut", image: IMG.g6, priceFrom: "alk. 39 €", duration: "30 MIN",
      description: "Tarkat leikkaukset ja parranajot ammattilaisen käsissä — rento ja huoliteltu lopputulos." },
  ],

  packages: [
    { name: "Leikkaus", price: "55", caption: "Pesu, leikkaus & muotoilu",
      items: ["Konsultaatio", "Pesu & hieronta", "Leikkaus", "Muotoilu & viimeistely"], cta: "Varaa aika" },
    { name: "Väri & leikkaus", price: "159", caption: "Suosituin yhdistelmämme", featured: true, badge: "Suosituin",
      items: ["Konsultaatio", "Värjäys", "Leikkaus & pesu", "Hoito & muotoilu"], cta: "Varaa aika" },
    { name: "Täysmuodonmuutos", price: "229", caption: "Balayage + hoito + kampaus",
      items: ["Laaja konsultaatio", "Balayage / vaalennus", "Sävytys & hoito", "Leikkaus & muotoilu"], cta: "Varaa aika" },
  ],

  priceList: [
    { group: "Leikkaukset", rows: [
      ["Naasten leikkaus & muotoilu", "55–75 €"],
      ["Miesten leikkaus", "39–49 €"],
      ["Lasten leikkaus (alle 12 v.)", "29 €"],
      ["Otsatukan rajaus", "15 €"],
    ]},
    { group: "Värit", rows: [
      ["Värjäys, koko hiukset", "95–130 €"],
      ["Raidat / balayage", "140–210 €"],
      ["Sävytys & kiilto", "65 €"],
      ["Juurikasvun värjäys", "79 €"],
    ]},
    { group: "Hoidot & kampaukset", rows: [
      ["Syväkosteuttava hoito", "45 €"],
      ["Olaplex-tehohoito", "59 €"],
      ["Juhlakampaus", "75–110 €"],
      ["Hääkampaus (sis. kokeilun)", "190 €"],
    ]},
  ],

  team: [
    { name: "Aino Virtanen", role: "Senior-kampaaja", image: IMG.team1, specialties: ["Vaalennukset", "Balayage", "Hääkampaukset"] },
    { name: "Eero Lahtinen", role: "Parturi-mestari", image: IMG.team2, specialties: ["Miesten leikkaukset", "Parranhoito"] },
    { name: "Saara Niemi", role: "Väriasiantuntija", image: IMG.team3, specialties: ["Värisuunnittelu", "Korjausvärjäys"] },
    { name: "Venla Korhonen", role: "Stylisti", image: IMG.team4, specialties: ["Leikkaukset", "Muotoilu", "Hoidot"] },
  ],

  gallery: [
    { image: IMG.g1, caption: "Balayage & raidat", ratio: "tall" },
    { image: IMG.g2, caption: "Juhlakampaus", ratio: "portrait" },
    { image: IMG.g3, caption: "Vaalennus", ratio: "tall" },
    { image: IMG.g4, caption: "Raidat", ratio: "portrait" },
    { image: IMG.g5, caption: "Balayage", ratio: "tall" },
    { image: IMG.g6, caption: "Leikkaus", ratio: "portrait" },
    { image: IMG.g7, caption: "Hääkampaus", ratio: "tall" },
    { image: IMG.g8, caption: "Muotoilu", ratio: "portrait" },
  ],

  contact: {
    address: ["Esimerkkikatu 12", "80100 Joensuu"],
    phone: "040 123 4567",
    email: "info@salonnordic.fi",
    hours: [["Ma–Pe", "9–20"], ["La", "9–16"], ["Su", "Suljettu"]],
  },

  social: [
    { name: "facebook", label: "Salon Nordic Facebookissa", handle: "Salon Nordic", href: "https://facebook.com/salonnordic" },
    { name: "instagram", label: "@salonnordic Instagramissa", handle: "@salonnordic", href: "https://instagram.com/salonnordic" },
  ],

  footerColumns: [
    { title: "Palvelut", items: [
      { label: "Leikkaus", href: "/palvelut" }, { label: "Värjäys", href: "/palvelut" },
      { label: "Balayage", href: "/palvelut" }, { label: "Hoidot", href: "/palvelut" } ] },
    { title: "Salon", items: [
      { label: "Meistä", href: "/meista" }, { label: "Galleria", href: "/galleria" },
      { label: "Hinnasto", href: "/hinnasto" }, { label: "Yhteystiedot", href: "/yhteystiedot" } ] },
  ],
};
