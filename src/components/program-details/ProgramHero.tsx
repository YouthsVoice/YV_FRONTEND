"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Program } from "@/types/programs/program";

interface Props {
  program: Program;
}

export default function ProgramHero({
  program,
}: Props) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      {/* Background */}

      <Image
        src={program.coverImage}
        alt={program.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4">

        <div className="max-w-3xl text-white">

          {/* Category */}

          <span
            className="
            inline-flex
            rounded-full
            bg-white/10
            px-4
            py-2
            text-sm
            font-medium
            backdrop-blur
            "
          >
            {program.category}
          </span>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            {program.title}
          </h1>

          {/* Tagline */}

          <p className="mt-6 text-2xl font-medium text-emerald-300">
            {program.tagline}
          </p>

          {/* Overview */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            {program.overview}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/volunteer"
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-[#155E4B]
              px-8
              py-4
              font-semibold
              transition
              hover:bg-[#114A3B]
              "
            >
              Join This Program

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/donate"
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/30
              bg-white/10
              px-8
              py-4
              font-semibold
              backdrop-blur
              transition
              hover:bg-white/20
              "
            >
              <Heart size={18} />

              Support This Program
            </Link>

          </div>

          {/* Metrics */}

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

            {program.metrics.map((metric) => (
              <div key={metric.label}>
                <h3 className="text-3xl font-bold">
                  {metric.value}
                </h3>

                <p className="mt-2 text-white/70">
                  {metric.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}