import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const faq = [
  { q: "Wat is een gemiddeld uurtarief van een glazenwasser?", a: "In Nederland ligt het uurtarief van een glazenwasser meestal tussen €35 en €55 exclusief btw. Veel bedrijven werken liever met een vaste prijs per beurt." },
  { q: "Is glasbewassing aftrekbaar via een dienstverleningscheque?", a: "Nee, in Nederland is glasbewassing niet aftrekbaar via een vergelijkbare regeling als de Belgische dienstencheques. Voor zakelijke klanten zijn de kosten wel volledig aftrekbaar als bedrijfskosten." },
  { q: "Wat is goedkoper: zelf doen of een glazenwasser inhuren?", a: "Voor begane grond ramen kun je het zelf doen. Bij hoge of grote oppervlakken is een glazenwasser vaak voordeliger als je tijd, materiaal en risico meerekent." },
];

const Post = () => (
  <ArticleLayout
    slug="wat-kost-glazenwasser"
    title="Wat kost een glazenwasser in Nederland? | Tarieven 2025"
    description="Wat kost een glazenwasser in Nederland? Bekijk gemiddelde prijzen per uur, per beurt en per type woning. Inclusief tips voor een eerlijke offerte."
    question="Wat kost een glazenwasser in Nederland?"
    shortAnswer="Een glazenwasser in Nederland kost gemiddeld €35 tot €55 per uur, of €25 tot €60 per beurt voor een gemiddelde woning. De prijs hangt af van het aantal ramen, de bereikbaarheid, de frequentie en uw locatie. Voor bedrijven gelden vaak afwijkende tarieven op basis van een onderhoudscontract."
    faq={faq}
  >
    <h2>Wat bepaalt de prijs van een glazenwasser?</h2>
    <p>
      Wie op zoek gaat naar een glazenwasser komt al snel verschillende prijzen tegen. Dat is logisch, want geen woning of pand is hetzelfde. De kosten voor glasbewassing worden vrijwel altijd berekend op basis van vier factoren: het aantal ramen, de bereikbaarheid, de frequentie en de regio waarin u woont.
    </p>
    <p>
      Een eenvoudige tussenwoning met standaard ramen op de begane grond en eerste verdieping is veel sneller schoongemaakt dan een vrijstaande villa met grote raampartijen, een serre en dakramen. Hoe meer tijd en materiaal nodig is, hoe hoger de prijs.
    </p>

    <h2>Gemiddelde tarieven voor glasbewassing</h2>
    <p>
      Hieronder vindt u indicatieve tarieven die in 2025 gangbaar zijn in Nederland. Houd er rekening mee dat dit richtprijzen zijn — een offerte op maat geeft altijd het beste beeld.
    </p>
    <ul>
      <li><strong>Tussenwoning</strong>: ongeveer €25 tot €40 per beurt (alleen buitenzijde).</li>
      <li><strong>Hoekwoning of 2-onder-1-kap</strong>: ongeveer €35 tot €55 per beurt.</li>
      <li><strong>Vrijstaande woning</strong>: vanaf €50 tot €90 per beurt, afhankelijk van grootte.</li>
      <li><strong>Appartement</strong>: vaak €20 tot €35 per beurt, soms via de VvE geregeld.</li>
      <li><strong>Uurtarief glazenwasser</strong>: gemiddeld €35 tot €55 exclusief btw.</li>
      <li><strong>Binnenzijde meereinigen</strong>: meestal 50–100% bovenop het buitentarief.</li>
    </ul>

    <h2>Welke factoren beïnvloeden de prijs?</h2>
    <h3>1. Aantal en formaat van de ramen</h3>
    <p>
      Sommige glazenwassers rekenen per raam, anderen per beurt of per uur. Grote glasoppervlakken (zoals schuifpuien of erkers) tellen daarbij meestal voor meerdere "ramen".
    </p>
    <h3>2. Bereikbaarheid</h3>
    <p>
      Hoge ramen, dakkapellen of ramen boven een serre vragen om extra apparatuur, zoals telescopische osmosesteel of een hoogwerker. Dat verhoogt de kosten. Goed bereikbare ramen op begane grond zijn juist sneller en dus goedkoper.
    </p>
    <h3>3. Frequentie</h3>
    <p>
      Klanten met een vast onderhoudscontract (bijvoorbeeld om de 4, 6 of 8 weken) betalen per beurt vaak minder dan een eenmalige opdracht. De glazenwasser kan dan efficiënter werken en hoeft minder voorbereidingstijd te rekenen.
    </p>
    <h3>4. Locatie en regio</h3>
    <p>
      In de Randstad liggen tarieven gemiddeld iets hoger dan in landelijke gebieden. Ook de bereikbaarheid van uw woning (parkeren, afstand tot de weg) speelt soms mee.
    </p>
    <h3>5. Extra werkzaamheden</h3>
    <p>
      Het meereinigen van kozijnen, vensterbanken of een dakraam wordt meestal apart berekend. Hetzelfde geldt voor het verwijderen van hardnekkig vuil zoals cementsluier na een verbouwing.
    </p>

    <h2>Eenmalige beurt of vast contract?</h2>
    <p>
      Een eenmalige glasbewassing is doorgaans duurder per beurt dan periodiek onderhoud. Veel particulieren kiezen daarom voor een vast schema, bijvoorbeeld eens per 6 of 8 weken. Voor bedrijven is een onderhoudscontract bijna altijd voordeliger en zorgt het ervoor dat het pand er continu verzorgd uitziet.
    </p>

    <h2>Praktisch advies bij het vergelijken van offertes</h2>
    <ul>
      <li>Vraag minimaal twee offertes op om een goed gevoel voor de marktprijs te krijgen.</li>
      <li>Let op of er <strong>btw</strong> in- of exclusief is vermeld (21% maakt veel uit).</li>
      <li>Controleer of <strong>kozijnen en vensterbanken</strong> inbegrepen zijn.</li>
      <li>Vraag of er gewerkt wordt met <strong>osmosewater</strong> — dat is bepalend voor het eindresultaat.</li>
      <li>Kies een glazenwasser die <strong>verzekerd</strong> is voor schade en werken op hoogte.</li>
      <li>Lees online beoordelingen van andere klanten in uw regio.</li>
    </ul>

    <h2>Glasbewassing in Heemskerk, Uitgeest en Beverwijk</h2>
    <p>
      Bent u op zoek naar een betrouwbare glazenwasser in Noord-Holland? CrystalClear Glasbewassing werkt in onder andere{" "}
      <Link to="/glasbewassing-heemskerk">Heemskerk</Link>,{" "}
      <Link to="/glasbewassing-uitgeest">Uitgeest</Link> en{" "}
      <Link to="/glasbewassing-beverwijk">Beverwijk</Link>. Wij bieden vaste prijzen per beurt, werken met osmosewater en zijn volledig verzekerd.
    </p>

    <h2>Conclusie</h2>
    <p>
      De prijs van een glazenwasser in Nederland ligt voor de meeste woningen tussen €25 en €90 per beurt, met een gemiddeld uurtarief van €35 tot €55. De exacte kosten hangen af van het type woning, de bereikbaarheid en de frequentie. Door meerdere offertes te vergelijken en goed te letten op wat wel en niet inbegrepen is, voorkomt u verrassingen.
    </p>
    <p><strong>Wil je weten wat het in jouw situatie kost? Vraag een vrijblijvende offerte aan.</strong></p>
  </ArticleLayout>
);

export default Post;
