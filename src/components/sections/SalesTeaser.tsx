import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Megaphone, Users } from "lucide-react";
import { motion } from "framer-motion";

export function SalesTeaser() {
  const { lang } = useLang();

  return (
    <section className="py-28 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Sales & Marketing" : "Ventes & Marketing"}
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en"
                ? "Boost Your Brand & Close More Deals"
                : "Boostez Votre Marque & Concluez Plus de Ventes"}
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              {lang === "en"
                ? "Increase your brand awareness, generate qualified leads and close more deals with our comprehensive sales development services."
                : "Augmentez la notoriété de votre marque, générez des prospects qualifiés et concluez davantage de transactions grâce à nos services complets de développement des ventes."}
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Megaphone,
                  title: { en: "Digital Marketing", fr: "Marketing Digital" },
                  desc: { en: "Targeted campaigns across all major platforms", fr: "Campagnes ciblées sur toutes les plateformes majeures" },
                },
                {
                  icon: Users,
                  title: { en: "Community Management", fr: "Community Management" },
                  desc: { en: "Build and engage your online community", fr: "Construisez et engagez votre communauté en ligne" },
                },
                {
                  icon: TrendingUp,
                  title: { en: "Lead Generation", fr: "Génération de Leads" },
                  desc: { en: "Convert prospects into loyal customers", fr: "Convertissez vos prospects en clients fidèles" },
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.title[lang]}</p>
                    <p className="text-sm text-muted-foreground">{item.desc[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button size="lg" className="gap-2" asChild>
              <Link to="/sales">
                {lang === "en" ? "Explore Sales Services" : "Découvrir nos Services Ventes"} <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "+250%", label: { en: "Avg. ROI", fr: "ROI Moyen" } },
                  { value: "10K+", label: { en: "Leads Generated", fr: "Leads Générés" } },
                  { value: "15+", label: { en: "Industries Served", fr: "Industries Servies" } },
                  { value: "98%", label: { en: "Client Satisfaction", fr: "Satisfaction Client" } },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="rounded-xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <p className="text-3xl font-bold font-heading text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label[lang]}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
