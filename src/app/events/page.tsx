import EventsHero from "@/components/events/EventsHero";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import EventsTimeline from "@/components/events/EventsTimeline";
import PastEvents from "@/components/events/PastEvents";
import EventStatistics from "@/components/events/EventStatistics";
import { events } from "@/data/events/events";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Youth's Voice",
  description: "Explore upcoming events, past initiatives, and statistics from Youth's Voice.",
  authors:[{name: "Md. Sajid Hossain",},{name:"Youth's Voice", url: "https://youthsvoice.org/"}],
  keywords:["events youthsvoice", "youths voice events", "youths voice upcoming events", "youths voice past events", "youths voice event statistics"],
  viewport: {
    width: "device-width",
    initialScale: 1,}
}

export default function EventsPage() {
  const featuredEvent = events.find((event) => event.featured);

  return (
    <>
      <EventsHero />

      {featuredEvent && (
        <FeaturedEvent event={featuredEvent} />
      )}

       <UpcomingEvents />
       <PastEvents />
       <EventsTimeline />
       <EventStatistics />
    </>
  );
}