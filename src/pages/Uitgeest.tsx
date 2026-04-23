import CityServicePage from "@/components/CityServicePage";

const data = {
  city: "Uitgeest",
  slug: "glasbewassing-uitgeest",
  intro:
    "Een professionele glazenwasser in Uitgeest die u écht kunt vertrouwen — daar staan wij voor. CrystalClear Glasbewassing reinigt ramen, kozijnen en vensterbanken bij particulieren en bedrijven in heel Uitgeest. Van woningen aan de Geesterweg tot bedrijfspanden op De Trompet: wij zorgen voor een streeploos resultaat met osmosewater. Geen agressieve schoonmaakmiddelen, geen verrassingen op de factuur — gewoon eerlijk werk en glashelder resultaat.",
  nearby: ["Heemskerk", "Castricum", "Akersloot", "Limmen", "Krommenie"],
  postcodes: "1910-1911",
  region: "Noord-Holland",
};

const Uitgeest = () => <CityServicePage data={data} />;
export default Uitgeest;
