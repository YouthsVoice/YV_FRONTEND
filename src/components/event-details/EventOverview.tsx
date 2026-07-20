"use client";

import Image from "next/image";
import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function EventOverview({ event }: Props) {
  return (
    <section className="bg-[#FFFDF7] py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Event Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Discover The
            <span className="block text-[#155E4B]">
              Purpose Behind The Event
            </span>
          </h2>

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="relative overflow-hidden rounded-[36px]">

            <Image
              src={event.overview.image}
              alt={event.title}
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />

          </div>

          {/* Text */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-widest text-[#155E4B]">
              {event.overview.title}
            </span>

            <h3 className="mt-4 text-4xl font-bold leading-tight">
              {event.overview.subtitle}
            </h3>

            <div className="mt-8 space-y-6">

              {event.overview.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-8 text-gray-600"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}