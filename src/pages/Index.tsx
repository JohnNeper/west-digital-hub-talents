import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StartupsSection } from "@/components/sections/StartupsSection";
import { OutsourcingSection } from "@/components/sections/OutsourcingSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { SalesTeaser } from "@/components/sections/SalesTeaser";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => (
  <Layout>
    <SEOHead
      title="West Digital Hub — Build in Africa, Deliver to the World"
      description="Technology consulting, product development, tech outsourcing and bootcamp training from Cameroon. Build scalable digital products with top African tech talent."
      keywords="tech outsourcing Africa, software development Cameroon, bootcamp Cameroon, digital consulting, web development, mobile app development, IT outsourcing"
    />
    <HeroSection />
    <PartnersSection />
    <AboutSection />
    <ServicesSection />
    <AcademySection />
    <WhyUsSection />
    <ExpertiseSection />
    <SalesTeaser />
    <TestimonialsSection />
    <StartupsSection />
    <OutsourcingSection />
    <SpaceSection />
    <CTASection />
  </Layout>
);

export default Index;
