"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  CalendarDays,
  MapPinned,
  Award,
  Target,
  Sprout,
  Handshake,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Volunteers",
  },
  {
    icon: HeartHandshake,
    value: 100000,
    suffix: "+",
    label: "Lives Impacted",
  },
  {
    icon: CalendarDays,
    value: 250,
    suffix: "+",
    label: "Programs & Events",
  },
  {
    icon: MapPinned,
    value: 64,
    suffix: "",
    label: "Districts Reached",
  },
];

const achievements = [
  {
    icon: Award,
    title: "8+ Years",
    description: "Creating social impact",
  },
  {
    icon: Handshake,
    title: "50+ Partners",
    description: "Working together",
  },
  {
    icon: Target,
    title: "95%",
    description: "Project completion rate",
  },
  {
    icon: Sprout,
    title: "Sustainable",
    description: "Community development",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Numbers That Tell
            <span className="block text-[#155E4B]">
              A Story Of Change
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Every volunteer, every event and every project
            contributes to building stronger communities
            throughout Bangladesh.
          </p>
        </div>

        {/* Main Stats */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
                  <Icon
                    size={28}
                    className="text-[#155E4B]"
                  />
                </div>

                <h3 className="text-4xl font-extrabold text-[#155E4B]">
                  <CountUp
                    end={item.value}
                    duration={2.5}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-2 text-gray-500">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-[#155E4B] p-6 text-white"
              >
                <Icon size={28} />

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}