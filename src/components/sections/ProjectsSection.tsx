import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">{t(translations.projects.title, lang)}</h2>
          <p className="text-muted-foreground">{t(translations.projects.subtitle, lang)}</p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {translations.projects.items.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:glow-gold">
              <h3 className="mb-2 font-heading text-lg font-semibold">{t(project.title, lang)}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{t(project.desc, lang)}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
