import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Lock, BadgeCheck, FileCheck, Globe, Eye } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    icon: Lock,
    title: { en: "GDPR Compliant", fr: "Conforme RGPD" },
    desc: {
      en: "We follow European data protection standards to safeguard your users' privacy.",
      fr: "Nous suivons les normes européennes de protection des données pour garantir la vie privée de vos utilisateurs.",
    },
  },
  {
    icon: Shield,
    title: { en: "ISO 27001 Practices", fr: "Pratiques ISO 27001" },
    desc: {
      en: "Information security management aligned with international standards.",
      fr: "Gestion de la sécurité de l'information alignée sur les normes internationales.",
    },
  },
  {
    icon: BadgeCheck,
    title: { en: "NDA & IP Protection", fr: "NDA & Protection IP" },
    desc: {
      en: "All projects are covered by NDAs. Full intellectual property transfer on delivery.",
      fr: "Tous les projets sont couverts par des NDA. Transfert complet de propriété intellectuelle à la livraison.",
    },
  },
  {
    icon: FileCheck,
    title: { en: "SOC 2 Aligned", fr: "Aligné SOC 2" },
    desc: {
      en: "Security, availability and confidentiality controls following SOC 2 framework.",
      fr: "Contrôles de sécurité, disponibilité et confidentialité suivant le framework SOC 2.",
    },
  },
  {
    icon: Eye,
    title: { en: "Code Audits", fr: "Audits de Code" },
    desc: {
      en: "Regular code reviews and security audits on every project before deployment.",
      fr: "Revues de code régulières et audits de sécurité sur chaque projet avant le déploiement.",
    },
  },
  {
    icon: Globe,
    title: { en: "International Standards", fr: "Normes Internationales" },
    desc: {
      en: "Development practices aligned with OWASP, WCAG and industry best practices.",
      fr: "Pratiques de développement alignées sur OWASP, WCAG et les meilleures pratiques de l'industrie.",
    },
  },
];

export function CertificationsSection() {
  const { lang } = useLang();

  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {lang === "en" ? "Trust & Security" : "Confiance & Sécurité"}
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
            {lang === "en" ? "Certifications & Compliance" : "Certifications & Conformité"}
          </h2>
          <p className="text-muted-foreground">
            {lang === "en"
              ? "Your data, code, and intellectual property are protected by international standards."
              : "Vos données, votre code et votre propriété intellectuelle sont protégés par des normes internationales."}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-border/50 bg-card p-7 h-full transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <cert.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-semibold mb-2">{cert.title[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.desc[lang]}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}