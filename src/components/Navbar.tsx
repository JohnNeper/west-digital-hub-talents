import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "programs", path: "/programs" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/contact" },
] as const;

export function Navbar() {
  const { lang, toggle } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="West Digital Hub" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground ${
                location.pathname === path
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {t(translations.nav[key as keyof typeof translations.nav] as Record<string, string>, lang)}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggle}
            className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Button size="sm" asChild className="gradient-gold font-semibold text-primary-foreground">
            <Link to="/contact">{t(translations.nav.startProject, lang)}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              to={path}
              onClick={() => setOpen(false)}
              className={`block w-full py-2.5 text-left text-sm transition-colors hover:text-foreground ${
                location.pathname === path ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              {t(translations.nav[key as keyof typeof translations.nav] as Record<string, string>, lang)}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <button onClick={toggle} className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              {lang === "en" ? "FR" : "EN"}
            </button>
            <Button size="sm" asChild className="gradient-gold font-semibold text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>{t(translations.nav.startProject, lang)}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
