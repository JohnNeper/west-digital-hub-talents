import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arnaud K.",
    role: { en: "CTO, FinTech Startup — France", fr: "CTO, Startup FinTech — France" },
    text: {
      en: "West Digital Hub delivered our MVP in 8 weeks with exceptional quality. Their team understood our vision from day one and the communication was seamless throughout.",
      fr: "West Digital Hub a livré notre MVP en 8 semaines avec une qualité exceptionnelle. Leur équipe a compris notre vision dès le premier jour et la communication était fluide.",
    },
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: { en: "Founder, EdTech — Canada", fr: "Fondatrice, EdTech — Canada" },
    text: {
      en: "We outsourced our entire development team through WDH. The talent quality rivals what we'd find in Silicon Valley, at a fraction of the cost. Highly recommended.",
      fr: "Nous avons externalisé toute notre équipe de développement via WDH. La qualité des talents rivalise avec ce qu'on trouve dans la Silicon Valley, à une fraction du coût.",
    },
    rating: 5,
  },
  {
    name: "Jean-Pierre D.",
    role: { en: "CEO, AgriTech — Cameroon", fr: "PDG, AgriTech — Cameroun" },
    text: {
      en: "From consulting to deployment, WDH transformed our agricultural supply chain with a custom platform. Revenue increased 40% in the first quarter after launch.",
      fr: "Du conseil au déploiement, WDH a transformé notre chaîne d'approvisionnement agricole avec une plateforme sur mesure. Le chiffre d'affaires a augmenté de 40% au premier trimestre.",
    },
    rating: 5,
  },
  {
    name: "Fatima B.",
    role: { en: "Product Manager, HealthTech — Senegal", fr: "Product Manager, HealthTech — Sénégal" },
    text: {
      en: "Their bootcamp graduates joined our team and were productive from week one. The training quality at West Digital Hub Academy is world-class.",
      fr: "Les diplômés de leur bootcamp ont rejoint notre équipe et étaient productifs dès la première semaine. La qualité de la formation à West Digital Hub Academy est de classe mondiale.",
    },
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { lang } = useLang();

  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {lang === "en" ? "Client Stories" : "Témoignages Clients"}
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
            {lang === "en" ? "What Our Clients Say" : "Ce Que Disent Nos Clients"}
          </h2>
          <p className="text-muted-foreground">
            {lang === "en"
              ? "Trusted by startups and enterprises across 15+ countries"
              : "La confiance de startups et entreprises dans plus de 15 pays"}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={32} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6">
                  "{t.text[lang]}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role[lang]}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
