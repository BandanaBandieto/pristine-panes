import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home, Building2, ShieldCheck, Sparkles, Droplets, MapPin, Phone,
  CheckCircle2, ArrowRight, Star, Calendar, Wrench
} from "lucide-react";

export interface CityData {
  city: string;
  slug: string;
  intro: string;
  nearby: string[];
  postcodes: string;
  region: string;
}

const steps = [
  { icon: Phone, title: "1. Aanvraag & offerte", desc: "U neemt contact op. Binnen 24 uur ontvangt u een heldere prijsopgave op maat." },
  { icon: Calendar, title: "2. Inplannen op uw moment", desc: "Wij plannen de glasbewassing op een dag en tijd die u het beste schikt." },
  { icon: Wrench, title: "3. Reiniging met osmosewater", desc: "Onze glazenwasser reinigt al het glas streeploos, met professionele apparatuur." },
  { icon: CheckCircle2, title: "4. Controle & oplevering", desc: "We lopen het werk samen na. Pas tevreden? Dan zit ons werk er op." },
];

const CityServicePage = ({ data }: { data: CityData }) => {
  const { city, slug, intro, nearby, postcodes, region } = data;
  const title = `Glasbewassing ${city} | Glazenwasser CrystalClear`;
  const description = `Professionele glasbewassing in ${city}. Streeploze ramen voor woningen en bedrijven met osmosewater. Vraag vandaag een vrijblijvende offerte aan.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `CrystalClear Glasbewassing ${city}`,
      description,
      areaServed: [city, ...nearby],
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: region,
        postalCode: postcodes,
        addressCountry: "NL",
      },
      telephone: "[Telefoonnummer]",
      url: `${typeof window !== "undefined" ? window.location.origin : ""}/${slug}`,
      priceRange: "€€",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Glasbewassing",
      provider: { "@type": "LocalBusiness", name: "CrystalClear Glasbewassing" },
      areaServed: { "@type": "City", name: city },
      name: `Glasbewassing ${city}`,
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: `Glasbewassing ${city}`, item: `/${slug}` },
      ],
    },
  ];

  return (
    <SiteLayout>
      <Seo title={title} description={description} jsonLd={jsonLd} />

      {/* HERO */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container mx-auto px-6">
          <nav aria-label="Kruimelpad" className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Glasbewassing {city}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium text-primary mb-6 shadow-glass">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Lokale glazenwasser actief in {city}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-primary text-balance leading-[1.05]">
              Glasbewassing in {city} – Professionele en Streeploze Ramen
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">{intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-hero text-primary-foreground hover:opacity-95 shadow-elevated h-12 px-7 text-base">
                <Link to="/#contact">Vrijblijvende offerte <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 text-base border-primary/20 hover:bg-secondary">
                <a href="tel:+31000000000"><Phone className="mr-2 h-4 w-4" /> Direct bellen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICULIER */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-glass border border-accent/20 mb-5">
              <Home className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
              Particuliere glasbewassing in {city}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Of u nu in een rijtjeshuis, vrijstaande woning of appartement woont in {city}: schone ramen maken een wereld van verschil. Meer daglicht in huis, een verzorgde uitstraling vanaf de straat en een prettiger uitzicht. Onze glazenwasser komt op een vast moment langs of op afspraak — zo vaak als ú wilt.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Reiniging van ramen aan binnen- en buitenzijde",
                "Kozijnen en vensterbanken meegenomen op verzoek",
                "Ook hoge en moeilijk bereikbare ramen",
                "Vaste prijs per beurt, geen verrassingen achteraf",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8 shadow-glass">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-glass border border-accent/20 mb-5">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
              Zakelijke glasbewassing
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Voor kantoren, winkels, horeca, scholen en bedrijfspanden in {city} verzorgen wij periodieke glasbewassing met vaste schema's. Een representatieve uitstraling is cruciaal voor uw klanten en medewerkers — wij zorgen dat uw glas er altijd onberispelijk uitziet.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Kantoren, winkels, showrooms en horeca",
                "Periodiek onderhoudscontract op maat",
                "Werk buiten openingstijden mogelijk",
                "Volledig verzekerd, VCA-bewust werken",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Waarom CrystalClear</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
              Waarom inwoners van {city} voor ons kiezen
            </h2>
            <p className="mt-4 text-muted-foreground">
              Een betrouwbare glazenwasser in {city} maakt het verschil tussen 'redelijk schoon' en écht streeploos. Dit is wat klanten in onze regio waarderen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {[
              { icon: ShieldCheck, title: "Volledig verzekerd", desc: "Werken op hoogte met de juiste certificering en aansprakelijkheidsverzekering." },
              { icon: Sparkles, title: "Streeploos resultaat", desc: "Door osmosewater drogen ramen vlekvrij op — gegarandeerd." },
              { icon: Star, title: "Lokale reputatie", desc: `Goede beoordelingen van klanten in ${city} en omgeving.` },
              { icon: Droplets, title: "Milieubewust", desc: "Geen agressieve schoonmaakmiddelen, alleen zuiver water." },
            ].map((r) => (
              <div key={r.title} className="bg-card p-7 hover:bg-secondary/50 transition-smooth">
                <r.icon className="h-7 w-7 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] bg-gradient-hero p-10 md:p-14 text-primary-foreground shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium mb-5 border border-primary-foreground/20">
                <MapPin className="h-3.5 w-3.5" /> Ons werkgebied
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance leading-[1.1]">
                Glazenwasser in {city} en omliggende gemeenten
              </h2>
              <p className="mt-5 text-primary-foreground/85 text-lg leading-relaxed">
                Naast {city} zijn wij actief in {nearby.slice(0, -1).join(", ")} en {nearby.slice(-1)}. Zit uw woning of bedrijfspand binnen onze regio? Dan komen wij graag langs voor een vrijblijvende kennismaking en offerte.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {nearby.map((c) => {
                  const knownSlugs: Record<string, string> = {
                    Heemskerk: "/glasbewassing-heemskerk",
                    Uitgeest: "/glasbewassing-uitgeest",
                    Beverwijk: "/glasbewassing-beverwijk",
                  };
                  const link = knownSlugs[c];
                  const cls = "rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur border border-primary-foreground/20 px-4 py-1.5 text-sm transition-smooth";
                  return link ? (
                    <Link key={c} to={link} className={cls}>{c}</Link>
                  ) : (
                    <span key={c} className={cls}>{c}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Onze werkwijze</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
              Zo verloopt de glasbewassing — stap voor stap
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.title} className="rounded-3xl bg-card p-7 border border-border/60 hover:border-accent/40 transition-smooth shadow-glass">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-glass border border-accent/20 mb-5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CityServicePage;
