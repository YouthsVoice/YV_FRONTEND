import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import SignaturePrograms from "@/components/home/SignaturePrograms";
import VolunteerHub from "@/components/home/VolunteerHub";
import ImpactStories from "@/components/home/ImpactStories";
import DonationCTA from "@/components/home/DonationCTA";
import MediaUpdates from "@/components/home/MediaUpdates";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <SignaturePrograms />
      <VolunteerHub />
      <ImpactStories />
      <DonationCTA />
      <MediaUpdates />
      <Newsletter />
    </>
  );
}