import EventsHero from "@/components/events/EventsHero";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import EventsTimeline from "@/components/events/EventsTimeline";
import PastEvents from "@/components/events/PastEvents";
import EventStatistics from "@/components/events/EventStatistics";
import { API_URL, getTopEvent } from "@/lib/api/event";
import { Event } from "@/types/events/event";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events - Youth's Voice",
  description:
    "Explore upcoming events, past initiatives, and statistics from Youth's Voice.",
  authors: [
    { name: "Md. Sajid Hossain" },
    {
      name: "Youth's Voice",
      url: "https://youthsvoice.org/",
    },
  ],
  keywords: [
    "events youthsvoice",
    "youths voice events",
    "youths voice upcoming events",
    "youths voice past events",
    "youths voice event statistics",
  ],
};

async function getEvents(): Promise<Event[]> {
  const response = await fetch(`${API_URL}/api/events/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(
      `Failed to fetch events: ${response.status} ${response.statusText}`
    );

    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  return response.json();
}

export default async function EventsPage() {
  const [events, allEvents] = await Promise.all([
    getTopEvent(),
    getEvents(),
  ]);

  return (
    <>
      <EventsHero />

      {events && <FeaturedEvent event={events} />}

      <UpcomingEvents events={allEvents} />
      <PastEvents events={allEvents} />
      <EventsTimeline />
      <EventStatistics />
    </>
  );
}
