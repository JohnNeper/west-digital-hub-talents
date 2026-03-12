import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Globe, FolderKanban, Users, SmilePlus } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { key: "countries", value: "15+", icon: Globe, color: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/15 dark:to-cyan-500/15" },
  { key: "projects", value: "50+", icon: FolderKanban, color: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/15 dark:to-orange-500/15" },
  { key: "developers", value: "30+", icon: Users, color: "from-emerald-500/10 to-green-500/10 dark:from-emerald-500/15 dark:to-green-500/15" },
  { key: "clients", value: "40+", icon: SmilePlus, color: "from-purple-500/10 to-violet-500/10 dark:from-purple-500/15 dark:to-violet-500/15" },
] as const;

export function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{lang === "en" ? "About Us" : "À Propos"}</p>
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{t(translations.about.title, lang)}</h2>
          <p className="mb-3 text-xl font-semibold text-gradient-gold">{t(translations.about.tagline, lang)}</p>
          <p className="text-muted-foreground leading-relaxed">{t(translations.about.description, lang)}</p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map(({ key, value, icon: Icon, color }, i) => (
            <AnimatedSection key={key} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                className={`rounded-2xl bg-gradient-to-br ${color} border border-border/50 p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5`}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={22} />
                </div>
                <div className="mb-1 font-heading text-3xl font-bold text-foreground">{value}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t(translations.about.stats[key as keyof typeof translations.about.stats], lang)}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
