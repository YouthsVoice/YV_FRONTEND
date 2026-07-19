"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function PastEventCard({
  event,
}: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-[32px]
      border
      bg-white
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="relative h-72 overflow-hidden">

        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-8">

        <div className="flex items-center gap-2 text-sm text-[#155E4B]">

          <CalendarDays size={16} />

          {formattedDate}

        </div>

        <h3 className="mt-4 text-2xl font-bold">

          {event.title}

        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">

          {event.description}

        </p>

        <Link
          href={`/events/${event.slug}`}
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#155E4B]
          "
        >

          View Highlights

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </Link>

      </div>

    </div>
  );
}