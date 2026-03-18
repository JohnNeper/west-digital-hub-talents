import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import fintechImg from "@/assets/project-fintech.jpg";
import agritechImg from "@/assets/project-agritech.jpg";
import healthtechImg from "@/assets/project-healthtech.jpg";
import edtechImg from "@/assets/project-edtech.jpg";

const projectImages: Record<string, string> = {
  fintech: fintechImg,
  agritech: agritechImg,
  healthtech: healthtechImg,
  edtech: edtechImg,
};

export default function ProjectsPage() {
  const { lang } = useLang();

  return (
    <Layout>
      <SEOHead
        title="Our Projects — Portfolio & Case Studies"
        description="Explore our portfolio of 50+ delivered projects across fintech, agritech, healthtech and edtech. See how we build scalable digital products."
        keywords="software portfolio, tech projects Africa, fintech development, case studies, digital products"
      />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">{t(translations.projects.title, lang)}</h1>
            <p className="text-lg text-muted-foreground">{t(translations.projects.subtitle, lang)}</p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {translations.projects.items.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:glow-gold">
                <img
                  src={projectImages[project.image]}
                  alt={t(project.title, lang)}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="mb-2 font-heading text-xl font-semibold">{t(project.title, lang)}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{t(project.desc, lang)}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
