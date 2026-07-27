"use client";

import { User, Mail, Phone } from "lucide-react";
import type { DonorInformationData } from "./DonationForm";

interface DonorInformationProps {
  donor: DonorInformationData;
  onChange: (donor: DonorInformationData) => void;
}

export default function DonorInformation({
  donor,
  onChange,
}: DonorInformationProps) {
  const updateField = (
    field: keyof DonorInformationData,
    value: string | boolean
  ) => {
    onChange({
      ...donor,
      [field]: value,
    });
  };

  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Donor Information
        </h2>

        <p className="mt-2 text-slate-600">
          Please provide your details so we can process your donation and send
          you a confirmation.
        </p>

      </div>

      <div className="space-y-6">

        {/* Full Name */}

        <div>

          <label
            htmlFor="name"
            className="mb-2 block font-medium text-slate-800"
          >
            Full Name
          </label>

          <div className="flex items-center rounded-2xl border border-gray-300 px-4 transition focus-within:border-[#155E4B] focus-within:ring-2 focus-within:ring-[#155E4B]/10">

            <User
              size={20}
              className="text-gray-400"
            />

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={donor.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              className="w-full bg-transparent px-4 py-4 outline-none"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label
            htmlFor="email"
            className="mb-2 block font-medium text-slate-800"
          >
            Email Address
          </label>

          <div className="flex items-center rounded-2xl border border-gray-300 px-4 transition focus-within:border-[#155E4B] focus-within:ring-2 focus-within:ring-[#155E4B]/10">

            <Mail
              size={20}
              className="text-gray-400"
            />

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={donor.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              className="w-full bg-transparent px-4 py-4 outline-none"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label
            htmlFor="phone"
            className="mb-2 block font-medium text-slate-800"
          >
            Phone Number
          </label>

          <div className="flex items-center rounded-2xl border border-gray-300 px-4 transition focus-within:border-[#155E4B] focus-within:ring-2 focus-within:ring-[#155E4B]/10">

            <Phone
              size={20}
              className="text-gray-400"
            />

            <input
              id="phone"
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              value={donor.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              className="w-full bg-transparent px-4 py-4 outline-none"
            />

          </div>

        </div>

        {/* Anonymous */}

        <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-[#155E4B]/40">

          <input
            type="checkbox"
            checked={donor.anonymous}
            onChange={(e) =>
              updateField("anonymous", e.target.checked)
            }
            className="mt-1 h-5 w-5 accent-[#155E4B]"
          />

          <div>

            <p className="font-semibold text-slate-900">
              Donate Anonymously
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Your donation will still be processed normally, but your name
              won&apos;t be displayed publicly in donor acknowledgements.
            </p>

          </div>

        </label>

      </div>

    </section>
  );
}