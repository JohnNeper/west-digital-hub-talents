import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { StartupsSection } from "@/components/sections/StartupsSection";
import { OutsourcingSection } from "@/components/sections/OutsourcingSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <PartnersSection />
    <AboutSection />
    <ServicesSection />
    <WhyUsSection />
    <ExpertiseSection />
    <StartupsSection />
    <OutsourcingSection />
    <SpaceSection />
    <CTASection />
  </Layout>
);

export default Index;
