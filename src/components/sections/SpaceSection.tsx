import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Building, DoorOpen, Users, Lightbulb, Code2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import spaceImg from "@/assets/space-image.jpg";

const icons = [Building, DoorOpen, Users, Lightbulb, Code2, Calendar];

export function SpaceSection() {
  const { lang } = useLang();

  return (
    <section id="space" className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{lang === "en" ? "Our Space" : "Notre Espace"}</p>
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">{t(translations.space.title, lang)}</h2>
          <p className="text-muted-foreground">{t(translations.space.subtitle, lang)}</p>
        </AnimatedSection>

        <div className="grid gap-10 items-center md:grid-cols-2">
          <AnimatedSection>
            <img
              src={spaceImg}
              alt={t(translations.space.title, lang)}
              className="rounded-2xl border border-border/50 object-cover w-full aspect-[4/3] shadow-xl shadow-black/5"
              loading="lazy"
            />
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2">
            {tArr(translations.space.items, lang).map((item, i) => {
              const Icon = icons[i];
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium leading-snug">{item}</span>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
