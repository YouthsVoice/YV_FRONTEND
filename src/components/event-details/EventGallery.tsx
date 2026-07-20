"use client";

import Image from "next/image";
import { Images } from "lucide-react";

import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function EventGallery({ event }: Props) {
  if (!event.gallery.length) return null;

  return (
    <section className="bg-[#FFFDF7] py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Moments That
            <span className="block text-[#155E4B]">
              Made an Impact
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every photograph tells a story of collaboration,
            learning, and community spirit.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-16 grid auto-rows-[220px] gap-5 lg:grid-cols-4">

          {/* Hero Image */}

          <div className="relative overflow-hidden rounded-[32px] lg:col-span-2 lg:row-span-2">

            <Image
              src={event.gallery[0]}
              alt={event.title}
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />

          </div>

          {event.gallery.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[28px]"
            >
              <Image
                src={image}
                alt={`${event.title} ${index + 2}`}
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}

        </div>

        {/* More Photos */}

        {event.gallery.length > 5 && (
          <div className="mt-10 flex justify-center">

            <button
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-gray-300
              bg-white
              px-8
              py-4
              font-semibold
              transition
              hover:border-[#155E4B]
              hover:text-[#155E4B]
              "
            >
              <Images size={20} />

              View All {event.gallery.length} Photos

            </button>

          </div>
        )}

      </div>
    </section>
  );
}