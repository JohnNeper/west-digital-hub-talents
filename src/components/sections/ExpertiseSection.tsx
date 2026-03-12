import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Brain, Globe, Smartphone, Link, Cloud, Shield, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { Brain, Globe, Smartphone, Link, Cloud, Shield, BarChart3, Settings };

export function ExpertiseSection() {
  const { lang } = useLang();

  return (
    <section id="expertise" className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{lang === "en" ? "Technologies" : "Technologies"}</p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{t(translations.expertise.title, lang)}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {translations.expertise.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <span className="text-sm font-medium">{t(item, lang)}</span>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
