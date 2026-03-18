import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Star, Quote, Linkedin, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Arnaud Kenfack",
    avatar: "AK",
    role: { en: "CTO, FinTech Startup — France", fr: "CTO, Startup FinTech — France" },
    company: "PayFlow Africa",
    linkedin: "https://linkedin.com",
    text: {
      en: "West Digital Hub delivered our MVP in 8 weeks with exceptional quality. Their team understood our vision from day one and the communication was seamless throughout. We saved over 50% compared to European agencies.",
      fr: "West Digital Hub a livré notre MVP en 8 semaines avec une qualité exceptionnelle. Leur équipe a compris notre vision dès le premier jour et la communication était fluide. Nous avons économisé plus de 50% par rapport aux agences européennes.",
    },
    rating: 5,
    metric: { value: "50%", label: { en: "cost savings", fr: "d'économies" } },
  },
  {
    name: "Sarah Mitchell",
    avatar: "SM",
    role: { en: "Founder & CEO, EdTech — Canada", fr: "Fondatrice & CEO, EdTech — Canada" },
    company: "LearnBridge",
    linkedin: "https://linkedin.com",
    text: {
      en: "We outsourced our entire development team through WDH. The talent quality rivals what we'd find in Silicon Valley, at a fraction of the cost. They've become a true extension of our team.",
      fr: "Nous avons externalisé toute notre équipe de développement via WDH. La qualité des talents rivalise avec ce qu'on trouve dans la Silicon Valley, à une fraction du coût. Ils sont devenus une vraie extension de notre équipe.",
    },
    rating: 5,
    metric: { value: "3x", label: { en: "faster delivery", fr: "plus rapide" } },
  },
  {
    name: "Jean-Pierre Djoumessi",
    avatar: "JP",
    role: { en: "CEO, AgriTech Enterprise — Cameroon", fr: "PDG, Entreprise AgriTech — Cameroun" },
    company: "AgroConnect",
    linkedin: "https://linkedin.com",
    text: {
      en: "From consulting to deployment, WDH transformed our agricultural supply chain with a custom platform. Revenue increased 40% in the first quarter after launch. Truly transformative.",
      fr: "Du conseil au déploiement, WDH a transformé notre chaîne d'approvisionnement agricole avec une plateforme sur mesure. Le chiffre d'affaires a augmenté de 40% au premier trimestre. Véritablement transformateur.",
    },
    rating: 5,
    metric: { value: "+40%", label: { en: "revenue growth", fr: "croissance CA" } },
  },
  {
    name: "Fatima Bah",
    avatar: "FB",
    role: { en: "Product Manager, HealthTech — Senegal", fr: "Product Manager, HealthTech — Sénégal" },
    company: "MediLink West Africa",
    linkedin: "https://linkedin.com",
    text: {
      en: "Their bootcamp graduates joined our team and were productive from week one. The training quality at WDH Academy is world-class. We've hired 5 developers from their program.",
      fr: "Les diplômés de leur bootcamp ont rejoint notre équipe et étaient productifs dès la première semaine. La qualité de la formation à WDH Academy est de classe mondiale. Nous avons recruté 5 développeurs de leur programme.",
    },
    rating: 5,
    metric: { value: "5", label: { en: "developers hired", fr: "développeurs recrutés" } },
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
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={32} />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6">
                  "{testimonial.text[lang]}"
                </p>

                {/* Impact metric */}
                <div className="mb-5 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 flex items-center gap-3">
                  <span className="text-2xl font-bold font-heading text-primary">{testimonial.metric.value}</span>
                  <span className="text-xs text-muted-foreground">{testimonial.metric.label[lang]}</span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role[lang]}</p>
                      <p className="text-xs font-medium text-primary/70">{testimonial.company}</p>
                    </div>
                  </div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/50 hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={`${testimonial.name} LinkedIn`}
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}