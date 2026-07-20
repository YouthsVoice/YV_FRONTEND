"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Tag,
  ArrowRight,
  Share2,
} from "lucide-react";

import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function EventHero({ event }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <section className="relative min-h-[85vh] overflow-hidden">

      {/* Background */}

      <Image
        src={event.coverImage}
        alt={event.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4">

        <div className="max-w-3xl text-white">

          {/* Category */}

          <span className="inline-flex rounded-full bg-[#155E4B] px-4 py-2 text-sm font-medium">
            {event.category}
          </span>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            {event.title}
          </h1>

          {/* Tagline */}

          <p className="mt-6 text-2xl font-light text-emerald-300">
            {event.tagline}
          </p>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            {event.description}
          </p>

          {/* Information */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <CalendarDays size={20} />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 size={20} />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <Tag size={20} />
              <span>{event.category}</span>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href={event.registrationLink ?? "#"}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#155E4B] px-8 py-4 font-semibold transition hover:bg-[#114A3B]"
            >
              Register Now

              <ArrowRight size={18} />
            </Link>

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/30
                bg-white/10
                px-8
                py-4
                font-semibold
                backdrop-blur
                transition
                hover:bg-white/20
              "
            >
              <Share2 size={18} />

              Share Event
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}