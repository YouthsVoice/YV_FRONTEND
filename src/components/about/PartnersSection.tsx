"use client";

import Link from "next/link";
import { Handshake } from "lucide-react";

import { partnerCategories } from "@/constants/partners";
import PartnerLogo from "./PartnerLogo";

export default function PartnersSection() {
  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Partnerships
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Trusted By Organizations
            <span className="block text-[#155E4B]">
              That Believe In Change
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Collaboration is at the heart of our
            impact. Together with our partners,
            sponsors and supporters, we create
            meaningful change across Bangladesh.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-20 space-y-20">

          {partnerCategories.map((category) => (
            <div key={category.title}>

              <div className="mb-10 text-center">

                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {category.description}
                </p>

              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {category.partners.map((partner) => (
                  <PartnerLogo
                    key={partner.name}
                    name={partner.name}
                    logo={partner.logo}
                  />
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div
          className="
          mt-24
          rounded-[40px]
          bg-[#155E4B]
          p-12
          text-center
          text-white
          "
        >
          <Handshake
            size={56}
            className="mx-auto"
          />

          <h3 className="mt-6 text-3xl font-bold">
            Interested In Partnering With Us?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We are always looking for organizations,
            businesses and institutions that share
            our commitment to empowering communities
            and creating sustainable impact.
          </p>

          <Link
            href="/partnerships"
            className="
            mt-8
            inline-flex
            rounded-xl
            bg-white
            px-8
            py-4
            font-semibold
            text-[#155E4B]
            "
          >
            Become A Partner
          </Link>

        </div>

      </div>

    </section>
  );
}