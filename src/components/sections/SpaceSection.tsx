import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Building, DoorOpen, Users, Lightbulb, Code2, Calendar } from "lucide-react";

const icons = [Building, DoorOpen, Users, Lightbulb, Code2, Calendar];

export function SpaceSection() {
  const { lang } = useLang();

  return (
    <section id="space" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">{t(translations.space.title, lang)}</h2>
          <p className="text-muted-foreground">{t(translations.space.subtitle, lang)}</p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tArr(translations.space.items, lang).map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40">
                <Icon className="flex-shrink-0 text-primary" size={24} />
                <span className="text-sm font-medium">{item}</span>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
