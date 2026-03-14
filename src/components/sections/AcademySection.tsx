import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowRight, Check, BookOpen, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import academyImg from "@/assets/academy-dual.jpg";
import bootcampCodingImg from "@/assets/bootcamp-coding.jpg";

const advantages = {
  en: [
    "Learn by building real client projects",
    "Gain professional experience from day one",
    "Mentorship from senior industry engineers",
    "Internationally recognized certification",
    "92% employment rate after graduation",
    "4 to 8 month intensive programs",
  ],
  fr: [
    "Apprenez en construisant de vrais projets clients",
    "Gagnez de l'expérience professionnelle dès le premier jour",
    "Mentorat par des ingénieurs seniors de l'industrie",
    "Certification reconnue internationalement",
    "92% de taux d'emploi après la formation",
    "Programmes intensifs de 4 à 8 mois",
  ],
};

const tracks = [
  { icon: Code, title: { en: "Full-Stack Development", fr: "Développement Full-Stack" } },
  { icon: BookOpen, title: { en: "Mobile Development", fr: "Développement Mobile" } },
  { icon: Users, title: { en: "AI & Data Science", fr: "IA & Data Science" } },
];

export function AcademySection() {
  const { lang } = useLang();

  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {lang === "en" ? "West Digital Hub Academy" : "Académie West Digital Hub"}
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
            {lang === "en"
              ? "One Foot in School, One Foot in the Company"
              : "Un Pied à l'École, Un Pied en Entreprise"}
          </h2>
          <p className="text-muted-foreground">
            {lang === "en"
              ? "Our unique approach combines intensive training with real professional immersion to fast-track your tech career."
              : "Notre approche unique combine formation intensive et immersion professionnelle réelle pour accélérer votre carrière tech."}
          </p>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <AnimatedSection>
            <div className="relative">
              <img
                src={academyImg}
                alt="Academy dual learning"
                className="rounded-2xl w-full object-cover aspect-video shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{lang === "en" ? "Employment Rate" : "Taux d'Emploi"}</p>
                    <p className="font-heading text-lg font-bold text-primary">92%</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold">
                {lang === "en" ? "Why Our Academy?" : "Pourquoi Notre Académie ?"}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {lang === "en"
                ? "Unlike traditional schools, our students work on real company projects from day one. This dual approach — academic rigor meets professional reality — ensures graduates are immediately productive and job-ready."
                : "Contrairement aux écoles traditionnelles, nos étudiants travaillent sur de vrais projets d'entreprise dès le premier jour. Cette double approche — rigueur académique et réalité professionnelle — garantit que les diplômés sont immédiatement productifs et prêts pour le marché."}
            </p>
            <ul className="space-y-3 mb-8">
              {advantages[lang].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 text-primary flex-shrink-0" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="gradient-gold gap-2 font-semibold text-primary-foreground shadow-lg shadow-primary/20">
              <Link to="/programs">{lang === "en" ? "Explore Programs" : "Découvrir les Programmes"} <ArrowRight size={16} /></Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* Bootcamp tracks preview */}
        <AnimatedSection delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-3">
            {tracks.map(({ icon: Icon, title }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">{title[lang]}</p>
                  <p className="text-xs text-muted-foreground">{lang === "en" ? "4-8 months" : "4-8 mois"}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
