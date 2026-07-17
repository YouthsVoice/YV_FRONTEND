"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Volunteers",
  },
  {
    value: "100K+",
    label: "Lives Impacted",
  },
  {
    value: "250+",
    label: "Programs & Events ",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7]">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]"
            >
              Empowering Youth Since 2011
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl font-extrabold leading-tight text-[#1F2937] lg:text-7xl"
            >
              Creating
              <span className="block text-[#155E4B]">
                Change Through
              </span>
              Youth Leadership
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
            >
              Youth&apos;s Voice empowers young people
              to drive social impact through
              community service, awareness
              campaigns, volunteerism and
              sustainable development initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/volunteer"
                className="rounded-xl bg-[#155E4B] px-6 py-4 font-semibold text-white transition hover:scale-105"
              >
                Become a Volunteer
              </Link>

              <Link
                href="/donate"
                className="flex items-center gap-2 rounded-xl border border-[#155E4B] px-6 py-4 font-semibold text-[#155E4B]"
              >
                Donate Now
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* STATS */}

            <div className="mt-12 grid grid-cols-3 gap-4">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-[#155E4B]">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
            className="relative"
          >

            <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-green-100 blur-3xl" />

            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-orange-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] bg-white p-4 shadow-2xl">

              <img
                src="/hero/hero.webp"
                alt="Youth's Voice Volunteers"
                className="h-[600px] w-full rounded-[24px] object-cover"
              />

              <div className="absolute bottom-10 left-10 rounded-2xl bg-white/90 p-5 backdrop-blur">

                <p className="text-sm text-gray-500">
                  Community Impact
                </p>

                <h3 className="text-3xl font-bold text-[#155E4B]">
                  100,000+
                </h3>

                <p className="text-sm">
                  People Reached
                </p>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}