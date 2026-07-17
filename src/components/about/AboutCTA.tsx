"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  Handshake,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#155E4B]" />

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center text-white">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            Join The Movement
          </span>

          <h2 className="mt-8 text-5xl font-bold lg:text-7xl">
            Ready To Create
            <span className="block">
              Meaningful Change?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Whether you volunteer your time,
            support a program or partner with us,
            your contribution helps empower
            communities and inspire the next
            generation of changemakers.
          </p>

        </div>

        {/* CTA Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* Volunteer */}

          <Link
            href="/volunteer"
            className="
            group
            rounded-[32px]
            bg-white
            p-8
            transition-all
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >
            <Users
              size={42}
              className="text-[#155E4B]"
            />

            <h3 className="mt-6 text-2xl font-bold">
              Become A Volunteer
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Join passionate young people
              creating positive impact in
              communities across Bangladesh.
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-[#155E4B]">
              Get Started

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>

          </Link>

          {/* Donate */}

          <Link
            href="/donate"
            className="
            group
            rounded-[32px]
            bg-white
            p-8
            transition-all
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >
            <Heart
              size={42}
              className="text-[#C96D32]"
            />

            <h3 className="mt-6 text-2xl font-bold">
              Support A Program
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Help expand our initiatives
              and bring lasting change to
              more communities.
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-[#C96D32]">
              Support Impact

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>

          </Link>

          {/* Partner */}

          <Link
            href="/partnerships"
            className="
            group
            rounded-[32px]
            bg-white
            p-8
            transition-all
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >
            <Handshake
              size={42}
              className="text-[#155E4B]"
            />

            <h3 className="mt-6 text-2xl font-bold">
              Partner With Us
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Collaborate with Youth&apos;s Voice
              to build innovative solutions
              for social impact.
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-[#155E4B]">
              Start Partnership

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>

          </Link>

        </div>

        {/* Impact Numbers */}

        <div className="mt-20 grid grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-white">
              10,000+
            </h3>

            <p className="mt-2 text-white/70">
              Volunteers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              100,000+
            </h3>

            <p className="mt-2 text-white/70">
              Lives Impacted
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              250+
            </h3>

            <p className="mt-2 text-white/70">
              Programs & Events
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}