import { Button } from “@/components/ui/button”;
import { Sheet, SheetContent, SheetTrigger, SheetClose } from “@/components/ui/sheet”;
import { Sparkles, Droplets, Building2, Home, ShieldCheck, Clock, BadgeEuro, HeartHandshake, Phone, Mail, ArrowRight, Check, MapPin, Star, Menu } from “lucide-react”;
import { Link } from “react-router-dom”;
import heroImage from “@/assets/hero-window.jpg”;
import heroImage768 from “@/assets/hero-window-768.webp”;
import heroImage1280 from “@/assets/hero-window-1280.webp”;
import heroImage1536 from “@/assets/hero-window-1536.webp”;
import { business } from “@/business”;

const services = [
{
icon: Home,
title: “Binnen- & Buitenreiniging”,
desc: “Volledige reiniging van al uw ramen, binnen én buiten, voor een optimaal resultaat.”,
},
{
icon: Sparkles,
title: “Kozijnen & Vensterbanken”,
desc: “Grondige reiniging van kozijnen en vensterbanken, voor een complete frisse uitstraling.”,
},
{
icon: Building2,
title: “Hoge & Moeilijk Bereikbare Ramen”,
desc: “Met telescopische osmose-systemen reinigen we tot grote hoogtes — veilig en efficiënt.”,
},
{
icon: Clock,
title: “Periodiek Onderhoud”,
desc: “Vaste onderhoudsschema’s voor woningen en bedrijfspanden. Altijd representatief.”,
},
];

const reasons = [
{ icon: HeartHandshake, title: “Klantgericht”, desc: “Betrouwbare service, afgestemd op uw wensen.” },
{ icon: ShieldCheck, title: “Volledig Verzekerd”, desc: “Veiligheid en kwaliteit staan altijd voorop.” },
{ icon: Clock, title: “Flexibele Afspraken”, desc: “Plan op het moment dat ú het beste uitkomt.” },
{ icon: BadgeEuro, title: “Eerlijke Prijzen”, desc: “Transparant, zonder verborgen kosten.” },
];

const Index = () => {
return (
<div className="min-h-screen bg-background overflow-x-hidden">
{/* NAV */}
<header className="fixed top-0 inset-x-0 z-50">
<div className="container mx-auto px-6 py-4">
<nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-glass">
<a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
<span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero shadow-glow">
<Droplets className="h-4 w-4 text-primary-foreground" />
</span>
{business.name}
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/70">
<a href="#diensten" className="hover:text-primary transition-smooth">Diensten</a>
<a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a>
<a href="#werkgebied" className="hover:text-primary transition-smooth">Locaties</a>
<a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
</div>
<Button asChild size="sm" className="hidden md:inline-flex rounded-full bg-primary hover:bg-primary/90">
<a href="#contact">Offerte aanvragen</a>
</Button>

```
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
            >
              <Menu className="h-4 w-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] max-w-sm bg-background border-l border-border p-0">
            <div className="flex flex-col h-full p-6">
              <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-primary mb-10">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero shadow-glow">
                  <Droplets className="h-4 w-4 text-primary-foreground" />
                </span>
                {business.name}
              </Link>
              <nav className="flex flex-col gap-1 text-base font-medium">
                <SheetClose asChild>
                  <a href="#diensten" className="py-3 px-3 -mx-3 rounded-xl text-foreground/80 hover:bg-secondary hover:text-primary transition-smooth">Diensten</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#reviews" className="py-3 px-3 -mx-3 rounded-xl text-foreground/80 hover:bg-secondary hover:text-primary transition-smooth">Reviews</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#werkgebied" className="py-3 px-3 -mx-3 rounded-xl text-foreground/80 hover:bg-secondary hover:text-primary transition-smooth">Locaties</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="py-3 px-3 -mx-3 rounded-xl text-foreground/80 hover:bg-secondary hover:text-primary transition-smooth">Contact</a>
                </SheetClose>
              </nav>
              <div className="mt-auto pt-8">
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full rounded-full bg-gradient-hero text-primary-foreground hover:opacity-95 shadow-elevated">
                    <a href="#contact">Offerte aanvragen <ArrowRight className="ml-1 h-4 w-4" /></a>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  </header>

  {/* HERO */}
  <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
    {/* Decorative water drops */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-32 left-[8%] h-3 w-3 rounded-full bg-accent/40 animate-drip" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-[12%] h-2 w-2 rounded-full bg-primary-glow/50 animate-drip" style={{ animationDelay: "1s" }} />
      <div className="absolute top-64 left-[20%] h-2 w-2 rounded-full bg-accent/30 animate-drip" style={{ animationDelay: "2s" }} />
    </div>

    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary text-balance leading-[1.05]">
            Streeploos schone ramen, <em className="not-italic font-semibold">elke keer weer</em>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Hoogwaardige glasbewassing voor particulieren en bedrijven. Méér natuurlijk licht, een frissere uitstraling — zonder agressieve schoonmaakmiddelen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-hero text-primary-foreground hover:opacity-95 shadow-elevated h-12 px-7 text-base">
              <a href="#contact">Vrijblijvende offerte <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 text-base border-primary/20 hover:bg-secondary">
              <a href="#diensten">Bekijk diensten</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Eerlijk geprijsd", "Flexibel inplanbaar"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-accent" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-gradient-hero rounded-[2rem] blur-2xl opacity-30" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elevated animate-float">
            <img
              src={heroImage768}
              srcSet={`${heroImage768} 768w, ${heroImage1280} 1280w, ${heroImage1536} 1536w`}
              sizes="(max-width: 1024px) 92vw, 640px"
              alt={`Professionele glasbewassing door ${business.name}`}
              width={1536}
              height={1024}
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority is valid HTML but missing from React types in some versions
              fetchpriority="high"
              className="w-full h-auto object-cover"
            />
            {/* Shine overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-shine animate-shine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* WHY US – compact strip */}
  <section id="waarom" className="py-10 md:py-12 border-y border-border/60 bg-secondary/30">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex items-start gap-3">
            <r.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <div className="font-display text-sm font-semibold text-primary leading-tight">{r.title}</div>
              <div className="text-xs text-muted-foreground leading-snug mt-0.5">{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* GOOGLE REVIEWS */}
  <section id="reviews" className="py-10 md:py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 text-accent fill-accent" />
            ))}
          </div>
          <span className="font-display text-base font-semibold text-primary">5.0</span>
          <span className="text-xs text-muted-foreground">Google Reviews</span>
        </div>
        <a
          href={business.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:text-primary inline-flex items-center transition-smooth"
        >
          Bekijk alle reviews <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {business.reviews.map((r) => (
          <div key={r.name} className="rounded-2xl bg-card p-4 border border-border/60 shadow-glass">
            <div className="flex items-center gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-foreground/85 leading-snug text-sm">"{r.text}"</p>
            <div className="mt-3 text-xs text-muted-foreground">
              <span className="font-semibold text-primary">{r.name}</span> · {r.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* SERVICES */}
  <section id="diensten" className="py-20 md:py-28 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Onze diensten</div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance">
          Gespecialiseerd in elk soort glas.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Van knusse woonkamerramen tot imposante kantoorgevels — wij verzorgen het complete plaatje.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative rounded-3xl bg-card p-7 border border-border/60 hover:border-accent/40 hover:-translate-y-1 transition-smooth shadow-glass hover:shadow-elevated"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-water rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-smooth" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-glass border border-accent/20 mb-5">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* WERKGEBIED */}
  <section id="werkgebied" className="py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Ons werkgebied</div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance">
          Lokale glazenwasser in uw regio.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Wij zijn actief in heel {business.region} en omstreken — neem contact op voor uw locatie.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {business.cities.map((c) => (
          <div
            key={c.name}
            className="rounded-3xl bg-card p-7 border border-border/60 shadow-glass"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-glass border border-accent/20 mb-5">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-2">Glasbewassing {c.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CONTACT CTA */}
  <section id="contact" className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary tracking-tight text-balance leading-[1.05]">
          Klaar voor ramen die <em className="not-italic font-semibold">stralen</em>?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Vraag vandaag nog een vrijblijvende offerte aan of plan eenvoudig online een afspraak.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={`tel:${business.phone}`}
            className="group glass-panel rounded-2xl p-6 text-left hover:shadow-elevated transition-smooth shadow-glass"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bel ons</div>
            </div>
            <div className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-smooth">
              {business.phoneDisplay}
            </div>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="group glass-panel rounded-2xl p-6 text-left hover:shadow-elevated transition-smooth shadow-glass"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mail ons</div>
            </div>
            <div className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-smooth">
              {business.emailDisplay}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-display font-semibold text-primary">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-hero">
          <Droplets className="h-3.5 w-3.5 text-primary-foreground" />
        </span>
        {business.name} Glasbewassing
      </div>
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {business.name}. {business.footerTagline}
      </div>
    </div>
  </footer>
</div>
```

);
};

export default Index;