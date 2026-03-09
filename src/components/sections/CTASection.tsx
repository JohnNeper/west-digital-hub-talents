import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  const { lang } = useLang();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 text-center sm:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.cta.title, lang)}</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{t(translations.cta.subtitle, lang)}</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="gradient-gold gap-2 font-semibold text-primary-foreground">
                <Link to="/contact">{t(translations.cta.btn1, lang)} <ArrowRight size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 border-border">
                <Link to="/contact"><Mail size={18} /> {t(translations.cta.btn2, lang)}</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
