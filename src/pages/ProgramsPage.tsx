import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingModal } from "@/components/BookingModal";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, Clock, ExternalLink, Check, Briefcase, ArrowRight,
  Calendar, Users, Award, Globe, Monitor, MapPin, ClipboardCheck,
  BookOpen, Code, Cpu, Smartphone, Database, Brain, Shield,
} from "lucide-react";
import bootcampImg from "@/assets/bootcamp-image.jpg";
import bootcampCodingImg from "@/assets/bootcamp-coding.jpg";
import internshipImg from "@/assets/internship-image.jpg";
import trainingProcessImg from "@/assets/training-process.jpg";
import interviewImg from "@/assets/interview-process.jpg";

const BOOTCAMP_APPLY_URL = "https://forms.google.com/your-bootcamp-form";
const INTERNSHIP_APPLY_URL = "https://forms.google.com/your-internship-form";

const bootcampTracks = [
  {
    title: { en: "Full-Stack Web Development", fr: "Développement Web Full-Stack" },
    icon: Code,
    durations: ["4", "6", "8"],
    modes: ["online", "onsite"],
    description: {
      en: "Master modern web technologies from frontend to backend. Build production-ready applications with React, Node.js, and cloud deployment.",
      fr: "Maîtrisez les technologies web modernes du frontend au backend. Construisez des applications prêtes pour la production avec React, Node.js et le déploiement cloud.",
    },
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: { en: "Mobile App Development", fr: "Développement d'Applications Mobiles" },
    icon: Smartphone,
    durations: ["4", "6", "8"],
    modes: ["online", "onsite"],
    description: {
      en: "Build cross-platform mobile applications for iOS and Android. Learn React Native, Flutter, and mobile-first design principles.",
      fr: "Construisez des applications mobiles multiplateformes pour iOS et Android. Apprenez React Native, Flutter et les principes du design mobile-first.",
    },
    skills: ["React Native", "Flutter", "Firebase", "REST APIs", "UI/UX", "App Store"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: { en: "AI & Data Science", fr: "IA & Data Science" },
    icon: Brain,
    durations: ["6", "8"],
    modes: ["online", "onsite"],
    description: {
      en: "Dive into artificial intelligence, machine learning, and data analytics. Build intelligent systems that solve real-world problems.",
      fr: "Plongez dans l'intelligence artificielle, le machine learning et l'analyse de données. Construisez des systèmes intelligents qui résolvent des problèmes réels.",
    },
    skills: ["Python", "TensorFlow", "Pandas", "NLP", "Computer Vision", "MLOps"],
    color: "from-purple-500/10 to-violet-500/10",
  },
  {
    title: { en: "Cybersecurity & Cloud", fr: "Cybersécurité & Cloud" },
    icon: Shield,
    durations: ["4", "6"],
    modes: ["online", "onsite"],
    description: {
      en: "Learn to protect digital assets and manage cloud infrastructure. Master security best practices and cloud architecture.",
      fr: "Apprenez à protéger les actifs numériques et gérer l'infrastructure cloud. Maîtrisez les meilleures pratiques de sécurité et l'architecture cloud.",
    },
    skills: ["AWS", "Azure", "Kubernetes", "Ethical Hacking", "SIEM", "DevSecOps"],
    color: "from-red-500/10 to-orange-500/10",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: { en: "Application", fr: "Candidature" },
    desc: { en: "Submit your application with CV and motivation letter via our online form.", fr: "Soumettez votre candidature avec CV et lettre de motivation via notre formulaire en ligne." },
  },
  {
    icon: Users,
    title: { en: "Interview", fr: "Entretien" },
    desc: { en: "Technical and motivational interview to assess your level and goals.", fr: "Entretien technique et motivationnel pour évaluer votre niveau et vos objectifs." },
  },
  {
    icon: BookOpen,
    title: { en: "Intensive Training", fr: "Formation Intensive" },
    desc: { en: "Hands-on learning with real projects, mentorship and weekly evaluations.", fr: "Apprentissage pratique avec des projets réels, du mentorat et des évaluations hebdomadaires." },
  },
  {
    icon: Award,
    title: { en: "Certification", fr: "Certification" },
    desc: { en: "Earn an internationally recognized certification validated by our partners.", fr: "Obtenez une certification reconnue internationalement validée par nos partenaires." },
  },
];

export default function ProgramsPage() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={trainingProcessImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/92" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
            >
              <GraduationCap size={14} />
              {lang === "en" ? "International Standards · Partner Validated" : "Standards Internationaux · Validé par nos Partenaires"}
            </motion.div>
            <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Launch Your " : "Lancez Votre "}
              <span className="text-gradient-gold">{lang === "en" ? "Tech Career" : "Carrière Tech"}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {lang === "en"
                ? "Join our internationally validated training programs. From interview to certification, we prepare you for the global tech market."
                : "Rejoignez nos programmes de formation validés internationalement. De l'entretien à la certification, nous vous préparons pour le marché tech mondial."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" asChild>
                <a href={BOOTCAMP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                  {lang === "en" ? "Join a Program" : "Rejoindre un Programme"} <ArrowRight size={16} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => setBookingOpen(true)}>
                <Calendar size={16} />
                {lang === "en" ? "Book a Call" : "Prendre RDV"}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Our Admission Process" : "Notre Processus d'Admission"}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {lang === "en"
                ? "Every candidate goes through a rigorous process to ensure our international partners' standards are met."
                : "Chaque candidat passe par un processus rigoureux pour garantir le respect des standards de nos partenaires internationaux."}
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative rounded-xl border border-border bg-card p-6 text-center h-full transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="text-primary" size={24} />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                    {lang === "en" ? `Step ${i + 1}` : `Étape ${i + 1}`}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">{step.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc[lang]}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6} className="flex justify-center">
            <div className="rounded-xl border border-border bg-card overflow-hidden md:flex max-w-4xl">
              <img src={interviewImg} alt="Interview" className="w-full md:w-1/3 object-cover" loading="lazy" />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {lang === "en" ? "Why Start With an Interview?" : "Pourquoi Commencer par un Entretien ?"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {lang === "en"
                    ? "Our international partners require us to maintain high standards. The interview ensures every candidate is placed in the right program and receives personalized mentorship for optimal growth."
                    : "Nos partenaires internationaux exigent que nous maintenions des standards élevés. L'entretien garantit que chaque candidat est placé dans le bon programme et reçoit un mentorat personnalisé pour une croissance optimale."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs gap-1">
                    <Globe size={10} /> {lang === "en" ? "International Standards" : "Standards Internationaux"}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs gap-1">
                    <Award size={10} /> {lang === "en" ? "Partner Validated" : "Validé Partenaires"}
                  </Badge>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bootcamp Tracks */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16">
            <div className="grid gap-10 items-center md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <GraduationCap className="text-primary" size={36} />
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                  {lang === "en" ? "Bootcamp Programs" : "Programmes Bootcamp"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {lang === "en"
                    ? "Choose your track, duration (4, 6 or 8 months), and learning mode (online or on-site). Our intensive programs are designed by industry experts to make you job-ready."
                    : "Choisissez votre parcours, durée (4, 6 ou 8 mois), et mode d'apprentissage (en ligne ou sur site). Nos programmes intensifs sont conçus par des experts de l'industrie pour vous rendre opérationnel."}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Monitor size={16} className="text-primary" /> {lang === "en" ? "Online" : "En ligne"}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {lang === "en" ? "On-site (Bafoussam)" : "Sur site (Bafoussam)"}</div>
                  <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> 4, 6 {lang === "en" ? "or" : "ou"} 8 {lang === "en" ? "months" : "mois"}</div>
                </div>
              </div>
              <img
                src={bootcampCodingImg}
                alt="Bootcamp"
                className="rounded-xl border border-border object-cover w-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Tracks Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {bootcampTracks.map((track, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`group rounded-xl border border-border bg-gradient-to-br ${track.color} p-6 transition-all hover:border-primary/40 hover:glow-gold flex flex-col h-full`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                      <track.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{track.title[lang]}</h3>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {track.durations.map(d => (
                          <span key={d} className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                            <Clock size={10} /> {d} {lang === "en" ? "mo" : "mois"}
                          </span>
                        ))}
                        <span className="text-xs text-muted-foreground">·</span>
                        {track.modes.map(m => (
                          <span key={m} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            {m === "online" ? <Monitor size={10} /> : <MapPin size={10} />}
                            {m === "online" ? (lang === "en" ? "Online" : "En ligne") : (lang === "en" ? "On-site" : "Sur site")}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground flex-1">{track.description[lang]}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {track.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-background/60 text-foreground border border-border text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <Button asChild className="gradient-gold gap-2 font-semibold text-primary-foreground w-full">
                    <a href={BOOTCAMP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                      {lang === "en" ? "Join this Program" : "Rejoindre ce Programme"} <ExternalLink size={14} />
                    </a>
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid gap-10 items-center md:grid-cols-2 mb-12">
              <div className="md:order-2">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <Briefcase className="text-primary" size={36} />
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold">
                  {lang === "en" ? "Internship Program" : "Programme de Stage"}
                </h2>
                <p className="mb-2 text-muted-foreground leading-relaxed">
                  {lang === "en"
                    ? "Gain hands-on experience working on real client projects alongside our senior developers. Our internship program provides mentorship, training and the opportunity to contribute to production-level software."
                    : "Acquérez une expérience pratique en travaillant sur de vrais projets clients aux côtés de nos développeurs seniors. Notre programme de stage offre du mentorat, de la formation et l'opportunité de contribuer à des logiciels de niveau production."}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-primary font-medium">
                  <Clock size={14} /> {lang === "en" ? "3-6 months" : "3-6 mois"}
                </div>
              </div>
              <div className="md:order-1">
                <img
                  src={internshipImg}
                  alt="Internship"
                  className="rounded-xl border border-border object-cover w-full aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 font-heading text-xl font-semibold text-center">
                {lang === "en" ? "What You'll Get" : "Ce que Vous Obtiendrez"}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 mb-8">
                {(lang === "en"
                  ? ["Mentorship from senior developers", "Work on real client projects", "Professional development workshops", "Certificate of completion", "Job placement assistance", "Networking with industry professionals"]
                  : ["Mentorat par des développeurs seniors", "Travail sur de vrais projets clients", "Ateliers de développement professionnel", "Certificat de fin de stage", "Aide au placement professionnel", "Réseautage avec des professionnels"]
                ).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="text-primary flex-shrink-0" size={16} /> {benefit}
                  </div>
                ))}
              </div>
              <div className="text-center space-y-3">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button asChild size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground">
                    <a href={INTERNSHIP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                      {lang === "en" ? "Apply for Internship" : "Postuler pour un Stage"} <ArrowRight size={16} />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" onClick={() => setBookingOpen(true)}>
                    <Calendar size={16} />
                    {lang === "en" ? "Book a Call" : "Prendre RDV"}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {lang === "en" ? "Applications are processed through our partner platform" : "Les candidatures sont traitées via notre plateforme partenaire"}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 text-center sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                {lang === "en" ? "Ready to Start Your Journey?" : "Prêt à Commencer Votre Parcours ?"}
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                {lang === "en"
                  ? "Take the first step toward a career in tech. Apply now or book a call to learn more about our programs."
                  : "Faites le premier pas vers une carrière dans la tech. Postulez maintenant ou réservez un appel pour en savoir plus sur nos programmes."}
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" asChild>
                  <a href={BOOTCAMP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                    {lang === "en" ? "Apply Now" : "Postuler Maintenant"} <ArrowRight size={16} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => setBookingOpen(true)}>
                  <Calendar size={16} />
                  {lang === "en" ? "Book a Call" : "Prendre RDV"}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
}
