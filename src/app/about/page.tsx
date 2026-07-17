import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import WhoWeAre from "@/components/about/WhoWeAre";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import MissionVision from "@/components/about/MissionVision";
import PartnersSection from "@/components/about/PartnersSection";
import TeamSection from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <JourneyTimeline />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <PartnersSection />
      <AboutCTA />
    </>
  );
}