"use client";

import { timeline } from "@/constants/about/timeline";
import TimelineCard from "./TimelineCard";

export default function JourneyTimeline() {
  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
            rounded-full
            bg-green-50
            px-4
            py-2
            text-sm
            font-medium
            text-[#155E4B]
            "
          >
            Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Building Impact
            <span className="block text-[#155E4B]">
              One Step At A Time
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Every milestone represents the
            dedication of volunteers, supporters
            and communities working together.
          </p>

        </div>

        {/* Desktop Timeline Line */}

        <div className="relative mt-20 hidden lg:block">

          <div
            className="
            absolute
            left-0
            right-0
            top-2
            h-1
            rounded-full
            bg-green-200
            "
          />

          <div className="grid grid-cols-5 gap-6">

            {timeline.map((item) => (
              <div key={item.year}>
                <div
                  className="
                  relative
                  z-10
                  mx-auto
                  mb-8
                  h-6
                  w-6
                  rounded-full
                  border-4
                  border-white
                  bg-[#155E4B]
                  shadow
                  "
                />

                <TimelineCard item={item} />
              </div>
            ))}

          </div>

        </div>

        {/* Mobile Timeline */}

        <div className="mt-16 space-y-6 lg:hidden">

          {timeline.map((item) => (
            <TimelineCard
              key={item.year}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}