"use client";

import StoryCard from "./StoryCard";
import { programStories } from "@/constants/programs/program-stories";

export default function ProgramStories() {
  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Real Stories.
            <span className="block text-[#155E4B]">
              Real Impact.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Behind every initiative are people
            whose lives have been positively
            transformed through collective action.
          </p>

        </div>

        {/* Stories */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {programStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
            />
          ))}

        </div>

      </div>

    </section>
  );
}