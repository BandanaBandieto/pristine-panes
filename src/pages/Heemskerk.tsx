import CityServicePage from "@/components/CityServicePage";

const data = {
  city: "Heemskerk",
  slug: "glasbewassing-heemskerk",
  intro:
    "Op zoek naar een betrouwbare glazenwasser in Heemskerk? Bij CrystalClear Glasbewassing zorgen we voor streeploze ramen bij woningen én bedrijven in heel Heemskerk en omgeving. Of u nu in het centrum, in Broekpolder of richting Castricummerweg woont: wij komen langs en laten uw glas weer stralen. Met osmosewater, professionele apparatuur en oog voor detail krijgt u het beste resultaat — zonder strepen, zonder chemicaliën.",
  nearby: ["Uitgeest", "Beverwijk", "Castricum", "Wijk aan Zee", "Velsen-Noord"],
  postcodes: "1960-1969",
  region: "Noord-Holland",
};

const Heemskerk = () => <CityServicePage data={data} />;
export default Heemskerk;
