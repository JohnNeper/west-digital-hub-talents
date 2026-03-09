import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Calendar } from "lucide-react";

// Replace with your actual Calendly URL
const CALENDLY_URL = "https://calendly.com/your-username/30min";

export default function ContactPage() {
  const { lang } = useLang();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">{t(translations.contact.title, lang)}</h1>
            <p className="text-lg text-muted-foreground">{t(translations.contact.subtitle, lang)}</p>
          </AnimatedSection>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Info */}
            <AnimatedSection delay={0.1} className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 font-heading text-xl font-semibold">{t(translations.contact.info, lang)}</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm font-medium">{t(translations.footer.location, lang)}</p>
                      <p className="text-xs text-muted-foreground">Cameroon</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <a href="mailto:contact@westdigitalhub.com" className="text-sm font-medium hover:text-primary transition-colors">contact@westdigitalhub.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <a href="tel:+237600000000" className="text-sm font-medium hover:text-primary transition-colors">+237 6XX XXX XXX</a>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm font-medium mb-3">{lang === "en" ? "Follow Us" : "Suivez-nous"}</p>
                  <div className="flex gap-3">
                    <a href="#" className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Linkedin size={18} /></a>
                    <a href="#" className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Twitter size={18} /></a>
                    <a href="#" className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Facebook size={18} /></a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Calendly Embed */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Calendar className="text-primary" size={24} />
                  <div>
                    <h2 className="font-heading text-xl font-semibold">{t(translations.contact.bookCall, lang)}</h2>
                    <p className="text-sm text-muted-foreground">{t(translations.contact.bookCallDesc, lang)}</p>
                  </div>
                </div>
                <div
                  className="calendly-inline-widget rounded-lg overflow-hidden"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: "280px", height: "630px" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
