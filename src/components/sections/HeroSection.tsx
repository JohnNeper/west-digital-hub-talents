import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Eye, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-image.jpg";

export function HeroSection() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/95 dark:bg-background/92 backdrop-blur-sm" />
          <div className="absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/6 blur-[180px]" />
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/4 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/80 px-5 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            >
              <Sparkles size={12} className="text-primary" />
              {lang === "en" ? "Trusted by companies across 15+ countries" : "Partenaire de confiance dans plus de 15 pays"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-foreground">{lang === "en" ? "Engineering" : "Des Solutions"} </span>
              <span className="text-gradient-gold">{lang === "en" ? "Digital Excellence" : "Numériques d'Excellence"}</span>
              <br />
              <span className="text-foreground">{lang === "en" ? "From Africa to the World" : "de l'Afrique vers le Monde"}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg"
            >
              {t(translations.hero.subheadline, lang)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button size="lg" asChild className="gradient-gold gap-2 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                <Link to="/contact">{t(translations.hero.cta1, lang)} <ArrowRight size={16} /></Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-border/80 text-foreground hover:border-primary/60 hover:text-primary transition-all" onClick={() => setBookingOpen(true)}>
                <Calendar size={16} /> {t(translations.hero.cta2, lang)}
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
              className="mt-20 flex flex-wrap items-center justify-center gap-10 text-xs text-muted-foreground"
            >
              {[
                { value: "50+", label: lang === "en" ? "Projects Delivered" : "Projets Livrés" },
                { value: "15+", label: lang === "en" ? "Countries" : "Pays" },
                { value: "30+", label: lang === "en" ? "Engineers" : "Ingénieurs" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="hidden sm:block h-8 w-px bg-border/60 -ml-5 mr-5" />}
                  <div className="text-center">
                    <span className="block font-heading text-3xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-muted-foreground tracking-wide uppercase text-[10px] font-medium">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
