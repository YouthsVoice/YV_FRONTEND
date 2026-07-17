"use client";

import { useState } from "react";

import { allPrograms } from "@/constants/programs/all-programs";
import ProgramCard from "./ProgramCard";

const categories = [
  "All",
  "Health",
  "Education",
  "Community",
  "Awareness",
  "Humanitarian",
  "Environment",
];

export default function AllPrograms() {
  const [selected, setSelected] =
    useState("All");

  const filteredPrograms =
    selected === "All"
      ? allPrograms
      : allPrograms.filter(
          (program) =>
            program.category === selected
        );

  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Explore Programs
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Programs For Every
            <span className="block text-[#155E4B]">
              Area Of Impact
            </span>
          </h2>

        </div>

        {/* Filters */}

        <div
          className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelected(category)
              }
              className={`
              rounded-full
              px-5
              py-2
              text-sm
              font-medium
              transition
              ${
                selected === category
                  ? "bg-[#155E4B] text-white"
                  : "bg-white border"
              }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredPrograms.map(
            (program) => (
              <ProgramCard
                key={program.slug}
                program={program}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
}