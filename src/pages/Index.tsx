import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { StartupsSection } from "@/components/sections/StartupsSection";
import { OutsourcingSection } from "@/components/sections/OutsourcingSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ExpertiseSection />
      <StartupsSection />
      <OutsourcingSection />
      <SpaceSection />
      <ProjectsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
