import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = ["about", "services", "expertise", "startups", "outsourcing", "space", "projects", "contact"] as const;

export function Navbar() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/logo.png" alt="West Digital Hub" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t(translations.nav[key as keyof typeof translations.nav] as Record<string, string>, lang)}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggle}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Button size="sm" onClick={() => scrollTo("contact")} className="gradient-gold font-semibold text-primary-foreground">
            {t(translations.nav.startProject, lang)}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="block w-full py-2.5 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t(translations.nav[key as keyof typeof translations.nav] as Record<string, string>, lang)}
            </button>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <button onClick={toggle} className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              {lang === "en" ? "FR" : "EN"}
            </button>
            <Button size="sm" onClick={() => scrollTo("contact")} className="gradient-gold font-semibold text-primary-foreground">
              {t(translations.nav.startProject, lang)}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
