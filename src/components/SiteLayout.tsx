import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Droplets, ArrowRight, Phone, Mail, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-glass">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero shadow-glow">
                <Droplets className="h-4 w-4 text-primary-foreground" />
              </span>
              CrystalClear
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/70">
              <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
              <Link to="/glasbewassing-heemskerk" className="hover:text-primary transition-smooth">Heemskerk</Link>
              <Link to="/glasbewassing-uitgeest" className="hover:text-primary transition-smooth">Uitgeest</Link>
              <Link to="/glasbewassing-beverwijk" className="hover:text-primary transition-smooth">Beverwijk</Link>
            </div>
            <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90">
              <Link to="/#contact">Offerte</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-28">{children}</main>

      {/* CONTACT CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance leading-[1.05]">
              Vraag vandaag nog een <em className="bg-gradient-water bg-clip-text text-transparent not-italic">vrijblijvende offerte</em> aan.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Binnen 24 uur antwoord. Geen verplichtingen.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <a href="tel:+31000000000" className="group glass-panel rounded-2xl p-6 text-left hover:shadow-elevated transition-smooth shadow-glass">
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
              <a href="mailto:info@crystalclear.nl" className="group glass-panel rounded-2xl p-6 text-left hover:shadow-elevated transition-smooth shadow-glass">
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
            <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-hero text-primary-foreground hover:opacity-95 shadow-elevated h-12 px-7 text-base">
              <Link to="/#contact">Plan een afspraak <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display font-semibold text-primary mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-hero">
                <Droplets className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              CrystalClear Glasbewassing
            </Link>
            <p className="text-muted-foreground">Streeploos schone ramen voor particulieren en bedrijven in Noord-Holland.</p>
          </div>
          <div>
            <div className="font-semibold text-primary mb-3">Werkgebied</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/glasbewassing-heemskerk" className="hover:text-primary">Glasbewassing Heemskerk</Link></li>
              <li><Link to="/glasbewassing-uitgeest" className="hover:text-primary">Glasbewassing Uitgeest</Link></li>
              <li><Link to="/glasbewassing-beverwijk" className="hover:text-primary">Glasbewassing Beverwijk</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} CrystalClear Glasbewassing. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
