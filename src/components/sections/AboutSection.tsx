import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Globe, FolderKanban, Users, SmilePlus } from "lucide-react";

const stats = [
  { key: "countries", value: "15+", icon: Globe },
  { key: "projects", value: "50+", icon: FolderKanban },
  { key: "developers", value: "30+", icon: Users },
  { key: "clients", value: "40+", icon: SmilePlus },
] as const;

export function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.about.title, lang)}</h2>
          <p className="mb-3 text-xl font-semibold text-gradient-gold">{t(translations.about.tagline, lang)}</p>
          <p className="text-muted-foreground leading-relaxed">{t(translations.about.description, lang)}</p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(({ key, value, icon: Icon }, i) => (
            <AnimatedSection key={key} delay={i * 0.1} className="rounded-xl border border-border bg-card p-6 text-center">
              <Icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="mb-1 font-heading text-3xl font-bold text-foreground">{value}</div>
              <div className="text-sm text-muted-foreground">{t(translations.about.stats[key as keyof typeof translations.about.stats], lang)}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
