"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-64 overflow-hidden">

        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-[#155E4B] px-4 py-2 text-sm font-medium text-white">
          {event.category}
        </span>

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold">
          {event.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
          {event.description}
        </p>

        <div className="mt-6 space-y-3 text-gray-600">

          <div className="flex items-center gap-3">
            <CalendarDays size={18} />
            {formattedDate}
          </div>

          <div className="flex items-center gap-3">
            <Clock3 size={18} />
            {event.time}
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            {event.location}
          </div>

        </div>

        <Link
          href={`/events/${event.slug}`}
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#155E4B]"
        >
          View Details

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>

      </div>

    </div>
  );
}