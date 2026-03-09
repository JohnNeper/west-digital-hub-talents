import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Eye } from "lucide-react";
import heroImg from "@/assets/hero-image.jpg";

export function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
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
            <Button size="lg" asChild className="gradient-gold gap-2 font-semibold text-primary-foreground">
              <Link to="/contact">{t(translations.hero.cta1, lang)} <ArrowRight size={18} /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-border text-foreground hover:border-primary hover:text-primary">
              <Link to="/contact"><Phone size={18} /> {t(translations.hero.cta2, lang)}</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="gap-2 text-muted-foreground hover:text-primary">
              <Link to="/services"><Eye size={18} /> {t(translations.hero.cta3, lang)}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
