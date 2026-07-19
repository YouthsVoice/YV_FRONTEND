import EventsHero from "@/components/events/EventsHero";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import EventsTimeline from "@/components/events/EventsTimeline";
import PastEvents from "@/components/events/PastEvents";
import EventStatistics from "@/components/events/EventStatistics";



// Mock data (replace with API later)
import { events } from "@/data/events/events";


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