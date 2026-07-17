"use client";

import { coreValues } from "@/constants/about/core-values";
import CoreValueCard from "./CoreValueCard";

export default function CoreValues() {
  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Our Values
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Principles That
            <span className="block text-[#155E4B]">
              Guide Everything We Do
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            These values shape our decisions,
            strengthen our culture and inspire
            our commitment to positive change.
          </p>

        </div>

        {/* Values Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {coreValues.map((value) => (
            <CoreValueCard
              key={value.title}
              value={value}
            />
          ))}

        </div>

      </div>

    </section>
  );
}