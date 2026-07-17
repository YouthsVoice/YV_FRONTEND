"use client";

import Image from "next/image";
import { stories } from "@/constants/stories";
import StoryCard from "./StoryCard";
import { ArrowRight } from "lucide-react";

export default function ImpactStories() {
  const featuredStory = stories[0];

  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Real Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Stories That
            <span className="block text-[#155E4B]">
              Inspire Change
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Behind every initiative is a story
            of courage, growth and transformation.
          </p>

        </div>

        {/* Featured Story */}

        <div className="mt-16 overflow-hidden rounded-[40px] bg-[#155E4B]">

          <div className="grid lg:grid-cols-2">

            <div className="relative min-h-[450px]">

              <Image
                src={featuredStory.image}
                alt={featuredStory.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="flex flex-col justify-center p-10 lg:p-16 text-white">

              <span className="text-white/70">
                Featured Story
              </span>

              <h3 className="mt-4 text-4xl font-bold">
                {featuredStory.name}
              </h3>

              <p className="mt-2 text-white/70">
                {featuredStory.role}
              </p>

              <blockquote className="mt-8 text-2xl leading-relaxed">
                {featuredStory.quote}
              </blockquote>

              <button className="mt-10 flex items-center gap-2 font-semibold">
                Read Full Story
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* Story Grid */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {stories.slice(1).map((story) => (
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