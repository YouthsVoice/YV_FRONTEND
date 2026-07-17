"use client";

import { programStats } from "@/constants/programs/program-stats";
import ProgramStatCard from "./ProgramStatCard";

export default function ProgramStats() {
  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Impact By
            <span className="block text-[#155E4B]">
              The Numbers
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Behind every statistic is a story,
            a community and a life positively
            transformed through collective action.
          </p>

        </div>

        {/* Stats Grid */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {programStats.map((stat) => (
            <ProgramStatCard
              key={stat.title}
              stat={stat}
            />
          ))}

        </div>

      </div>

    </section>
  );
}