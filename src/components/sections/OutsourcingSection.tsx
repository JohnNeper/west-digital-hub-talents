import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

export function OutsourcingSection() {
  const { lang } = useLang();

  return (
    <section id="outsourcing" className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Globe className="text-primary" size={28} />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.outsourcingSection.title, lang)}</h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">{t(translations.outsourcingSection.description, lang)}</p>
          <Button size="lg" variant="outline" asChild className="gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            <Link to="/outsourcing">{t(translations.outsourcingSection.cta, lang)} <ArrowRight size={16} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
