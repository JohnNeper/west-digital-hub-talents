import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Users, TrendingDown, Zap, Globe, Scale } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { Users, TrendingDown, Zap, Globe, Scale };

export function WhyUsSection() {
  const { lang } = useLang();

  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{lang === "en" ? "Our Edge" : "Notre Avantage"}</p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{t(translations.whyUs.title, lang)}</h2>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {translations.whyUs.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full"
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">{t(item, lang)}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
