import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Building2, Home, ShieldCheck, Clock, BadgeEuro, HeartHandshake, Phone, Mail, ArrowRight, Check, MapPin, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-window.jpg";

const services = [
  {
    icon: Home,
    title: "Binnen- & Buitenreiniging",
    desc: "Volledige reiniging van al uw ramen, binnen én buiten, voor een optimaal resultaat.",
  },
  {
    icon: Sparkles,
    title: "Kozijnen & Vensterbanken",
    desc: "Grondige reiniging van kozijnen en vensterbanken, voor een complete frisse uitstraling.",
  },
  {
    icon: Building2,
    title: "Hoge & Moeilijk Bereikbare Ramen",
    desc: "Met telescopische osmose-systemen reinigen we tot grote hoogtes — veilig en efficiënt.",
  },
  {
    icon: Clock,
    title: "Periodiek Onderhoud",
    desc: "Vaste onderhoudsschema's voor woningen en bedrijfspanden. Altijd representatief.",
  },
];

const reasons = [
  { icon: HeartHandshake, title: "Klantgericht", desc: "Betrouwbare service, afgestemd op uw wensen." },
  { icon: ShieldCheck, title: "Volledig Verzekerd", desc: "Veiligheid en kwaliteit staan altijd voorop." },
  { icon: Clock, title: "Flexibele Afspraken", desc: "Plan op het moment dat ú het beste uitkomt." },
  { icon: BadgeEuro, title: "Eerlijke Prijzen", desc: "Transparant, zonder verborgen kosten." },
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
              CrystalClear
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/70">
              <a href="#diensten" className="hover:text-primary transition-smooth">Diensten</a>
              <a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a>
              <Link to="/glasbewassing-heemskerk" className="hover:text-primary transition-smooth">Werkgebied</Link>
              <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
            </div>
            <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90">
              <a href="#contact">Offerte aanvragen</a>
            </Button>
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
              <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium text-primary mb-6 shadow-glass">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                100% streeploos met osmosewater
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary text-balance leading-[1.05]">
                Streeploos schone ramen,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic bg-gradient-water bg-clip-text text-transparent">elke keer weer</span>
                </span>
                .
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
                {["Verzekerd", "Eerlijk geprijsd", "Flexibel inplanbaar"].map((t) => (
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
                  src={heroImage}
                  alt="Professionele glazenwasser reinigt grote glasgevel met osmosewater voor streeploos resultaat"
                  width={1536}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
                {/* Shine overlay */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-shine animate-shine" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl px-5 py-4 shadow-glass hidden md:flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero">
                  <Droplets className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-primary">Osmosewater</div>
                  <div className="text-xs text-muted-foreground">Geen chemicaliën</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section id="reviews" className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium text-primary mb-5 shadow-glass">
              <Star className="h-3.5 w-3.5 text-accent fill-accent" /> Google Reviews
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance">
              Wat onze klanten zeggen.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <span className="font-display text-lg font-semibold text-primary">5.0</span>
              <span className="text-sm text-muted-foreground">op basis van Google reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Linda V.",
                location: "Heemskerk",
                text: "Echt streeploze ramen, ook bij grote glaspartijen. Vriendelijk, op tijd en netjes gewerkt. Een aanrader!",
              },
              {
                name: "Mark B.",
                location: "Beverwijk",
                text: "Al maanden tevreden klant. Ramen blijven veel langer schoon en het ziet er fantastisch uit. Top service.",
              },
              {
                name: "Sandra K.",
                location: "Uitgeest",
                text: "Snel een offerte ontvangen en kort daarna ingepland. Resultaat is precies zoals beloofd: kraakhelder.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="relative rounded-3xl bg-card p-7 border border-border/60 shadow-glass hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              >
                <Quote className="absolute top-6 right-6 h-6 w-6 text-accent/30" />
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed text-sm">"{r.text}"</p>
                <div className="mt-5 pt-5 border-t border-border/60">
                  <div className="font-display font-semibold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 text-base border-primary/20 hover:bg-secondary">
              <a href="https://www.google.com/search?q=CrystalClear+Glasbewassing+reviews" target="_blank" rel="noopener noreferrer">
                Bekijk alle reviews op Google <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
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

      {/* OSMOSEWATER FEATURE */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-hero p-10 md:p-16 shadow-elevated">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-accent blur-3xl" />
              <div className="absolute bottom-10 right-20 h-60 w-60 rounded-full bg-primary-glow blur-3xl" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-10 items-center text-primary-foreground">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium mb-5 border border-primary-foreground/20">
                  <Droplets className="h-3.5 w-3.5" /> De CrystalClear methode
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.1]">
                  100% zuiver osmosewater. <em className="text-accent not-italic">Nul</em> chemicaliën.
                </h2>
                <p className="mt-5 text-primary-foreground/80 text-lg leading-relaxed">
                  Door alle mineralen uit het water te filteren, droogt het op zonder strepen of vlekken na te laten. Beter voor uw ramen, beter voor het milieu.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "100%", l: "Streeploos resultaat" },
                  { v: "0", l: "Agressieve middelen" },
                  { v: "20m+", l: "Werkhoogte" },
                  { v: "5★", l: "Klantbeoordelingen" },
                ].map((stat) => (
                  <div key={stat.l} className="rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 p-5">
                    <div className="font-display text-3xl md:text-4xl font-semibold text-accent">{stat.v}</div>
                    <div className="text-sm text-primary-foreground/80 mt-1">{stat.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="waarom" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Waarom CrystalClear</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance">
              De verschillen die u meteen ziet.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card p-8 hover:bg-secondary/50 transition-smooth">
                <r.icon className="h-7 w-7 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-primary mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Ons werkgebied</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance">
              Lokale glazenwasser in uw regio.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Bekijk de pagina voor uw plaats voor specifieke informatie en lokale dienstverlening.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { name: "Heemskerk", to: "/glasbewassing-heemskerk", desc: "Glasbewassing voor woningen en bedrijven in heel Heemskerk." },
              { name: "Uitgeest", to: "/glasbewassing-uitgeest", desc: "Streeploos schone ramen in Uitgeest en omliggende dorpen." },
              { name: "Beverwijk", to: "/glasbewassing-beverwijk", desc: "Professionele glazenwasser actief in heel Beverwijk." },
            ].map((c) => (
              <Link
                key={c.name}
                to={c.to}
                className="group rounded-3xl bg-card p-7 border border-border/60 hover:border-accent/40 hover:-translate-y-1 transition-smooth shadow-glass hover:shadow-elevated"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-glass border border-accent/20 mb-5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Glasbewassing {c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:text-primary transition-smooth">
                  Bekijk pagina <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] bg-secondary/60 border border-border p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Kennisbank</div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
                  Antwoord op de meest gestelde vragen.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Van tarieven tot frequenties — lees onze uitgebreide artikelen over glasbewassing.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { to: "/blog/wat-kost-glazenwasser", title: "Wat kost een glazenwasser in Nederland?" },
                  { to: "/blog/hoe-vaak-ramen-laten-wassen", title: "Hoe vaak moet je ramen laten wassen?" },
                  { to: "/blog/wat-is-osmose-glasbewassing", title: "Wat is osmose glasbewassing?" },
                ].map((p) => (
                  <Link key={p.to} to={p.to} className="group flex items-center justify-between gap-4 rounded-2xl bg-card p-4 border border-border/60 hover:border-accent/40 transition-smooth">
                    <span className="font-medium text-primary group-hover:text-accent transition-smooth">{p.title}</span>
                    <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary tracking-tight text-balance leading-[1.05]">
              Klaar voor ramen die <em className="bg-gradient-water bg-clip-text text-transparent not-italic">stralen</em>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Vraag vandaag nog een vrijblijvende offerte aan of plan eenvoudig online een afspraak.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <a
                href="tel:+31000000000"
                className="group glass-panel rounded-2xl p-6 text-left hover:shadow-elevated transition-smooth shadow-glass"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bel ons</div>
                </div>
                <div className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-smooth">
                  [Telefoonnummer]
                </div>
              </a>
              <a
                href="mailto:info@crystalclear.nl"
                className="group glass-panel rounded-2xl p-6 text-left hover:shadow-elevated transition-smooth shadow-glass"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mail ons</div>
                </div>
                <div className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-smooth">
                  [E-mailadres]
                </div>
              </a>
            </div>

            <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-hero text-primary-foreground hover:opacity-95 shadow-elevated h-13 px-8 text-base">
              <a href="#contact">Plan een afspraak <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
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
            CrystalClear Glasbewassing
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CrystalClear. Streeploos schone ramen, elke keer weer.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
