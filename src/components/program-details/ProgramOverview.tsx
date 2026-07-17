"use client";

import Image from "next/image";
import { Program } from "@/types/programs/program";

interface Props {
  program: Program;
}

export default function ProgramOverview({
  program,
}: Props) {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-4 lg:grid-cols-2">

        {/* Left */}

        <div>

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
            About This Program
          </span>

          <h2 className="mt-8 text-4xl font-bold lg:text-5xl">
            {program.overview.title}
          </h2>

          <p className="mt-6 text-xl font-medium text-[#155E4B]">
            {program.overview.subtitle}
          </p>

          <div className="mt-8 space-y-6">

            {program.overview.description.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="
                  text-lg
                  leading-8
                  text-gray-600
                  "
                >
                  {paragraph}
                </p>
              )
            )}

          </div>

        </div>

        {/* Right */}

        <div className="relative h-[600px] overflow-hidden rounded-[40px]">

          <Image
            src={program.overview.image}
            alt={program.title}
            fill
            className="
            object-cover
            transition
            duration-700
            hover:scale-105
            "
          />

        </div>

      </div>

    </section>
  );
}