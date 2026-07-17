"use client";

import { impactAreas } from "@/constants/programs/impact-areas";
import ImpactAreaCard from "./ImpactAreaCard";

export default function ImpactAreas() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Impact Areas
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Creating Change
            <span className="block text-[#155E4B]">
              Across Communities
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our programs address some of the
            most important challenges facing
            communities today, creating
            opportunities for lasting impact.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {impactAreas.map((area) => (
            <ImpactAreaCard
              key={area.title}
              area={area}
            />
          ))}

        </div>

      </div>

    </section>
  );
}