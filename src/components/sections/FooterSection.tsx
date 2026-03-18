import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, ArrowRight, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NEWSLETTER_EMAIL = "ngnigupepafaha@gmail.com";

export function FooterSection() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { toast } = useToast();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");

    // Send via mailto with pre-filled subject/body
    const subject = encodeURIComponent("Newsletter Subscription - West Digital Hub");
    const body = encodeURIComponent(`New newsletter subscription request:\n\nEmail: ${email}\nDate: ${new Date().toLocaleDateString()}\n\nThis subscriber would like to receive updates from West Digital Hub.`);

    window.open(`mailto:${NEWSLETTER_EMAIL}?subject=${subject}&body=${body}`, "_blank");

    setTimeout(() => {
      setStatus("sent");
      toast({
        title: lang === "en" ? "Subscription request sent!" : "Demande d'abonnement envoyée !",
        description: lang === "en"
          ? "Your email client should open. Please send the pre-filled email to complete your subscription."
          : "Votre client email devrait s'ouvrir. Envoyez l'email pré-rempli pour compléter votre abonnement.",
      });
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  const navLinks = [
    { label: t(translations.nav.home, lang), path: "/" },
    { label: t(translations.nav.services, lang), path: "/services" },
    { label: t(translations.nav.outsourcing, lang), path: "/outsourcing" },
    { label: t(translations.nav.programs, lang), path: "/programs" },
    { label: t(translations.nav.sales, lang), path: "/sales" },
    { label: t(translations.nav.projects, lang), path: "/projects" },
    { label: t(translations.nav.contact, lang), path: "/contact" },
  ];

  const serviceLinks = [
    { label: t(translations.services.consulting.title, lang), path: "/services" },
    { label: t(translations.services.development.title, lang), path: "/services" },
    { label: t(translations.services.outsourcing.title, lang), path: "/services" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="West Digital Hub" className="mb-4 h-10 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">{t(translations.footer.description, lang)}</p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-sm">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">{t(translations.footer.quickLinks, lang)}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">{t(translations.footer.servicesTitle, lang)}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">{t(translations.footer.contactTitle, lang)}</h4>
            <ul className="mb-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><MapPin size={14} className="text-primary flex-shrink-0" /> {t(translations.footer.location, lang)}</li>
              <li className="flex items-center gap-3"><Mail size={14} className="text-primary flex-shrink-0" /> contact@westdigitalhub.com</li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-primary flex-shrink-0" /> +237 6XX XXX XXX</li>
            </ul>

            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">{t(translations.footer.newsletter, lang)}</h4>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(translations.footer.newsletterPlaceholder, lang)}
                className="h-9 bg-background/50 border-border/50 text-sm"
                required
                disabled={status === "sending"}
              />
              <Button
                type="submit"
                size="sm"
                className="gradient-gold text-primary-foreground px-3"
                disabled={status === "sending" || status === "sent"}
              >
                {status === "sending" ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : status === "sent" ? (
                  <Check size={14} />
                ) : (
                  <ArrowRight size={14} />
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} West Digital Hub. {t(translations.footer.rights, lang)}
        </div>
      </div>
    </footer>
  );
}
