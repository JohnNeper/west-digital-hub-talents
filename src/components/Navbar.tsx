import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Menu, X, Sun, Moon, Calendar } from "lucide-react";

const navItems = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "programs", path: "/programs" },
  { key: "sales", path: "/sales" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/contact" },
] as const;

export function Navbar() {
  const { lang, toggle } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-2xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="West Digital Hub" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all ${
                  location.pathname === path
                    ? "text-foreground bg-muted/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {t(translations.nav[key as keyof typeof translations.nav] as Record<string, string>, lang)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-1.5 lg:flex">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:text-foreground hover:bg-muted/50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={toggle}
              className="flex h-9 items-center justify-center rounded-lg px-2.5 text-xs font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-muted/50"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <Button
              size="sm"
              className="gradient-gold gap-2 font-semibold text-primary-foreground shadow-sm shadow-primary/20 ml-1"
              onClick={() => setBookingOpen(true)}
            >
              <Calendar size={13} />
              {lang === "en" ? "Book a Call" : "Prendre RDV"}
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setOpen(!open)} className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border/30 bg-background/95 backdrop-blur-xl px-4 pb-5 pt-2 lg:hidden animate-fade-in">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                onClick={() => setOpen(false)}
                className={`block w-full rounded-lg py-2.5 px-3 text-sm transition-all ${
                  location.pathname === path ? "text-foreground font-medium bg-muted/30" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(translations.nav[key as keyof typeof translations.nav] as Record<string, string>, lang)}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3 px-3">
              <button onClick={toggle} className="rounded-lg border border-border/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                {lang === "en" ? "FR" : "EN"}
              </button>
              <Button
                size="sm"
                className="gradient-gold gap-2 font-semibold text-primary-foreground"
                onClick={() => { setBookingOpen(true); setOpen(false); }}
              >
                <Calendar size={13} />
                {lang === "en" ? "Book a Call" : "Prendre RDV"}
              </Button>
            </div>
          </div>
        )}
      </nav>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
