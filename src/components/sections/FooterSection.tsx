import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function FooterSection() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navLinks = [
    { label: t(translations.nav.about, lang), id: "about" },
    { label: t(translations.nav.services, lang), id: "services" },
    { label: t(translations.nav.expertise, lang), id: "expertise" },
    { label: t(translations.nav.projects, lang), id: "projects" },
  ];

  const serviceLinks = [
    { label: t(translations.services.consulting.title, lang) },
    { label: t(translations.services.development.title, lang) },
    { label: t(translations.services.outsourcing.title, lang) },
  ];

  return (
    <footer id="contact" className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="West Digital Hub" className="mb-4 h-10 w-auto" />
            <p className="text-sm text-muted-foreground">{t(translations.footer.description, lang)}</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Linkedin size={18} /></a>
              <a href="#" className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Twitter size={18} /></a>
              <a href="#" className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold">{t(translations.footer.quickLinks, lang)}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold">{t(translations.footer.servicesTitle, lang)}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo("services")} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold">{t(translations.footer.contactTitle, lang)}</h4>
            <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> {t(translations.footer.location, lang)}</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> contact@westdigitalhub.com</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +237 6XX XXX XXX</li>
            </ul>

            <h4 className="mb-3 font-heading text-sm font-semibold">{t(translations.footer.newsletter, lang)}</h4>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(translations.footer.newsletterPlaceholder, lang)}
                className="h-9 bg-secondary border-border text-sm"
              />
              <Button type="submit" size="sm" className="gradient-gold text-primary-foreground text-xs">
                {t(translations.footer.subscribe, lang)}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} West Digital Hub. {t(translations.footer.rights, lang)}
        </div>
      </div>
    </footer>
  );
}
