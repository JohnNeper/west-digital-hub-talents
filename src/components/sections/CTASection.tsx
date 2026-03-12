import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function CTASection() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-10 text-center sm:p-20">
            <div className="absolute top-6 right-8 opacity-10">
              <Sparkles size={60} className="text-primary" />
            </div>
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{lang === "en" ? "Get Started" : "Commencer"}</p>
              <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">{t(translations.cta.title, lang)}</h2>
              <p className="mx-auto mb-10 max-w-xl text-muted-foreground leading-relaxed">{t(translations.cta.subtitle, lang)}</p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="gradient-gold gap-2 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                  <Link to="/contact">{t(translations.cta.btn1, lang)} <ArrowRight size={16} /></Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-border/80 hover:border-primary/40 transition-all" onClick={() => setBookingOpen(true)}>
                  <Calendar size={16} /> {lang === "en" ? "Book a Call" : "Prendre RDV"}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
