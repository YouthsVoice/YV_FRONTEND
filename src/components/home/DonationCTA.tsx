"use client";

import CTAOptionCard from "./CTAOptionCard";

import {
  Heart,
  Handshake,
  Building2,
} from "lucide-react";

export default function DonationCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#155E4B]" />

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
            rounded-full
            bg-white/10
            px-4
            py-2
            text-sm
            font-medium
            text-white
            "
          >
            Support Our Mission
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Choose How You Want
            <span className="block">
              To Create Impact
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Every contribution helps us
            empower communities, support
            youth leadership and create
            sustainable social change.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <CTAOptionCard
            title="Donate"
            description="
            Support ongoing programs and
            help us reach more communities
            across Bangladesh.
            "
            href="/donate"
            icon={
              <Heart
                size={42}
                className="text-[#155E4B]"
              />
            }
          />

          <CTAOptionCard
            title="Become A Partner"
            description="
            Collaborate with Youth's Voice
            to expand impact and create
            meaningful social initiatives.
            "
            href="/partnerships"
            icon={
              <Handshake
                size={42}
                className="text-[#155E4B]"
              />
            }
          />

          <CTAOptionCard
            title="Sponsor A Program"
            description="
            Directly support one of our
            signature programs and help
            scale its impact.
            "
            href="/sponsor"
            icon={
              <Building2
                size={42}
                className="text-[#155E4B]"
              />
            }
          />

        </div>

      </div>
    </section>
  );
}