import CityServicePage from "@/components/CityServicePage";

const data = {
  city: "Beverwijk",
  slug: "glasbewassing-beverwijk",
  intro:
    "Zoekt u een ervaren glazenwasser in Beverwijk? CrystalClear Glasbewassing helpt particulieren én bedrijven aan streeploos schone ramen — van woningen in de Wijkermeer tot winkels op de Breestraat en kantoren rondom de Bazaar. Met osmosewater en hoogwaardige apparatuur reinigen wij elk soort glas, ook op grote hoogte. Het resultaat: meer daglicht, een verzorgde uitstraling en een ontspannen gevoel dat het 'gewoon goed gedaan' is.",
  nearby: ["Heemskerk", "Wijk aan Zee", "Velsen-Noord", "IJmuiden", "Uitgeest"],
  postcodes: "1940-1949",
  region: "Noord-Holland",
};

const Beverwijk = () => <CityServicePage data={data} />;
export default Beverwijk;
