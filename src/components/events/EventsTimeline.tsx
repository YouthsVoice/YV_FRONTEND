"use client";

import TimelineItem from "./TimelineItem";
import { timeline } from "@/data/events/timeline";

export default function EventsTimeline() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Milestones That
            <span className="block text-[#155E4B]">
              Define Our Impact
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every milestone reflects our continued commitment
            to empowering communities and creating meaningful
            change across Bangladesh.
          </p>

        </div>

        <div className="mt-20">

          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              isLast={index === timeline.length - 1}
            />
          ))}

        </div>

      </div>

    </section>
  );
}