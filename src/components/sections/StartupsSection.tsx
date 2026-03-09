import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Rocket, Check } from "lucide-react";

export function StartupsSection() {
  const { lang } = useLang();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="startups" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 sm:p-12">
          <AnimatedSection className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
              <Rocket className="text-primary" size={36} />
            </div>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.startups.title, lang)}</h2>
            <p className="mb-8 max-w-2xl text-muted-foreground">{t(translations.startups.description, lang)}</p>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {tArr(translations.startups.features, lang).map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="text-primary" size={16} /> {f}
                </div>
              ))}
            </div>
            <Button size="lg" className="gradient-gold font-semibold text-primary-foreground" onClick={() => scrollTo("contact")}>
              {t(translations.startups.cta, lang)}
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
