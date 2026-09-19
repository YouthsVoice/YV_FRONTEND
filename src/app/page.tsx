import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import SignaturePrograms from "@/components/home/SignaturePrograms";
import VolunteerHub from "@/components/home/VolunteerHub";
import ImpactStories from "@/components/home/ImpactStories";
import DonationCTA from "@/components/home/DonationCTA";
import MediaUpdates from "@/components/home/MediaUpdates";
import Newsletter from "@/components/home/Newsletter";
import { getHomeEvents } from "@/lib/api/event";

export default async function HomePage() {
   const events = await getHomeEvents();

  return (
    <>
      <Hero />
      <ImpactStats />
      <SignaturePrograms />
      <VolunteerHub  events={events} />
      <ImpactStories />
      <DonationCTA />
      <MediaUpdates />
      <Newsletter />
    </>
  );
}