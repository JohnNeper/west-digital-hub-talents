import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
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
  BookOpen, Code, Smartphone, Brain, Shield, Star,
  Target, Rocket, MessageSquare, FileCheck, Laptop,
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
    gradient: "from-blue-500/8 to-cyan-500/8 dark:from-blue-500/12 dark:to-cyan-500/12",
    outcomes: {
      en: ["Build 5+ real-world projects", "Job-ready portfolio", "Cloud deployment mastery"],
      fr: ["Construire 5+ projets réels", "Portfolio prêt pour l'emploi", "Maîtrise du déploiement cloud"],
    },
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
    gradient: "from-green-500/8 to-emerald-500/8 dark:from-green-500/12 dark:to-emerald-500/12",
    outcomes: {
      en: ["Publish to App Store & Play Store", "Cross-platform expertise", "Mobile-first design skills"],
      fr: ["Publier sur App Store & Play Store", "Expertise multiplateforme", "Compétences design mobile-first"],
    },
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
    gradient: "from-purple-500/8 to-violet-500/8 dark:from-purple-500/12 dark:to-violet-500/12",
    outcomes: {
      en: ["Build AI-powered applications", "Data pipeline expertise", "Machine learning deployment"],
      fr: ["Construire des applications IA", "Expertise pipeline de données", "Déploiement machine learning"],
    },
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
    gradient: "from-red-500/8 to-orange-500/8 dark:from-red-500/12 dark:to-orange-500/12",
    outcomes: {
      en: ["Security certification prep", "Cloud architecture design", "Penetration testing skills"],
      fr: ["Préparation certification sécurité", "Conception d'architecture cloud", "Compétences en test d'intrusion"],
    },
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: { en: "Application", fr: "Candidature" },
    desc: { en: "Submit your application with CV and motivation letter via our online form.", fr: "Soumettez votre candidature avec CV et lettre de motivation via notre formulaire en ligne." },
    detail: { en: "Takes 10 minutes", fr: "Prend 10 minutes" },
  },
  {
    icon: MessageSquare,
    title: { en: "Interview", fr: "Entretien" },
    desc: { en: "Technical and motivational interview to assess your level and goals.", fr: "Entretien technique et motivationnel pour évaluer votre niveau et vos objectifs." },
    detail: { en: "30-45 min session", fr: "Session de 30-45 min" },
  },
  {
    icon: FileCheck,
    title: { en: "Assessment", fr: "Évaluation" },
    desc: { en: "A practical coding challenge to validate your potential and learning aptitude.", fr: "Un défi de programmation pratique pour valider votre potentiel et votre aptitude à apprendre." },
    detail: { en: "48h to complete", fr: "48h pour compléter" },
  },
  {
    icon: BookOpen,
    title: { en: "Intensive Training", fr: "Formation Intensive" },
    desc: { en: "Hands-on learning with real projects, mentorship and weekly evaluations.", fr: "Apprentissage pratique avec des projets réels, du mentorat et des évaluations hebdomadaires." },
    detail: { en: "4-8 months", fr: "4-8 mois" },
  },
  {
    icon: Award,
    title: { en: "Certification", fr: "Certification" },
    desc: { en: "Earn an internationally recognized certification validated by our partners.", fr: "Obtenez une certification reconnue internationalement validée par nos partenaires." },
    detail: { en: "Partner validated", fr: "Validé partenaires" },
  },
];

const stats = [
  { value: "200+", label: { en: "Graduates", fr: "Diplômés" }, icon: GraduationCap },
  { value: "92%", label: { en: "Employment Rate", fr: "Taux d'Emploi" }, icon: Target },
  { value: "15+", label: { en: "Partner Companies", fr: "Entreprises Partenaires" }, icon: Briefcase },
  { value: "4.8/5", label: { en: "Student Rating", fr: "Note Étudiants" }, icon: Star },
];

export default function ProgramsPage() {
  const { lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Bootcamp & Academy — Launch Your Tech Career"
        description="Intensive bootcamp programs in Web Development, Mobile, AI & Cybersecurity. 92% employment rate. Online and on-site in Cameroon. Apply now."
        keywords="bootcamp Cameroon, coding bootcamp Africa, tech training, web development course, AI training, internship Cameroon"
      />
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={trainingProcessImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95 dark:from-background/95 dark:via-background/92 dark:to-background/90" />
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
            <h1 className="mb-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Launch Your " : "Lancez Votre "}
              <span className="text-gradient-gold">{lang === "en" ? "Tech Career" : "Carrière Tech"}</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              {lang === "en"
                ? "From interview to certification — our rigorous, internationally validated programs prepare you for the global tech market."
                : "De l'entretien à la certification — nos programmes rigoureux et validés internationalement vous préparent pour le marché tech mondial."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="gradient-gold gap-2 font-semibold text-primary-foreground" asChild>
                <a href={BOOTCAMP_APPLY_URL} target="_blank" rel="noopener noreferrer">
                  {lang === "en" ? "Apply Now" : "Postuler Maintenant"} <ArrowRight size={16} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => setBookingOpen(true)}>
                <Calendar size={16} />
                {lang === "en" ? "Book an Info Session" : "Réserver une Session d'Info"}
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="mx-auto max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 text-center transition-colors hover:border-primary/30"
                >
                  <s.icon className="mx-auto mb-2 text-primary" size={20} />
                  <p className="text-2xl font-bold font-heading text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label[lang]}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {lang === "en" ? "Quality Assurance" : "Assurance Qualité"}
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              {lang === "en" ? "Our Rigorous Admission Process" : "Notre Processus d'Admission Rigoureux"}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {lang === "en"
                ? "Every candidate goes through a structured process to ensure our international partners' quality standards are consistently met."
                : "Chaque candidat passe par un processus structuré pour garantir le respect constant des standards de qualité de nos partenaires internationaux."}
            </p>
          </AnimatedSection>

          {/* Process timeline */}
          <div className="relative mx-auto max-w-4xl">
            {/* Connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="relative flex gap-6 items-start"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex relative z-10 h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <step.icon className="text-primary" size={18} />
                    </div>
                    <div className="flex-1 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3 md:hidden">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <step.icon className="text-primary" size={18} />
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                            {lang === "en" ? `Step ${i + 1}` : `Étape ${i + 1}`}
                          </Badge>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs hidden md:inline-flex">
                          {lang === "en" ? `Step ${i + 1}` : `Étape ${i + 1}`}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={10} /> {step.detail[lang]}
                        </span>
                      </div>
                      <h3 className="mt-3 font-heading text-lg font-semibold">{step.title[lang]}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc[lang]}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Why interview card */}
          <AnimatedSection delay={0.5} className="mt-14 flex justify-center">
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden md:flex max-w-4xl">
              <img src={interviewImg} alt="Interview" className="w-full md:w-2/5 object-cover" loading="lazy" />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {lang === "en" ? "Why Start With an Interview?" : "Pourquoi Commencer par un Entretien ?"}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {lang === "en"
                    ? "Our international partners require us to maintain the highest standards. The interview ensures every candidate is placed in the right program, receives personalized mentorship, and is set up for success from day one."
                    : "Nos partenaires internationaux exigent que nous maintenions les plus hauts standards. L'entretien garantit que chaque candidat est placé dans le bon programme, reçoit un mentorat personnalisé et est préparé pour réussir dès le premier jour."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Globe, label: lang === "en" ? "International Standards" : "Standards Internationaux" },
                    { icon: Award, label: lang === "en" ? "Partner Validated" : "Validé Partenaires" },
                    { icon: Users, label: lang === "en" ? "Personalized Path" : "Parcours Personnalisé" },
                  ].map((b) => (
                    <Badge key={b.label} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs gap-1">
                      <b.icon size={10} /> {b.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bootcamp Tracks */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16">
            <div className="grid gap-12 items-center md:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {lang === "en" ? "Training Programs" : "Programmes de Formation"}
                </p>
                <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                  {lang === "en" ? "Intensive Bootcamp Tracks" : "Parcours Bootcamp Intensifs"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {lang === "en"
                    ? "Choose your track, duration (4, 6 or 8 months), and learning mode. Our programs are designed by industry experts and validated by international partners to make you job-ready."
                    : "Choisissez votre parcours, durée (4, 6 ou 8 mois), et mode d'apprentissage. Nos programmes sont conçus par des experts de l'industrie et validés par des partenaires internationaux pour vous rendre opérationnel."}
                </p>
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Monitor size={16} className="text-primary" /> {lang === "en" ? "Online" : "En ligne"}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {lang === "en" ? "On-site" : "Sur site"}</div>
                  <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> 4-8 {lang === "en" ? "months" : "mois"}</div>
                  <div className="flex items-center gap-2"><Laptop size={16} className="text-primary" /> {lang === "en" ? "Hands-on projects" : "Projets pratiques"}</div>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img
                  src={bootcampCodingImg}
                  alt="Bootcamp"
                  className="rounded-2xl border border-border/50 object-cover w-full aspect-[4/3] shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Tracks Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {bootcampTracks.map((track, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`group rounded-xl border border-border/50 bg-gradient-to-br ${track.gradient} p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-xl bg-primary/10 p-3.5 flex-shrink-0">
                      <track.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold">{track.title[lang]}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {track.durations.map(d => (
                          <span key={d} className="inline-flex items-center gap-1 rounded-md bg-background/60 border border-border/50 px-2 py-0.5 text-xs text-primary font-medium">
                            <Clock size={10} /> {d} {lang === "en" ? "months" : "mois"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{track.description[lang]}</p>

                  {/* Learning outcomes */}
                  <div className="mb-4 space-y-1.5">
                    {track.outcomes[lang].map((o) => (
                      <p key={o} className="flex items-center gap-2 text-xs text-foreground">
                        <Rocket size={10} className="text-primary flex-shrink-0" /> {o}
                      </p>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="mb-5 flex flex-wrap gap-1.5 flex-1">
                    {track.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-background/60 text-foreground border border-border/50 text-xs">{skill}</Badge>
                    ))}
                  </div>

                  {/* Modes */}
                  <div className="mb-4 flex gap-3">
                    {track.modes.map(m => (
                      <span key={m} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        {m === "online" ? <Monitor size={12} /> : <MapPin size={12} />}
                        {m === "online" ? (lang === "en" ? "Online" : "En ligne") : (lang === "en" ? "On-site" : "Sur site")}
                      </span>
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

      {/* Internship */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid gap-12 items-center md:grid-cols-2 mb-14">
              <div className="md:order-2">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {lang === "en" ? "Professional Experience" : "Expérience Professionnelle"}
                </p>
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <Briefcase className="text-primary" size={32} />
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold">
                  {lang === "en" ? "Internship Program" : "Programme de Stage"}
                </h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {lang === "en"
                    ? "Gain hands-on experience working on real client projects alongside our senior developers. Our internship program provides mentorship, training and the opportunity to contribute to production-level software."
                    : "Acquérez une expérience pratique en travaillant sur de vrais projets clients aux côtés de nos développeurs seniors. Notre programme de stage offre du mentorat, de la formation et l'opportunité de contribuer à des logiciels de niveau production."}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-primary font-medium"><Clock size={14} /> 3-6 {lang === "en" ? "months" : "mois"}</span>
                  <span className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> Bafoussam</span>
                </div>
              </div>
              <div className="md:order-1">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <img
                    src={internshipImg}
                    alt="Internship"
                    className="rounded-2xl border border-border/50 object-cover w-full aspect-[4/3] shadow-lg"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-3xl rounded-xl border border-border/50 bg-card p-8">
              <h3 className="mb-6 font-heading text-xl font-semibold text-center">
                {lang === "en" ? "What You'll Get" : "Ce que Vous Obtiendrez"}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 mb-8">
                {(lang === "en"
                  ? ["Mentorship from senior developers", "Work on real client projects", "Professional development workshops", "Certificate of completion", "Job placement assistance", "Networking with industry professionals"]
                  : ["Mentorat par des développeurs seniors", "Travail sur de vrais projets clients", "Ateliers de développement professionnel", "Certificat de fin de stage", "Aide au placement professionnel", "Réseautage avec des professionnels"]
                ).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <Check className="text-primary" size={12} />
                    </div>
                    {benefit}
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
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-10 text-center sm:p-16">
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
}
