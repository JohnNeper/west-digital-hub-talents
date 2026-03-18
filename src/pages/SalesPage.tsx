import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLang } from "@/i18n/LanguageContext";
import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Megaphone, Users, ArrowRight, Calendar, TrendingUp,
  Search, BarChart3, Target, Mail, Palette, PenTool,
  Share2, Eye, MousePointerClick, HandshakeIcon, Star,
} from "lucide-react";
import salesHero from "@/assets/sales-hero.jpg";

const services = [
  {
    icon: Megaphone,
    title: { en: "Digital Marketing", fr: "Marketing Digital" },
    desc: {
      en: "Reach new audiences and grow your business through targeted online advertising and engaging content across all major platforms.",
      fr: "Atteignez de nouvelles audiences et développez votre business grâce à la publicité en ligne ciblée et du contenu engageant sur toutes les plateformes majeures.",
    },
    features: {
      en: ["Google Ads & SEA campaigns", "Social media advertising", "Content marketing strategy", "Performance tracking & analytics"],
      fr: ["Campagnes Google Ads & SEA", "Publicité sur les réseaux sociaux", "Stratégie de content marketing", "Suivi de performance & analytique"],
    },
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/15",
  },
  {
    icon: Users,
    title: { en: "Community Management", fr: "Community Management" },
    desc: {
      en: "Build a thriving online community around your brand, fostering positive interactions and brand advocacy across social platforms.",
      fr: "Construisez une communauté en ligne dynamique autour de votre marque, favorisant les interactions positives et la promotion de votre marque sur les réseaux sociaux.",
    },
    features: {
      en: ["Social media engagement", "Content creation & scheduling", "Community building strategy", "Brand reputation management"],
      fr: ["Animation des réseaux sociaux", "Création & planification de contenu", "Stratégie de développement communautaire", "Gestion de la réputation de marque"],
    },
    gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15",
  },
];

const acquisitionSteps = [
  {
    icon: Target,
    title: { en: "A new lead comes in", fr: "Un nouveau prospect arrive" },
    desc: {
      en: "Automatically captured from any source: social media, online forms, CRM, API integrations...",
      fr: "Capturé automatiquement depuis n'importe quelle source : réseaux sociaux, formulaires en ligne, CRM, intégrations API...",
    },
  },
  {
    icon: MousePointerClick,
    title: { en: "We engage within seconds", fr: "Nous engageons en quelques secondes" },
    desc: {
      en: "Our experts reach out through the best channel — phone, email, or social — and start meaningful conversations.",
      fr: "Nos experts contactent via le meilleur canal — téléphone, email ou réseaux — et initient des conversations pertinentes.",
    },
  },
  {
    icon: HandshakeIcon,
    title: { en: "You get actionable results", fr: "Vous obtenez des résultats concrets" },
    desc: {
      en: "Detailed notes, next steps, and meetings scheduled directly in your calendar. Full CRM sync included.",
      fr: "Notes détaillées, prochaines étapes et réunions planifiées directement dans votre agenda. Synchronisation CRM incluse.",
    },
  },
];

const platforms = [
  { name: "Google Ads", icon: "https://img.icons8.com/color/100/google-ads.png" },
  { name: "Facebook", icon: "https://img.icons8.com/fluency/100/facebook-new.png" },
  { name: "Instagram", icon: "https://img.icons8.com/fluency/100/instagram-new.png" },
  { name: "TikTok", icon: "https://img.icons8.com/color/100/tiktok--v1.png" },
  { name: "LinkedIn", icon: "https://img.icons8.com/fluency/100/linkedin.png" },
  { name: "X (Twitter)", icon: "https://img.icons8.com/fluency/100/twitterx--v1.png" },
  { name: "Google Analytics", icon: "https://img.icons8.com/color/100/google-analytics.png" },
  { name: "Snapchat", icon: "https://img.icons8.com/color/100/snapchat-circled-logo--v1.png" },
];

const cmServices = [
  { icon: Share2, title: { en: "Social Media Engagement", fr: "Animation Réseaux Sociaux" }, desc: { en: "Manage interactions to build audience loyalty.", fr: "Gérez les interactions pour fidéliser votre audience." } },
  { icon: PenTool, title: { en: "Copywriting", fr: "Rédaction de Contenu" }, desc: { en: "Engaging content for web, blogs & social.", fr: "Contenu engageant pour le web, blogs & réseaux." } },
  { icon: Search, title: { en: "SEO / SEA / SMO", fr: "SEO / SEA / SMO" }, desc: { en: "Search optimization & paid advertising.", fr: "Optimisation moteurs de recherche & publicité payante." } },
  { icon: Eye, title: { en: "Brand Management", fr: "Gestion de Marque" }, desc: { en: "Maintain a strong, consistent identity.", fr: "Maintenez une identité forte et cohérente." } },
  { icon: Palette, title: { en: "Content Marketing", fr: "Content Marketing" }, desc: { en: "Create & distribute content to attract customers.", fr: "Créez & distribuez du contenu pour attirer des clients." } },
  { icon: Mail, title: { en: "Email Marketing", fr: "Email Marketing" }, desc: { en: "Design emailing campaigns that convert.", fr: "Concevez des campagnes email qui convertissent." } },
  { icon: BarChart3, title: { en: "Analytics & Reporting", fr: "Analytics & Reporting" }, desc: { en: "Data-driven insights for campaign optimization.", fr: "Analyses data-driven pour optimiser vos campagnes." } },
  { icon: Star, title: { en: "Influencer Marketing", fr: "Marketing d'Influence" }, desc: { en: "Collaborate with influencers to promote your brand.", fr: "Collaborez avec des influenceurs pour promouvoir votre marque." } },
];

export default function SalesPage() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Sales & Marketing — Digital Marketing & Community Management"
        description="Boost your brand awareness, generate qualified leads and close more deals with our digital marketing and community management services."
        keywords="digital marketing Cameroon, community management, social media marketing Africa, lead generation, SEO services"
      />
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={salesHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
              >
                <TrendingUp size={12} />
                {lang === "en" ? "Lead Generation Services" : "Services de Génération de Leads"}
              </motion.div>
              <h1 className="mb-5 font-heading text-4xl font-bold sm:text-5xl">
                {lang === "en" ? "Close More " : "Concluez Plus de "}
                <span className="text-gradient-gold">{lang === "en" ? "Deals" : "Ventes"}</span>
                {lang === "en" ? " with ROI-focused Acquisition" : " avec une Acquisition axée ROI"}
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                {lang === "en"
                  ? "Increase your brand awareness, generate qualified leads and close more deals with our comprehensive sales development services."
                  : "Augmentez la notoriété de votre marque, générez des prospects qualifiés et concluez davantage de transactions grâce à nos services complets de développement des ventes."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" onClick={() => setBookingOpen(true)}>
                  <Calendar size={16} />
                  {lang === "en" ? "Launch Your Campaign" : "Lancez Votre Campagne"}
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "+250%", label: { en: "Avg. ROI", fr: "ROI Moyen" } },
                  { value: "10K+", label: { en: "Leads Generated", fr: "Leads Générés" } },
                  { value: "15+", label: { en: "Industries", fr: "Industries" } },
                  { value: "98%", label: { en: "Satisfaction", fr: "Satisfaction" } },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 text-center"
                  >
                    <p className="text-2xl font-bold font-heading text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label[lang]}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services: Digital Marketing & Community Management */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Our Sales Factory" : "Notre Usine de Ventes"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Services That Drive Revenue" : "Des Services qui Génèrent du Revenu"}
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl bg-gradient-to-br ${svc.gradient} border border-border/50 p-8 h-full transition-all hover:border-primary/30 hover:shadow-xl`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <svc.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-bold">{svc.title[lang]}</h3>
                  <p className="mb-5 text-muted-foreground leading-relaxed">{svc.desc[lang]}</p>
                  <ul className="space-y-2">
                    {svc.features[lang].map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Steps */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "How It Works" : "Comment ça Marche"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "The Smartest Way to Engage & Convert" : "La Manière la Plus Intelligente d'Engager & Convertir"}
            </h2>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-0">
            {acquisitionSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {i < acquisitionSteps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                  )}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.div>
                  <div className="pt-1">
                    <h3 className="mb-2 font-heading text-xl font-semibold">{step.title[lang]}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc[lang]}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Platforms */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Platforms We Use" : "Plateformes Utilisées"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Expand Your Social Reach & Attract More Clients" : "Étendez Votre Portée Sociale & Attirez Plus de Clients"}
            </h2>
            <p className="text-muted-foreground">
              {lang === "en"
                ? "We publish on all major advertising platforms to bring you the best return on investment."
                : "Nous publions sur toutes les plateformes publicitaires majeures pour vous offrir le meilleur retour sur investissement."}
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl grid grid-cols-4 sm:grid-cols-8 gap-6 mb-12">
            {platforms.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-card p-2 transition-all hover:border-primary/30 hover:shadow-md">
                    <img src={p.icon} alt={p.name} className="h-8 w-8 object-contain" loading="lazy" />
                  </div>
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">{p.name}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center">
            <Button
              size="lg"
              className="gradient-gold gap-2 font-semibold text-primary-foreground"
              onClick={() => setBookingOpen(true)}
            >
              <Calendar size={16} />
              {lang === "en" ? "Launch Your Campaign" : "Lancez Votre Campagne"}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CM Services Grid */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Full Service Suite" : "Suite Complète de Services"}
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Grow Your Online Community" : "Développez Votre Communauté en Ligne"}
            </h2>
            <p className="text-muted-foreground">
              {lang === "en"
                ? "Building a strong online community takes time and dedication. We handle the day-to-day so you can focus on your business."
                : "Construire une communauté en ligne solide prend du temps et du dévouement. Nous gérons le quotidien pour que vous puissiez vous concentrer sur votre business."}
            </p>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cmServices.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-border/50 bg-card/60 p-6 h-full transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <svc.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="mb-2 font-heading text-sm font-semibold">{svc.title[lang]}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc[lang]}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-10 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                  {lang === "en" ? "Ready to Boost Your Sales?" : "Prêt à Booster Vos Ventes ?"}
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                  {lang === "en"
                    ? "Book a free strategy session and let's create a custom growth plan for your business."
                    : "Réservez une session stratégique gratuite et créons ensemble un plan de croissance sur mesure pour votre business."}
                </p>
                <Button
                  size="lg"
                  className="gradient-gold gap-2 font-semibold text-primary-foreground"
                  onClick={() => setBookingOpen(true)}
                >
                  <Calendar size={16} />
                  {lang === "en" ? "Start Closing Deals" : "Commencez à Conclure"}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
}
