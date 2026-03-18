import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import fintechImg from "@/assets/project-fintech.jpg";
import agritechImg from "@/assets/project-agritech.jpg";
import healthtechImg from "@/assets/project-healthtech.jpg";

const caseStudies = [
  {
    image: fintechImg,
    title: { en: "FinTech Payment Platform", fr: "Plateforme de Paiement FinTech" },
    client: { en: "Series A Startup — France", fr: "Startup Série A — France" },
    desc: {
      en: "Built a cross-border payment platform handling 10,000+ daily transactions across 5 African countries.",
      fr: "Construction d'une plateforme de paiement transfrontalier gérant plus de 10 000 transactions quotidiennes dans 5 pays africains.",
    },
    metrics: [
      { icon: TrendingUp, value: "+340%", label: { en: "Transaction Growth", fr: "Croissance Transactions" } },
      { icon: Clock, value: "8 weeks", label: { en: "MVP Delivery", fr: "Livraison MVP" } },
      { icon: DollarSign, value: "55%", label: { en: "Cost Savings", fr: "Économies" } },
    ],
    tags: ["React Native", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    image: agritechImg,
    title: { en: "AgriTech Supply Chain", fr: "Chaîne d'Approvisionnement AgriTech" },
    client: { en: "AgriTech Enterprise — Cameroon", fr: "Entreprise AgriTech — Cameroun" },
    desc: {
      en: "Digitized the entire agricultural supply chain, connecting 2,000+ farmers directly to urban markets.",
      fr: "Numérisation de toute la chaîne d'approvisionnement agricole, connectant plus de 2 000 agriculteurs directement aux marchés urbains.",
    },
    metrics: [
      { icon: TrendingUp, value: "+40%", label: { en: "Revenue Increase", fr: "Hausse du CA" } },
      { icon: Users, value: "2,000+", label: { en: "Farmers Connected", fr: "Agriculteurs Connectés" } },
      { icon: Clock, value: "12 weeks", label: { en: "Full Delivery", fr: "Livraison Complète" } },
    ],
    tags: ["Next.js", "Python", "AI/ML", "AWS"],
  },
  {
    image: healthtechImg,
    title: { en: "Telemedicine Platform", fr: "Plateforme de Télémédecine" },
    client: { en: "HealthTech NGO — Senegal", fr: "ONG HealthTech — Sénégal" },
    desc: {
      en: "Enabled remote medical consultations for 50,000+ patients across rural communities in West Africa.",
      fr: "Consultations médicales à distance pour plus de 50 000 patients dans les communautés rurales d'Afrique de l'Ouest.",
    },
    metrics: [
      { icon: Users, value: "50,000+", label: { en: "Patients Served", fr: "Patients Servis" } },
      { icon: TrendingUp, value: "98%", label: { en: "Uptime", fr: "Disponibilité" } },
      { icon: DollarSign, value: "60%", label: { en: "Cost Reduction", fr: "Réduction Coûts" } },
    ],
    tags: ["Flutter", "Firebase", "WebRTC", "GCP"],
  },
];

export function CaseStudiesSection() {
  const { lang } = useLang();

  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {lang === "en" ? "Proven Results" : "Résultats Prouvés"}
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
            {lang === "en" ? "Case Studies" : "Études de Cas"}
          </h2>
          <p className="text-muted-foreground">
            {lang === "en"
              ? "Real projects, real impact. See how we've helped companies across 15+ countries."
              : "Projets réels, impact réel. Découvrez comment nous avons aidé des entreprises dans plus de 15 pays."}
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } md:flex`}
              >
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title[lang]}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <p className="text-xs font-medium text-primary mb-2">{study.client[lang]}</p>
                  <h3 className="font-heading text-2xl font-bold mb-3">{study.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{study.desc[lang]}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, j) => (
                      <div key={j} className="text-center rounded-xl bg-muted/50 p-3">
                        <metric.icon size={16} className="text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold font-heading text-primary">{metric.value}</p>
                        <p className="text-[10px] text-muted-foreground">{metric.label[lang]}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}