import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DollarSign, Shield, Settings, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: DollarSign,
    title: { en: "Best Value for Money", fr: "Meilleure Rentabilité" },
    desc: {
      en: "Save 40-60% on development costs without compromising quality. Competitive rates with world-class results.",
      fr: "Économisez 40-60% sur les coûts de développement sans compromettre la qualité. Des tarifs compétitifs avec des résultats de classe mondiale.",
    },
    gradient: "from-emerald-500/10 to-green-500/10 dark:from-emerald-500/15 dark:to-green-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Shield,
    title: { en: "High-Quality IT Services", fr: "Services IT de Haute Qualité" },
    desc: {
      en: "Certified engineers, rigorous testing, and industry best practices on every project we deliver.",
      fr: "Ingénieurs certifiés, tests rigoureux et meilleures pratiques de l'industrie sur chaque projet que nous livrons.",
    },
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Settings,
    title: { en: "Contextualized Software", fr: "Logiciels Contextualisés" },
    desc: {
      en: "Custom-built solutions tailored to your specific needs, market context, and business goals.",
      fr: "Solutions sur mesure adaptées à vos besoins spécifiques, votre contexte de marché et vos objectifs business.",
    },
    gradient: "from-amber-500/10 to-yellow-500/10 dark:from-amber-500/15 dark:to-yellow-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Headphones,
    title: { en: "IT Assistance & Fast Support", fr: "Assistance IT & Support Rapide" },
    desc: {
      en: "Dedicated project manager and responsive support channels for continuous assistance and quick issue resolution.",
      fr: "Chef de projet dédié et canaux de support réactifs pour une assistance continue et une résolution rapide des problèmes.",
    },
    gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export function WhyUsSection() {
  const { lang } = useLang();

  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {lang === "en" ? "Our Edge" : "Notre Avantage"}
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            {lang === "en" ? "Why Work With Us" : "Pourquoi Travailler Avec Nous"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {lang === "en"
              ? "We combine expertise, competitive pricing, and a deep understanding of your context to deliver exceptional results."
              : "Nous combinons expertise, tarifs compétitifs et une compréhension profonde de votre contexte pour des résultats exceptionnels."}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-2xl bg-gradient-to-br ${item.gradient} border border-border/50 p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full`}
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-card/80 border border-border/50">
                  <item.icon className={item.iconColor} size={24} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold">{item.title[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
