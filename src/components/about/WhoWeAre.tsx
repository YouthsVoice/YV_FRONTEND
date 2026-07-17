"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WHO_WE_ARE_FEATURES } from "@/constants/about/about";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-4">

              <div className="relative h-72 overflow-hidden rounded-[28px]">
                <Image
                  src="/about/who-1.webp"
                  alt="Youth's Voice Volunteers"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-48 overflow-hidden rounded-[28px]">
                <Image
                  src="/about/who-2.webp"
                  alt="Community Program"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            <div className="space-y-4 pt-12">

              <div className="relative h-48 overflow-hidden rounded-[28px]">
                <Image
                  src="/about/who-3.webp"
                  alt="Workshop"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72 overflow-hidden rounded-[28px]">
                <Image
                  src="/about/who-4.webp"
                  alt="Youth Leadership"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
              Who We Are
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              A Movement Powered
              <span className="block text-[#155E4B]">
                By Young Changemakers
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Youth&apos;s Voice is a youth-led social
              organization dedicated to creating
              positive and sustainable change
              through community engagement,
              volunteerism, education and social
              innovation.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Since our founding, we have empowered
              thousands of young people to become
              leaders, advocates and active citizens
              committed to building stronger
              communities throughout Bangladesh.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {WHO_WE_ARE_FEATURES.map(
                (feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="
                      rounded-2xl
                      border
                      p-5
                      transition
                      hover:border-[#155E4B]
                      hover:shadow-lg
                      "
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                        <Icon
                          size={24}
                          className="text-[#155E4B]"
                        />
                      </div>

                      <h3 className="font-semibold">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                }
              )}

            </div>

            <Link
              href="/impact"
              className="
              mt-10
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#155E4B]
              "
            >
              Explore Our Impact

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}