"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { mediaItems } from "@/constants/media";
import MediaCard from "./MediaCard";

export default function MediaUpdates() {
  const featured =
    mediaItems.find((item) => item.featured);

  const others =
    mediaItems.filter((item) => !item.featured);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="text-center">

          <span
            className="
            rounded-full
            bg-green-50
            px-4
            py-2
            text-sm
            text-[#155E4B]
            "
          >
            News & Media
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Latest From
            <span className="block text-[#155E4B]">
              Youth&apos;s Voice
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Follow our campaigns,
            events and impact stories.
          </p>

        </div>

        {/* Featured */}

        {featured && (
          <div className="mt-16">

            <div
              className="
              overflow-hidden
              rounded-[40px]
              bg-[#155E4B]
              "
            >
              <div className="grid lg:grid-cols-2">

                <div className="relative min-h-[400px]">

                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div
                  className="
                  flex
                  flex-col
                  justify-center
                  p-12
                  text-white
                  "
                >
                  <span className="text-white/70">
                    Featured Campaign
                  </span>

                  <h3 className="mt-4 text-4xl font-bold">
                    {featured.title}
                  </h3>

                  <p className="mt-4 text-white/80">
                    Explore the latest
                    initiatives and updates.
                  </p>

                  <button
                    className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-semibold
                    "
                  >
                    Read Full Story

                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            </div>

          </div>
        )}

        {/* Grid */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {others.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}