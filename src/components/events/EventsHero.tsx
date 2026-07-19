"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Events Organized",
  },
  {
    value: "10K+",
    label: "Participants",
  },
  {
    value: "500+",
    label: "Volunteers",
  },
];

export default function EventsHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      {/* Background */}

      <Image
        src="/events/events-hero.jpg"
        alt="Youth's Voice Events"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4">

        <div className="max-w-3xl text-white">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            <CalendarDays size={16} />
            Community Events
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            Creating Moments
            <span className="block text-emerald-400">
              That Inspire Change
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            From awareness campaigns and workshops to community outreach and
            nationwide initiatives, every event brings people together to make
            a lasting impact.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#upcoming-events"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#155E4B] px-8 py-4 font-semibold transition hover:bg-[#114A3B]"
            >
              Explore Events
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/volunteer"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Become a Volunteer
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-bold">
                  {stat.value}
                </h3>

                <p className="mt-2 text-white/70">
                  {stat.label}
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