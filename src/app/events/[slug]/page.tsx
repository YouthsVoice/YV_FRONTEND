import { notFound } from "next/navigation";

import { events } from "@/data/events/events";

import EventHero from "@/components/event-details/EventHero";
import EventInfo from "@/components/event-details/EventInfo";
import EventOverview from "@/components/event-details/EventOverview";
import EventSchedule from "@/components/event-details/EventSchedule";
import EventGallery from "@/components/event-details/EventGallery";
import RelatedEvents from "@/components/event-details/RelatedEvents";
import RegistrationCTA from "@/components/event-details/RegistrationCTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }




  return (
    <>
      <EventHero event={event} />
      <EventInfo event={event} />
      <EventOverview event={event} />
      <EventSchedule event={event} />
      <EventGallery event={event} />
      <RelatedEvents event={event} />
      <RegistrationCTA event={event} />
    </>
  );
}