import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import WhoWeAre from "@/components/about/WhoWeAre";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import MissionVision from "@/components/about/MissionVision";
import PartnersSection from "@/components/about/PartnersSection";
import TeamSection from "@/components/about/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Youth's Voice",
  description: "Learn more about Youth's Voice, our mission, vision, and the team behind our impactful initiatives.",
  authors:[{name: "Md. Sajid Hossain",},{name:"Youth's Voice", url: "https://youthsvoice.org/"}],
  keywords:["about youthsvoice", "youths voice mission", "youths voice vision", "youths voice team", "youths voice history", "youths voice values", "youths voice partners"],
  viewport: {
    width: "device-width",
    initialScale: 1,}
}



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