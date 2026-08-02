import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function StoriesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#155E4B] to-[#0B3D2F] py-28 lg:py-36">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#4ADE80] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
          <BookOpen size={16} />
          Stories of Impact
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
          Every Story Reflects
          <span className="block text-[#A7F3D0]">
            A Life Changed
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80">
          Explore inspiring journeys from volunteers, beneficiaries, and
          communities whose lives have been touched through Youth&apos;s Voice.
          Behind every initiative is a story of hope, resilience, and positive
          change.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="#featured-story"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-[#155E4B] transition hover:scale-105"
          >
            Read Featured Story
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#stories"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Browse Stories
          </Link>

        </div>

        {/* Quick Stats */}

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-black text-white">
              120+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Stories Shared
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white">
              5K+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Volunteers Inspired
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white">
              30+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Community Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white">
              20+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Districts Reached
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}