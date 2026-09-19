"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {  HomeEventType } from "@/types/events/event";

interface Props {
  event: HomeEventType;
}

export default function FeaturedEvent({
  event,
}: Props) {
  const date = new Date(event.date);

  const month = date.toLocaleString("en-US", {
    month: "short",
  });

  const day = date.getDate();
  console.log("FeaturedEvent received event:", event);

  return (
    <section className="bg-[#FFFDF7] py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Featured Event
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Don&apos;t Miss
            <span className="block text-[#155E4B]">
              Our Next Event
            </span>
          </h2>
        </div>

        {/* Card */}

        <div className="overflow-hidden rounded-[40px] bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[500px]">
              <Image
                src={event.cover_image}
                alt={event.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-10 lg:p-14">

              {/* Date */}

              <div className="mb-8 flex h-24 w-24 flex-col items-center justify-center rounded-3xl bg-[#155E4B] text-white">
                <span className="text-sm uppercase tracking-widest">
                  {month}
                </span>

                <span className="text-3xl font-bold">
                  {day}
                </span>
              </div>

              {/* Category */}

              <span className="inline-block w-fit rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#155E4B]">
                {event.category}
              </span>

              {/* Title */}

              <h3 className="mt-5 text-4xl font-bold">
                {event.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-gray-600">
                {event.description}
              </p>

              {/* Details */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3 text-gray-700">
                  <CalendarDays size={18} />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock3 size={18} />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#155E4B] px-8 py-4 font-semibold text-white transition hover:bg-[#114A3B]"
                >
                  Register Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={`/events/${event.slug}`}
                  className="rounded-2xl border px-8 py-4 font-semibold transition hover:bg-gray-50"
                >
                  Learn More
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}