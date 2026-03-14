import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Calendar, Sparkles } from "lucide-react";

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
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {lang === "en" ? "Get Started" : "Commencer"}
              </p>
              <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
                {lang === "en"
                  ? "Ready to Build Your Next Digital Product?"
                  : "Prêt à Construire Votre Prochain Produit Numérique ?"}
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-muted-foreground leading-relaxed">
                {lang === "en"
                  ? "Schedule a free consultation and let's discuss how we can bring your vision to life."
                  : "Planifiez une consultation gratuite et discutons de comment donner vie à votre vision."}
              </p>
              <Button
                size="lg"
                className="gradient-gold gap-2 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                onClick={() => setBookingOpen(true)}
              >
                <Calendar size={16} />
                {lang === "en" ? "Free Trial" : "Essai Gratuit"}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
