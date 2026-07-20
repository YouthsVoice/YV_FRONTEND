"use client";

import { Clock3 } from "lucide-react";
import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function EventSchedule({ event }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Event Schedule
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Your Day
            <span className="block text-[#155E4B]">
              At a Glance
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the agenda and discover what to expect throughout the event.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-[39px] top-0 h-full w-[2px] bg-[#155E4B]/15" />

          <div className="space-y-10">

            {event.schedule.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-8"
              >
                {/* Time */}

                <div className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-[#155E4B] text-center text-white shadow-lg">

                  <Clock3 size={18} />

                  <span className="mt-1 text-xs font-semibold">
                    {item.time}
                  </span>

                </div>

                {/* Content */}

                <div className="flex-1 rounded-[28px] border border-gray-200 bg-[#FFFDF7] p-8 transition-all duration-300 hover:border-[#155E4B]/20 hover:shadow-lg">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}