import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbulb, Code, Users } from "lucide-react";

const services = [
  { key: "consulting" as const, icon: Lightbulb },
  { key: "development" as const, icon: Code },
  { key: "outsourcing" as const, icon: Users },
];

export function ServicesSection() {
  const { lang } = useLang();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">{t(translations.services.title, lang)}</h2>
          <p className="text-muted-foreground">{t(translations.services.subtitle, lang)}</p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map(({ key, icon: Icon }, i) => {
            const svc = translations.services[key];
            return (
              <AnimatedSection key={key} delay={i * 0.15} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-gold">
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="mb-4 font-heading text-xl font-semibold">{t(svc.title, lang)}</h3>
                <ul className="space-y-2">
                  {tArr(svc.items, lang).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
