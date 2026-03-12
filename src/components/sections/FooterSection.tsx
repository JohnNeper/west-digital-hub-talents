import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

export function FooterSection() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");

  const navLinks = [
    { label: t(translations.nav.home, lang), path: "/" },
    { label: t(translations.nav.services, lang), path: "/services" },
    { label: t(translations.nav.programs, lang), path: "/programs" },
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
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(translations.footer.newsletterPlaceholder, lang)}
                className="h-9 bg-background/50 border-border/50 text-sm"
              />
              <Button type="submit" size="sm" className="gradient-gold text-primary-foreground px-3">
                <ArrowRight size={14} />
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
