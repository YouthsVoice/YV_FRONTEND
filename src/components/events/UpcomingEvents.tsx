"use client";

import { useMemo, useState } from "react";

import EventCard from "./EventCard";

import { events } from "@/data/events/events";

const filters = [
  "All",
  "Health",
  "Workshop",
  "Community Service",
  "Festival",
];

export default function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState("All");

  const upcomingEvents = useMemo(() => {
    const upcoming = events.filter(
      (event) => event.status === "upcoming"
    );

    if (activeFilter === "All") {
      return upcoming;
    }

    return upcoming.filter(
      (event) => event.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="upcoming-events"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Upcoming Events
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Join Our
            <span className="block text-[#155E4B]">
              Upcoming Events
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore workshops, campaigns, and community
            initiatives where you can learn, volunteer,
            and create meaningful impact.
          </p>

        </div>

        {/* Filters */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-[#155E4B] text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#155E4B] hover:text-[#155E4B]"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {upcomingEvents.map((event) => (
            <EventCard
              key={event.slug}
              event={event}
            />
          ))}

        </div>

      </div>
    </section>
  );
}