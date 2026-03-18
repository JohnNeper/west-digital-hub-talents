import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BookingModal } from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe, Users, Clock, DollarSign, Shield, Code, Zap, ArrowRight,
  Calendar, CheckCircle2, Monitor, Smartphone, Brain, Cloud,
  Headphones, MapPin, Timer, BadgeCheck, Lock, FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const pricingModels = [
  {
    icon: Users,
    title: { en: "Dedicated Team", fr: "Équipe Dédiée" },
    desc: {
      en: "Full-time developers working exclusively on your project. Ideal for long-term engagements.",
      fr: "Développeurs à plein temps travaillant exclusivement sur votre projet. Idéal pour les engagements à long terme.",
    },
    price: { en: "From $2,500/dev/month", fr: "Dès 2 500$/dev/mois" },
    features: {
      en: ["Full-time dedicated resources", "Direct team communication", "Flexible scaling up/down", "Monthly billing"],
      fr: ["Ressources dédiées à plein temps", "Communication directe avec l'équipe", "Montée/descente en charge flexible", "Facturation mensuelle"],
    },
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
    popular: true,
  },
  {
    icon: Code,
    title: { en: "Project-Based", fr: "Par Projet" },
    desc: {
      en: "Fixed-scope delivery with clear milestones. Perfect for MVPs and defined features.",
      fr: "Livraison à périmètre fixe avec des jalons clairs. Parfait pour les MVPs et fonctionnalités définies.",
    },
    price: { en: "From $5,000/project", fr: "Dès 5 000$/projet" },
    features: {
      en: ["Fixed scope & budget", "Clear milestones", "Full ownership transfer", "Post-launch support included"],
      fr: ["Périmètre & budget fixés", "Jalons clairs", "Transfert de propriété complet", "Support post-lancement inclus"],
    },
    gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/15 dark:to-teal-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    popular: false,
  },
  {
    icon: Headphones,
    title: { en: "CTO as a Service", fr: "CTO en tant que Service" },
    desc: {
      en: "Technical leadership and strategy for startups that need senior guidance without the full-time hire.",
      fr: "Leadership technique et stratégie pour les startups qui ont besoin d'un guide senior sans l'embauche à plein temps.",
    },
    price: { en: "From $3,000/month", fr: "Dès 3 000$/mois" },
    features: {
      en: ["Architecture & strategy", "Team hiring & mentoring", "Code reviews & QA", "Investor-ready tech docs"],
      fr: ["Architecture & stratégie", "Recrutement & mentorat", "Revues de code & QA", "Documentation tech pour investisseurs"],
    },
    gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    popular: false,
  },
];

const processSteps = [
  {
    icon: FileCheck,
    title: { en: "Discovery Call", fr: "Appel Découverte" },
    desc: { en: "Understand your needs, team requirements and project scope", fr: "Comprendre vos besoins, exigences d'équipe et périmètre du projet" },
  },
  {
    icon: Users,
    title: { en: "Team Assembly", fr: "Constitution de l'Équipe" },
    desc: { en: "We handpick developers matching your tech stack and culture", fr: "Nous sélectionnons des développeurs correspondant à votre stack et culture" },
  },
  {
    icon: Monitor,
    title: { en: "Onboarding", fr: "Intégration" },
    desc: { en: "Seamless integration with your workflows, tools and processes", fr: "Intégration transparente avec vos workflows, outils et processus" },
  },
  {
    icon: Zap,
    title: { en: "Delivery & Iteration", fr: "Livraison & Itération" },
    desc: { en: "Agile sprints, daily standups and continuous delivery", fr: "Sprints agiles, réunions quotidiennes et livraison continue" },
  },
];

const techStack = [
  { name: "React / Next.js", icon: Globe },
  { name: "React Native / Flutter", icon: Smartphone },
  { name: "Node.js / Python", icon: Code },
  { name: "AI / Machine Learning", icon: Brain },
  { name: "AWS / GCP / Azure", icon: Cloud },
  { name: "DevOps / CI/CD", icon: Zap },
];

const timezones = [
  { zone: "GMT+1", region: { en: "Central Africa (Cameroon)", fr: "Afrique Centrale (Cameroun)" } },
  { zone: "GMT-5 to GMT-8", region: { en: "Americas (USA, Canada)", fr: "Amériques (USA, Canada)" } },
  { zone: "GMT+1 to GMT+2", region: { en: "Europe (France, Germany, UK)", fr: "Europe (France, Allemagne, UK)" } },
];

const certifications = [
  { icon: Lock, label: "GDPR Compliant", labelFr: "Conforme RGPD" },
  { icon: Shield, label: "ISO 27001 Practices", labelFr: "Pratiques ISO 27001" },
  { icon: BadgeCheck, label: "NDA & IP Protection", labelFr: "NDA & Protection IP" },
  { icon: FileCheck, label: "SOC 2 Aligned", labelFr: "Aligné SOC 2" },
];

export default function OutsourcingPage() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title={lang === "en" ? "Tech Outsourcing — Scale Your Team With African Talent" : "Externalisation Tech — Renforcez Votre Équipe Avec des Talents Africains"}
        description={lang === "en"
          ? "Hire dedicated developers from Cameroon. Save 40-60% on costs with world-class quality. Dedicated teams, project-based, or CTO as a Service."
          : "Recrutez des développeurs dédiés depuis le Cameroun. Économisez 40-60% avec une qualité mondiale. Équipes dédiées, par projet ou CTO as a Service."}
        keywords="tech outsourcing Africa, hire developers Cameroon, remote development team, dedicated developers, CTO as a service, offshore development"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-xs px-4 py-1.5">
              {lang === "en" ? "Save 40-60% on Development Costs" : "Économisez 40-60% sur les Coûts de Développement"}
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Scale Your Tech Team With Top African Talent" : "Renforcez Votre Équipe Tech Avec les Meilleurs Talents Africains"}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {lang === "en"
                ? "Access skilled, pre-vetted developers from Cameroon. From dedicated teams to project-based delivery, we provide the talent you need to ship faster."
                : "Accédez à des développeurs qualifiés et pré-vérifiés depuis le Cameroun. Des équipes dédiées à la livraison par projet, nous fournissons les talents dont vous avez besoin."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
                <Calendar size={16} />
                {lang === "en" ? "Book a Free Consultation" : "Consultation Gratuite"}
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
                {lang === "en" ? "View Pricing" : "Voir les Tarifs"} <ArrowRight size={16} />
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust metrics */}
          <AnimatedSection delay={0.3} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "50+", label: { en: "Projects Delivered", fr: "Projets Livrés" } },
              { value: "15+", label: { en: "Countries Served", fr: "Pays Desservis" } },
              { value: "40%", label: { en: "Cost Savings", fr: "Économies" } },
              { value: "4.9/5", label: { en: "Client Satisfaction", fr: "Satisfaction Client" } },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold font-heading text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label[lang]}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "How It Works" : "Comment Ça Marche"}
            </p>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "From First Call to First Sprint" : "Du Premier Appel au Premier Sprint"}
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center relative">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <step.icon className="text-primary" size={24} />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold md:right-auto md:left-1/2 md:translate-x-6 md:-top-3">
                    {i + 1}
                  </span>
                  <h3 className="font-heading font-semibold mb-2">{step.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc[lang]}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Transparent Pricing" : "Tarification Transparente"}
            </p>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Engagement Models" : "Modèles d'Engagement"}
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {pricingModels.map((model, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative rounded-2xl bg-gradient-to-br ${model.gradient} border border-border/50 p-8 h-full flex flex-col transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5`}
                >
                  {model.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs">
                      {lang === "en" ? "Most Popular" : "Plus Populaire"}
                    </Badge>
                  )}
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card/80 border border-border/50`}>
                    <model.icon className={model.iconColor} size={22} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{model.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{model.desc[lang]}</p>
                  <p className="text-lg font-bold text-primary mb-5">{model.price[lang]}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {model.features[lang].map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-gold font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
                    <Calendar size={14} className="mr-2" />
                    {lang === "en" ? "Get Started" : "Commencer"}
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Our Tech Stack" : "Notre Stack Technique"}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-5 text-center hover:border-primary/30 transition-all"
                >
                  <tech.icon size={24} className="text-primary" />
                  <span className="text-xs font-medium">{tech.name}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone Coverage */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Global Timezone Coverage" : "Couverture Fuseaux Horaires"}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              {lang === "en"
                ? "Based in GMT+1, we provide 4-6 hours of daily overlap with most major markets."
                : "Basés en GMT+1, nous offrons 4-6 heures de chevauchement quotidien avec la plupart des marchés majeurs."}
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {timezones.map((tz, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-border/50 bg-card p-6 text-center hover:border-primary/30 transition-all">
                  <Timer size={20} className="mx-auto mb-3 text-primary" />
                  <p className="font-heading font-bold text-lg">{tz.zone}</p>
                  <p className="text-sm text-muted-foreground mt-1">{tz.region[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Trust & Security" : "Confiance & Sécurité"}
            </p>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Certifications & Compliance" : "Certifications & Conformité"}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-6 text-center hover:border-primary/30 transition-all"
                >
                  <cert.icon size={28} className="text-primary" />
                  <span className="text-sm font-semibold">{lang === "en" ? cert.label : cert.labelFr}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Ready to Scale Your Team?" : "Prêt à Renforcer Votre Équipe ?"}
            </h2>
            <p className="mb-8 text-muted-foreground">
              {lang === "en"
                ? "Book a free 30-minute consultation and get a custom proposal within 48 hours."
                : "Réservez une consultation gratuite de 30 minutes et recevez une proposition sur mesure sous 48h."}
            </p>
            <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
              <Calendar size={16} />
              {lang === "en" ? "Book Free Consultation" : "Consultation Gratuite"}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
}