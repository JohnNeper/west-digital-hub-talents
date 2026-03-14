import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/512px-Octicons-mark-github.svg.png" },
];

export function PartnersSection() {
  const { lang } = useLang();

  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {lang === "en" ? "Trusted Technologies & Partners" : "Technologies & Partenaires de Confiance"}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-7 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0 dark:invert dark:opacity-30 dark:hover:opacity-60"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
