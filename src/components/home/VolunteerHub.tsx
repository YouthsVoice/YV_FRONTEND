"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import VolunteerOpportunityCard from "./VolunteerOpportunityCard";
import { volunteerOpportunities } from "@/constants/volunteer";

export default function VolunteerHub() {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-4">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
              Volunteer Hub
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Join A Community
              <span className="block text-[#155E4B]">
                That Creates Change
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Whether you&apos;re passionate about
              awareness campaigns, community
              development or humanitarian work,
              there&apos;s a place for you at Youth&apos;s
              Voice.
            </p>

            <Link
              href="/volunteer"
              className="mt-8 inline-flex rounded-xl bg-[#155E4B] px-6 py-4 font-semibold text-white"
            >
              Become A Volunteer
            </Link>

            {/* STATS */}

            <div className="mt-12 grid grid-cols-3 gap-4">

              <div>
                <h3 className="text-3xl font-bold text-[#155E4B]">
                  <CountUp end={10000} />+
                </h3>

                <p className="text-sm text-gray-500">
                  Volunteers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#155E4B]">
                  <CountUp end={250} />+
                </h3>

                <p className="text-sm text-gray-500">
                  Events
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#155E4B]">
                  95%
                </h3>

                <p className="text-sm text-gray-500">
                  Return Rate
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >

            {volunteerOpportunities.map(
              (opportunity) => (
                <VolunteerOpportunityCard
                  key={opportunity.title}
                  {...opportunity}
                />
              )
            )}

          </motion.div>

        </div>

      </div>

    </section>
  );
}