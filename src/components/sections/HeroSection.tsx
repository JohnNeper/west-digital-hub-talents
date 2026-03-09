import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Eye } from "lucide-react";

export function HeroSection() {
  const { lang } = useLang();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            🌍 Build in Africa. Deliver to the World.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">{t(translations.hero.headline, lang).split(" ").slice(0, -4).join(" ")} </span>
            <span className="text-gradient-gold">{t(translations.hero.headline, lang).split(" ").slice(-4).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
          >
            {t(translations.hero.subheadline, lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => scrollTo("contact")}>
              {t(translations.hero.cta1, lang)} <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border text-foreground hover:border-primary hover:text-primary" onClick={() => scrollTo("contact")}>
              <Phone size={18} /> {t(translations.hero.cta2, lang)}
            </Button>
            <Button size="lg" variant="ghost" className="gap-2 text-muted-foreground hover:text-primary" onClick={() => scrollTo("services")}>
              <Eye size={18} /> {t(translations.hero.cta3, lang)}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
