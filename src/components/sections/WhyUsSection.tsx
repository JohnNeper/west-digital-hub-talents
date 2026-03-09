import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Users, TrendingDown, Zap, Globe, Scale } from "lucide-react";

const iconMap = { Users, TrendingDown, Zap, Globe, Scale };

export function WhyUsSection() {
  const { lang } = useLang();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{t(translations.whyUs.title, lang)}</h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {translations.whyUs.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={i} delay={i * 0.1} className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40">
                <Icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-sm font-medium text-foreground">{t(item, lang)}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
