"use client";

import { Heart, Repeat } from "lucide-react";

import type { DonationTypeValue } from "./DonationForm";

interface DonationTypeProps {
  value: DonationTypeValue;
  onChange: (value: DonationTypeValue) => void;
}

const options = [
  {
    value: "one-time" as const,
    title: "One-Time",
    description: "Make a single contribution.",
    icon: Heart,
  },
  {
    value: "monthly" as const,
    title: "Monthly",
    description: "Support us every month.",
    icon: Repeat,
  },
];

export default function DonationType({
  value,
  onChange,
}: DonationTypeProps) {
  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Donation Frequency
        </h2>

        <p className="mt-2 text-slate-600">
          Choose how you&apos;d like to support Youth&apos;s Voice.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {options.map((option) => {
          const Icon = option.icon;

          const selected = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                group
                rounded-3xl
                border-2
                p-6
                text-left
                transition-all
                duration-300
                ${
                  selected
                    ? "border-[#155E4B] bg-[#155E4B]/5 shadow-md"
                    : "border-gray-200 hover:border-[#155E4B]/40 hover:-translate-y-1 hover:shadow-lg"
                }
              `}
            >
              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  transition
                  ${
                    selected
                      ? "bg-[#155E4B] text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-[#155E4B]/10 group-hover:text-[#155E4B]"
                  }
                `}
              >
                <Icon size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {option.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {option.description}
              </p>
            </button>
          );
        })}

      </div>

    </section>
  );
}