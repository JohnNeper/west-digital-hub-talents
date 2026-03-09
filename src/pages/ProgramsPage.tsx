import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, ExternalLink, Check, Briefcase, ArrowRight } from "lucide-react";
import bootcampImg from "@/assets/bootcamp-image.jpg";
import internshipImg from "@/assets/internship-image.jpg";

// Replace these with your actual external application URLs
const BOOTCAMP_APPLY_URL = "https://forms.google.com/your-bootcamp-form";
const INTERNSHIP_APPLY_URL = "https://forms.google.com/your-internship-form";

export default function ProgramsPage() {
  const { lang } = useLang();
  const p = translations.programs;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">{t(p.title, lang)}</h1>
            <p className="text-lg text-muted-foreground">{t(p.subtitle, lang)}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid gap-10 items-center md:grid-cols-2 mb-16">
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <GraduationCap className="text-primary" size={36} />
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold">{t(p.bootcamp.title, lang)}</h2>
                <p className="text-muted-foreground leading-relaxed">{t(p.bootcamp.description, lang)}</p>
              </div>
              <img
                src={bootcampImg}
                alt={t(p.bootcamp.title, lang)}
                className="rounded-xl border border-border object-cover w-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Bootcamp cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {p.bootcamp.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:glow-gold flex flex-col">
                <h3 className="mb-2 font-heading text-lg font-semibold">{t(item.title, lang)}</h3>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary">
                  <Clock size={14} /> {t(item.duration, lang)}
                </div>
                <p className="mb-4 text-sm text-muted-foreground flex-1">{t(item.description, lang)}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">{skill}</Badge>
                  ))}
                </div>
                <Button asChild className="gradient-gold gap-2 font-semibold text-primary-foreground w-full">
                  <a href={BOOTCAMP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                    {t(p.applyBtn, lang)} <ExternalLink size={14} />
                  </a>
                </Button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid gap-10 items-center md:grid-cols-2 mb-12">
              <div className="md:order-2">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <Briefcase className="text-primary" size={36} />
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold">{t(p.internship.title, lang)}</h2>
                <p className="mb-2 text-muted-foreground leading-relaxed">{t(p.internship.description, lang)}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-primary font-medium">
                  <Clock size={14} /> {t(p.internship.duration, lang)}
                </div>
              </div>
              <div className="md:order-1">
                <img
                  src={internshipImg}
                  alt={t(p.internship.title, lang)}
                  className="rounded-xl border border-border object-cover w-full aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 font-heading text-xl font-semibold text-center">{lang === "en" ? "What You'll Get" : "Ce que Vous Obtiendrez"}</h3>
              <div className="grid gap-3 sm:grid-cols-2 mb-8">
                {tArr(p.internship.benefits, lang).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="text-primary flex-shrink-0" size={16} /> {benefit}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground">
                  <a href={INTERNSHIP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                    {t(p.internship.applyBtn, lang)} <ArrowRight size={16} />
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">{t(p.applyDescription, lang)}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
