import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "wat-kost-glazenwasser",
    title: "Wat kost een glazenwasser in Nederland?",
    excerpt: "Een overzicht van gemiddelde tarieven, factoren die de prijs bepalen en waar je op moet letten bij een offerte.",
  },
  {
    slug: "hoe-vaak-ramen-laten-wassen",
    title: "Hoe vaak moet je ramen laten wassen?",
    excerpt: "Praktisch advies over de ideale frequentie voor woningen en bedrijven, afhankelijk van locatie en seizoen.",
  },
  {
    slug: "wat-is-osmose-glasbewassing",
    title: "Wat is osmose glasbewassing?",
    excerpt: "Uitleg over osmosewater, waarom het streeploos droogt en wanneer deze methode het beste werkt.",
  },
];

const BlogIndex = () => {
  const title = "Blog over glasbewassing | CrystalClear";
  const description = "Tips en uitleg over glasbewassing: kosten, frequentie, osmosewater en meer. Helder advies van een ervaren glazenwasser.";
  return (
    <SiteLayout>
      <Seo title={title} description={description} />
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium text-primary mb-6 shadow-glass">
            <BookOpen className="h-3.5 w-3.5 text-accent" /> Kennisbank
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary tracking-tight text-balance leading-[1.05]">
            Alles over glasbewassing — duidelijk uitgelegd.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Praktische antwoorden op de meest gestelde vragen over ramen wassen, glazenwassers en osmosewater.
          </p>

          <div className="mt-12 grid gap-5">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group block rounded-3xl bg-card p-7 border border-border/60 hover:border-accent/40 hover:-translate-y-0.5 transition-smooth shadow-glass"
              >
                <h2 className="font-display text-2xl font-semibold text-primary group-hover:text-accent transition-smooth">{p.title}</h2>
                <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
                  Lees artikel <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default BlogIndex;
