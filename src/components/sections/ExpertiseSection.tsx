import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Brain, Globe, Smartphone, Link, Cloud, Shield, BarChart3, Settings } from "lucide-react";

const iconMap = { Brain, Globe, Smartphone, Link, Cloud, Shield, BarChart3, Settings };

export function ExpertiseSection() {
  const { lang } = useLang();

  return (
    <section id="expertise" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{t(translations.expertise.title, lang)}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {translations.expertise.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={i} delay={i * 0.05} className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:bg-primary/5">
                <Icon className="text-primary transition-transform group-hover:scale-110" size={32} />
                <span className="text-sm font-medium">{t(item, lang)}</span>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
