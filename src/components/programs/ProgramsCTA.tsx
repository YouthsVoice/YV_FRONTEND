"use client";

import Link from "next/link";
import {
  Users,
  Handshake,
  Heart,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Become A Volunteer",
    description:
      "Join our programs and contribute your skills, passion and energy to meaningful initiatives.",

    href: "/volunteer",

    icon: Users,

    accent:
      "from-emerald-500 to-emerald-600",
  },

  {
    title: "Partner With Us",
    description:
      "Collaborate with Youth's Voice to create larger and more sustainable impact.",

    href: "/partnerships",

    icon: Handshake,

    accent:
      "from-blue-500 to-indigo-600",
  },

  {
    title: "Support A Program",
    description:
      "Help fund projects that empower communities and transform lives.",

    href: "/donate",

    icon: Heart,

    accent:
      "from-orange-500 to-rose-500",
  },
];

export default function ProgramsCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#0F172A]" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center text-white">

          <span
            className="
            rounded-full
            border
            border-white/20
            bg-white/5
            px-4
            py-2
            text-sm
            "
          >
            Get Involved
          </span>

          <h2 className="mt-8 text-5xl font-bold lg:text-7xl">
            Ready To
            <span className="block text-emerald-400">
              Create Impact?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            Every volunteer, partner and donor
            helps us reach more communities,
            empower more youth and create
            lasting change.
          </p>

        </div>

        {/* Action Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
                className="
                group
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/10
                "
              >
                <div
                  className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${action.accent}
                  text-white
                  `}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {action.title}
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  {action.description}
                </p>

                <div
                  className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-emerald-400
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                    transition
                    group-hover:translate-x-1
                    "
                  />
                </div>

              </Link>
            );
          })}
        </div>

        {/* Bottom Message */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold text-white">
            Together We Can Reach More Communities
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Join a growing movement of young
            changemakers dedicated to building
            a stronger, safer and more inclusive
            Bangladesh.
          </p>

        </div>

      </div>

    </section>
  );
}