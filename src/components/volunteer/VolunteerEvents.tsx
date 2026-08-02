"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

import { events } from "@/data/events/events";

interface VolunteerEventsProps {
  selectedEvent: string;
  onSelect: (slug: string) => void;
}

export default function VolunteerEvents({
  selectedEvent,
  onSelect,
}: VolunteerEventsProps) {
  const volunteerEvents = events.filter(
    (event) =>
      event.status === "upcoming" &&
      event.volunteerRegistration
  );

  const handleRegister = (slug: string) => {
    onSelect(slug);

    document
      .getElementById("registration")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="events"
      className="bg-[#F8FAF9] py-28"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Upcoming Opportunities
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-5xl">
            Volunteer Events
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose an upcoming event and complete your
            registration to become part of the experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {volunteerEvents.map((event) => {
            const selected =
              selectedEvent === event.slug;

            return (
              <article
                key={event.slug}
                className={`
                  overflow-hidden
                  rounded-[32px]
                  border-2
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  ${
                    selected
                      ? "border-[#155E4B]"
                      : "border-gray-200"
                  }
                `}
              >
                {/* Image */}

                <div className="relative h-64">

                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Content */}

                <div className="p-8">

                  <span className="rounded-full bg-[#155E4B]/10 px-3 py-1 text-sm font-medium text-[#155E4B]">
                    {event.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold">
                    {event.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {event.tagline}
                  </p>

                  {/* Meta */}

                  <div className="mt-8 space-y-3 text-sm">

                    <div className="flex items-center gap-3">
                      <CalendarDays
                        size={18}
                        className="text-[#155E4B]"
                      />

                      {event.date}
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3
                        size={18}
                        className="text-[#155E4B]"
                      />

                      {event.time}
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin
                        size={18}
                        className="text-[#155E4B]"
                      />

                      {event.location}
                    </div>

                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center justify-between">

                    <div>

                      <p className="text-sm text-slate-500">
                        Registration Fee
                      </p>

                      <p className="text-2xl font-black text-[#155E4B]">
                        ৳{event.registrationFee}
                      </p>

                    </div>

                    <div className="text-right">

                      <div className="flex items-center justify-end gap-2 text-sm text-slate-500">

                        <Users size={16} />

                        {event.availableSeats} seats left

                      </div>

                      <button
                        onClick={() =>
                          handleRegister(event.slug)
                        }
                        className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-[#155E4B] px-6 py-3 font-semibold text-white transition hover:bg-[#114A3B]"
                      >
                        {selected
                          ? "Selected"
                          : "Register"}

                        <ArrowRight size={18} />

                      </button>

                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}