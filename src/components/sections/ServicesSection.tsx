import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbulb, Code, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { key: "consulting" as const, icon: Lightbulb, gradient: "from-amber-500/10 to-yellow-500/10 dark:from-amber-500/15 dark:to-yellow-500/15" },
  { key: "development" as const, icon: Code, gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/15" },
  { key: "outsourcing" as const, icon: Users, gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/15 dark:to-teal-500/15" },
];

export function ServicesSection() {
  const { lang } = useLang();

  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{lang === "en" ? "What We Do" : "Nos Services"}</p>
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">{t(translations.services.title, lang)}</h2>
          <p className="text-muted-foreground">{t(translations.services.subtitle, lang)}</p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ key, icon: Icon, gradient }, i) => {
            const svc = translations.services[key];
            return (
              <AnimatedSection key={key} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`group rounded-2xl bg-gradient-to-br ${gradient} border border-border/50 p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <ArrowUpRight className="text-muted-foreground/30 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="mb-4 font-heading text-xl font-semibold">{t(svc.title, lang)}</h3>
                  <ul className="space-y-2.5 flex-1">
                    {tArr(svc.items, lang).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
