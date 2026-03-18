import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t, tArr } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb, Code, Users, ArrowRight, Check, Calendar,
  Star, Shield, Zap, Globe, BarChart3, Headphones,
  Target, Layers, TrendingUp, Award, Clock, Heart,
} from "lucide-react";
import consultingImg from "@/assets/services-consulting.jpg";
import developmentImg from "@/assets/services-development.jpg";
import outsourcingImg from "@/assets/services-outsourcing.jpg";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";

const serviceData = [
  {
    key: "consulting" as const,
    icon: Lightbulb,
    image: consultingImg,
    color: "from-amber-500/8 to-yellow-500/8 dark:from-amber-500/12 dark:to-yellow-500/12",
    highlights: {
      en: ["Strategic digital roadmaps", "Technology audit & optimization", "Market-ready architecture"],
      fr: ["Feuilles de route numériques stratégiques", "Audit & optimisation technologique", "Architecture prête pour le marché"],
    },
  },
  {
    key: "development" as const,
    icon: Code,
    image: developmentImg,
    color: "from-blue-500/8 to-indigo-500/8 dark:from-blue-500/12 dark:to-indigo-500/12",
    highlights: {
      en: ["End-to-end product lifecycle", "Agile sprints with weekly demos", "Production-grade code quality"],
      fr: ["Cycle de vie produit de bout en bout", "Sprints agiles avec démos hebdomadaires", "Qualité de code de niveau production"],
    },
  },
  {
    key: "outsourcing" as const,
    icon: Users,
    image: outsourcingImg,
    color: "from-emerald-500/8 to-teal-500/8 dark:from-emerald-500/12 dark:to-teal-500/12",
    highlights: {
      en: ["Pre-vetted senior engineers", "Timezone-aligned collaboration", "Transparent monthly reporting"],
      fr: ["Ingénieurs seniors pré-sélectionnés", "Collaboration alignée sur les fuseaux horaires", "Rapports mensuels transparents"],
    },
  },
];

const trustMetrics = [
  { icon: Star, value: "4.9/5", label: { en: "Client Satisfaction", fr: "Satisfaction Client" } },
  { icon: Clock, value: "98%", label: { en: "On-Time Delivery", fr: "Livraison à Temps" } },
  { icon: Shield, value: "100%", label: { en: "NDA Protected", fr: "Protégé par NDA" } },
  { icon: Heart, value: "85%", label: { en: "Client Retention", fr: "Rétention Client" } },
];

const processSteps = [
  { icon: Target, title: { en: "Discovery", fr: "Découverte" }, desc: { en: "We understand your vision, goals and constraints through in-depth workshops.", fr: "Nous comprenons votre vision, vos objectifs et contraintes à travers des ateliers approfondis." } },
  { icon: Layers, title: { en: "Strategy & Design", fr: "Stratégie & Design" }, desc: { en: "We craft the architecture, UX and technical roadmap tailored to your needs.", fr: "Nous concevons l'architecture, l'UX et la feuille de route technique adaptée à vos besoins." } },
  { icon: Code, title: { en: "Development", fr: "Développement" }, desc: { en: "Agile sprints with continuous delivery, testing and transparent progress tracking.", fr: "Sprints agiles avec livraison continue, tests et suivi transparent de la progression." } },
  { icon: TrendingUp, title: { en: "Launch & Scale", fr: "Lancement & Croissance" }, desc: { en: "We deploy, monitor and optimize your product for growth and performance.", fr: "Nous déployons, surveillons et optimisons votre produit pour la croissance et la performance." } },
];

const differentiators = [
  { icon: Globe, title: { en: "Global Standards", fr: "Standards Mondiaux" }, desc: { en: "We follow international best practices used by Fortune 500 companies.", fr: "Nous suivons les meilleures pratiques internationales utilisées par les entreprises Fortune 500." } },
  { icon: Zap, title: { en: "Rapid Delivery", fr: "Livraison Rapide" }, desc: { en: "MVP in 4-6 weeks. Full products in 3-6 months with agile methodology.", fr: "MVP en 4-6 semaines. Produits complets en 3-6 mois avec méthodologie agile." } },
  { icon: BarChart3, title: { en: "Cost Efficiency", fr: "Rentabilité" }, desc: { en: "Save 40-60% compared to US/EU rates without compromising quality.", fr: "Économisez 40-60% par rapport aux tarifs US/EU sans compromettre la qualité." } },
  { icon: Headphones, title: { en: "Dedicated Support", fr: "Support Dédié" }, desc: { en: "Dedicated project manager and 24/7 communication channels.", fr: "Chef de projet dédié et canaux de communication 24h/24." } },
  { icon: Award, title: { en: "Certified Team", fr: "Équipe Certifiée" }, desc: { en: "AWS, Google Cloud and Azure certified engineers on every project.", fr: "Ingénieurs certifiés AWS, Google Cloud et Azure sur chaque projet." } },
  { icon: Shield, title: { en: "IP Protection", fr: "Protection IP" }, desc: { en: "Full intellectual property transfer. Your code, your product, your data.", fr: "Transfert complet de propriété intellectuelle. Votre code, votre produit, vos données." } },
];

export default function ServicesPage() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Digital Services — Consulting, Development & Outsourcing"
        description="World-class digital services: IT consulting, custom software development, tech outsourcing and academy training. Save 40-60% with top African engineers."
        keywords="IT consulting Cameroon, software development Africa, tech outsourcing, custom software, web development services"
      />
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
            >
              <Star size={12} />
              {lang === "en" ? "Trusted by Companies Worldwide" : "Approuvé par des Entreprises dans le Monde"}
            </motion.div>
            <h1 className="mb-5 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {lang === "en" ? "World-Class " : "Services "}
              <span className="text-gradient-gold">{lang === "en" ? "Digital Services" : "Numériques d'Excellence"}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              {t(translations.services.subtitle, lang)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
                <Calendar size={16} />
                {lang === "en" ? "Book a Free Consultation" : "Réservez une Consultation Gratuite"}
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/contact">
                  {lang === "en" ? "Contact Us" : "Contactez-Nous"} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust metrics */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="mx-auto max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 text-center transition-colors hover:border-primary/30"
                >
                  <m.icon className="mx-auto mb-2 text-primary" size={20} />
                  <p className="text-2xl font-bold font-heading text-foreground">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.label[lang]}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4 space-y-28">
          {serviceData.map(({ key, icon: Icon, image, color, highlights }, i) => {
            const svc = translations.services[key];
            const isReversed = i % 2 !== 0;
            return (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className={`grid gap-12 items-center md:grid-cols-2`}>
                  <div className={isReversed ? "md:order-2" : ""}>
                    <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${color} p-4`}>
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h2 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">{t(svc.title, lang)}</h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">{t(svc.description, lang)}</p>

                    {/* Service items */}
                    <ul className="mb-6 space-y-2.5">
                      {tArr(svc.items, lang).map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <Check className="text-primary" size={12} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="rounded-lg border border-border/50 bg-muted/30 p-4 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
                        {lang === "en" ? "Key Differentiators" : "Points Clés"}
                      </p>
                      {highlights[lang].map((h) => (
                        <p key={h} className="flex items-center gap-2 text-sm text-muted-foreground mb-1.5 last:mb-0">
                          <Star size={10} className="text-primary flex-shrink-0" /> {h}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
                        <Calendar size={14} />
                        {lang === "en" ? "Book a Call" : "Prendre RDV"}
                      </Button>
                      <Button variant="outline" className="gap-2" asChild>
                        <Link to="/contact">{t(translations.nav.startProject, lang)} <ArrowRight size={14} /></Link>
                      </Button>
                    </div>
                  </div>
                  <div className={isReversed ? "md:order-1" : ""}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <img
                        src={image}
                        alt={t(svc.title, lang)}
                        className="rounded-2xl border border-border/50 object-cover w-full aspect-[4/3] shadow-lg"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Our Process" : "Notre Processus"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "How We Deliver Excellence" : "Comment Nous Livrons l'Excellence"}
            </h2>
            <p className="text-muted-foreground">
              {lang === "en"
                ? "A proven methodology refined over 50+ projects to ensure predictable, high-quality outcomes."
                : "Une méthodologie éprouvée affinée sur 50+ projets pour garantir des résultats prévisibles et de haute qualité."}
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative rounded-xl border border-border/50 bg-card p-6 h-full transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">{step.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc[lang]}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "The WDH Advantage" : "L'Avantage WDH"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Why Industry Leaders Choose Us" : "Pourquoi les Leaders nous Choisissent"}
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-border/50 bg-card/60 p-6 h-full transition-all hover:border-primary/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <d.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="mb-2 font-heading text-base font-semibold">{d.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc[lang]}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ExpertiseSection />

      {/* CTA */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-10 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                  {lang === "en" ? "Ready to Build Something Great?" : "Prêt à Construire Quelque Chose de Grand ?"}
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                  {lang === "en"
                    ? "Schedule a free consultation and let's discuss how we can bring your vision to life."
                    : "Planifiez une consultation gratuite et discutons de comment donner vie à votre vision."}
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
                    <Calendar size={16} />
                    {lang === "en" ? "Book a Free Consultation" : "Consultation Gratuite"}
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link to="/projects">{lang === "en" ? "View Our Work" : "Voir nos Projets"} <ArrowRight size={16} /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
}
