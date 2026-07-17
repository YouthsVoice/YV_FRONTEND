"use client";

import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

import TeamCard from "./TeamCard";
import { executiveTeam } from "@/constants/about/team";

export default function TeamSection() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Leadership
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Meet The People
            <span className="block text-[#155E4B]">
              Behind The Impact
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our leadership team brings together
            passionate individuals committed
            to empowering communities and
            inspiring change.
          </p>

        </div>

        {/* Team Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {executiveTeam.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <div
          className="
          mt-20
          rounded-[36px]
          bg-[#155E4B]
          p-10
          text-center
          text-white
          "
        >
          <div className="mx-auto max-w-2xl">

            <Users
              size={48}
              className="mx-auto"
            />

            <h3 className="mt-6 text-3xl font-bold">
              Powered By Dedicated Volunteers
            </h3>

            <p className="mt-4 text-white/80">
              Beyond our executive team,
              dozens of passionate volunteers
              and coordinators contribute
              to Youth&apos;s Voice initiatives
              every year.
            </p>

            <Link
              href="/team"
              className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-6
              py-3
              font-semibold
              text-[#155E4B]
              "
            >
              View Full Team

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}