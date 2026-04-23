import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Calendar, ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
  title: string;
  description: string;
  slug: string;
  question: string;
  shortAnswer: string;
  date?: string;
  faq?: { q: string; a: string }[];
  children: ReactNode;
}

const ArticleLayout = ({
  title, description, slug, question, shortAnswer, date = "2025-01-15", faq, children,
}: ArticleLayoutProps) => {
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: question,
      description,
      author: { "@type": "Organization", name: "CrystalClear Glasbewassing" },
      publisher: { "@type": "Organization", name: "CrystalClear Glasbewassing" },
      datePublished: date,
      dateModified: date,
      mainEntityOfPage: `/blog/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
        { "@type": "ListItem", position: 3, name: question, item: `/blog/${slug}` },
      ],
    },
  ];
  if (faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <SiteLayout>
      <Seo title={title} description={description} jsonLd={jsonLd} />
      <article className="py-10 md:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <nav aria-label="Kruimelpad" className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight text-balance leading-[1.1]">
            {question}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>Bijgewerkt op {new Date(date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</time>
          </div>

          {/* Short answer block — for SEO + AI snippets */}
          <div className="mt-8 rounded-2xl bg-secondary/60 border border-border p-6 shadow-glass">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Kort antwoord</div>
            <p className="text-lg text-foreground leading-relaxed">{shortAnswer}</p>
          </div>

          {/* Body */}
          <div className="prose-article mt-10 space-y-6 text-foreground/90 leading-relaxed">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-smooth">
              <ArrowLeft className="mr-1 h-4 w-4" /> Terug naar alle artikelen
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
};

export default ArticleLayout;
