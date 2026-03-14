import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BookingModal } from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import {
  Lightbulb, Code, Users, GraduationCap, ArrowRight, ArrowUpRight, Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    key: "consulting" as const,
    icon: Lightbulb,
    gradient: "from-amber-500/10 to-yellow-500/10 dark:from-amber-500/15 dark:to-yellow-500/15",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    key: "development" as const,
    icon: Code,
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/15",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    key: "outsourcing" as const,
    icon: Users,
    gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/15 dark:to-teal-500/15",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    key: "academy" as const,
    icon: GraduationCap,
    gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

const academyData = {
  title: { en: "WDH Academy", fr: "WDH Academy" },
  items: {
    en: ["Intensive bootcamps (4-8 months)", "Work-study programs", "Professional internships", "Industry certifications"],
    fr: ["Bootcamps intensifs (4-8 mois)", "Programmes en alternance", "Stages professionnels", "Certifications professionnelles"],
  },
};

export function ServicesSection() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section id="services" className="py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "What We Do" : "Nos Services"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {t(translations.services.title, lang)}
            </h2>
            <p className="text-muted-foreground">{t(translations.services.subtitle, lang)}</p>
          </AnimatedSection>

          {/* Service cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ key, icon: Icon, gradient, iconBg, iconColor }, i) => {
              const isAcademy = key === "academy";
              const svc = isAcademy ? academyData : translations.services[key as keyof typeof translations.services];
              const items = isAcademy ? academyData.items : (svc as any).items;

              return (
                <AnimatedSection key={key} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group rounded-2xl bg-gradient-to-br ${gradient} border border-border/50 p-7 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <motion.div
                        whileHover={{ rotate: 8 }}
                        className={`flex h-13 w-13 items-center justify-center rounded-xl ${iconBg}`}
                      >
                        <Icon className={iconColor} size={24} />
                      </motion.div>
                      <ArrowUpRight className="text-muted-foreground/30 group-hover:text-primary transition-colors" size={20} />
                    </div>
                    <h3 className="mb-4 font-heading text-lg font-semibold">
                      {t((svc as any).title, lang)}
                    </h3>
                    <ul className="space-y-2.5 flex-1">
                      {tArr(items, lang).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={isAcademy ? "/programs" : "/services"}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {lang === "en" ? "Learn more" : "En savoir plus"} <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.5} className="mt-14 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/services">
                  {lang === "en" ? "View All Services" : "Voir les Services"} <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gradient-gold gap-2 font-semibold text-primary-foreground border-0"
                onClick={() => setBookingOpen(true)}
              >
                <Calendar size={16} />
                {lang === "en" ? "Free Trial" : "Essai Gratuit"}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
