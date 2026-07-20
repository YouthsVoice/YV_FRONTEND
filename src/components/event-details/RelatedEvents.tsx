"use client";

import EventCard from "@/components/events/EventCard";
import { events } from "@/data/events/events";
import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function RelatedEvents({
  event,
}: Props) {
  let related = events.filter(
    (e) =>
      e.slug !== event.slug &&
      e.category === event.category
  );

  if (related.length < 3) {
    const moreEvents = events.filter(
      (e) =>
        e.slug !== event.slug &&
        !related.some((item) => item.slug === e.slug)
    );

    related = [...related, ...moreEvents];
  }

  related = related.slice(0, 3);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Explore More
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">

            You May Also
            <span className="block text-[#155E4B]">

              Be Interested In

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Discover more opportunities to volunteer,
            learn, and make a meaningful impact with
            Youth&apos;s Voice.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {related.map((item) => (
            <EventCard
              key={item.slug}
              event={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}