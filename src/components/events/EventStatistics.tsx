"use client";

import {
  CalendarDays,
  Users,
  HeartHandshake,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "50+",
    label: "Events Organized",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Participants",
  },
  {
    icon: HeartHandshake,
    value: "500+",
    label: "Volunteers",
  },
  {
    icon: MapPinned,
    value: "32",
    label: "Districts Reached",
  },
];

export default function EventStatistics() {
  return (
    <section className="bg-[#FFFDF7] py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Impact by the
            <span className="block text-[#155E4B]">
              Numbers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Behind every statistic is a story of collaboration,
            compassion, and positive change driven by our volunteers
            and community partners.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-[32px] border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#155E4B]/20 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#155E4B]/10 text-[#155E4B] transition group-hover:bg-[#155E4B] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-4xl font-black text-gray-900">
                  {stat.value}
                </h3>

                <p className="mt-3 text-lg font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}