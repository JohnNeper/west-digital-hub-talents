import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

export function OutsourcingSection() {
  const { lang } = useLang();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="outsourcing" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <Globe className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.outsourcingSection.title, lang)}</h2>
          <p className="mb-8 text-muted-foreground">{t(translations.outsourcingSection.description, lang)}</p>
          <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollTo("contact")}>
            {t(translations.outsourcingSection.cta, lang)} <ArrowRight size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
