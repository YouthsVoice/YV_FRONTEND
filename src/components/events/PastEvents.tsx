"use client";

import PastEventCard from "./PastEventCard";
import { events } from "@/data/events/events";

export default function PastEvents() {
  const completedEvents = events.filter(
    (event) => event.status === "completed"
  );

  if (completedEvents.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
            rounded-full
            bg-green-50
            px-4
            py-2
            text-sm
            font-medium
            text-[#155E4B]
            "
          >
            Past Events
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">

            Celebrating
            <span className="block text-[#155E4B]">

              Our Journey

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Every completed event represents lives touched,
            communities empowered, and memories created.

          </p>

        </div>

        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
          "
        >

          {completedEvents.map((event) => (

            <PastEventCard

              key={event.slug}

              event={event}

            />

          ))}

        </div>

      </div>

    </section>
  );
}