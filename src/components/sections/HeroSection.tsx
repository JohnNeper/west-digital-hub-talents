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
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {lang === "en" ? "Trusted by companies across 15+ countries" : "Partenaire de confiance dans plus de 15 pays"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">{lang === "en" ? "Engineering" : "Des Solutions"} </span>
            <span className="text-gradient-gold">{lang === "en" ? "Digital Excellence" : "Numériques d'Excellence"}</span>
            <br />
            <span className="text-foreground">{lang === "en" ? "From Africa to the World" : "de l'Afrique vers le Monde"}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg"
          >
            {t(translations.hero.subheadline, lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Button size="lg" asChild className="gradient-gold gap-2 font-semibold text-primary-foreground">
              <Link to="/contact">{t(translations.hero.cta1, lang)} <ArrowRight size={16} /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-border text-foreground hover:border-primary hover:text-primary">
              <Link to="/contact"><Phone size={16} /> {t(translations.hero.cta2, lang)}</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/services"><Eye size={16} /> {t(translations.hero.cta3, lang)}</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-foreground">50+</span>
              {lang === "en" ? "Projects Delivered" : "Projets Livrés"}
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-foreground">15+</span>
              {lang === "en" ? "Countries" : "Pays"}
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-foreground">30+</span>
              {lang === "en" ? "Engineers" : "Ingénieurs"}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
