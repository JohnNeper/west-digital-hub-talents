import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Code, Users, ArrowRight, Check } from "lucide-react";
import consultingImg from "@/assets/services-consulting.jpg";
import developmentImg from "@/assets/services-development.jpg";
import outsourcingImg from "@/assets/services-outsourcing.jpg";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";

const serviceData = [
  { key: "consulting" as const, icon: Lightbulb, image: consultingImg },
  { key: "development" as const, icon: Code, image: developmentImg },
  { key: "outsourcing" as const, icon: Users, image: outsourcingImg },
];

export default function ServicesPage() {
  const { lang } = useLang();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">{t(translations.services.title, lang)}</h1>
            <p className="text-lg text-muted-foreground">{t(translations.services.subtitle, lang)}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service cards with images */}
      <section className="pb-24">
        <div className="container mx-auto px-4 space-y-20">
          {serviceData.map(({ key, icon: Icon, image }, i) => {
            const svc = translations.services[key];
            const isReversed = i % 2 !== 0;
            return (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className={`grid gap-10 items-center md:grid-cols-2 ${isReversed ? "md:direction-rtl" : ""}`}>
                  <div className={isReversed ? "md:order-2" : ""}>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h2 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">{t(svc.title, lang)}</h2>
                    <p className="mb-6 text-muted-foreground">{t(svc.description, lang)}</p>
                    <ul className="mb-6 space-y-2">
                      {tArr(svc.items, lang).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="text-primary flex-shrink-0" size={16} /> {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="gradient-gold gap-2 font-semibold text-primary-foreground">
                      <Link to="/contact">{t(translations.nav.startProject, lang)} <ArrowRight size={16} /></Link>
                    </Button>
                  </div>
                  <div className={isReversed ? "md:order-1" : ""}>
                    <img
                      src={image}
                      alt={t(svc.title, lang)}
                      className="rounded-xl border border-border object-cover w-full aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <WhyUsSection />
      <ExpertiseSection />
    </Layout>
  );
}
