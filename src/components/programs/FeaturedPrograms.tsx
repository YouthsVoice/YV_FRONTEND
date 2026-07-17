"use client";

import { featuredPrograms } from "@/constants/programs/featured-programs";
import FeaturedProgramCard from "./FeaturedProgramCard";

export default function FeaturedPrograms() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Featured Programs
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Initiatives Creating
            <span className="block text-[#155E4B]">
              Lasting Impact
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore some of our flagship
            programs transforming lives and
            empowering communities.
          </p>

        </div>

        <div className="mt-16 space-y-12">

          {featuredPrograms.map(
            (program, index) => (
              <FeaturedProgramCard
                key={program.slug}
                program={program}
                reverse={index % 2 !== 0}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
}