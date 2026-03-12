import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Rocket, Check, ArrowRight } from "lucide-react";

export function StartupsSection() {
  const { lang } = useLang();

  return (
    <section id="startups" className="py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 sm:p-14">
          <AnimatedSection className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Rocket className="text-primary" size={28} />
            </div>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.startups.title, lang)}</h2>
            <p className="mb-8 max-w-2xl text-muted-foreground leading-relaxed">{t(translations.startups.description, lang)}</p>
            <div className="mb-10 grid gap-3 sm:grid-cols-2 text-left">
              {tArr(translations.startups.features, lang).map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="text-primary" size={12} />
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <Button size="lg" asChild className="gradient-gold gap-2 font-semibold text-primary-foreground shadow-lg shadow-primary/20">
              <Link to="/contact">{t(translations.startups.cta, lang)} <ArrowRight size={16} /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
