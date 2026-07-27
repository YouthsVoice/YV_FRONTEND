"use client";

import { CheckCircle2 } from "lucide-react";
import { donationCampaigns } from "@/data/donate/donation-campaigns";

interface CampaignSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CampaignSelector({
  value,
  onChange,
}: CampaignSelectorProps) {
  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Choose a Campaign
        </h2>

        <p className="mt-2 text-slate-600">
          Decide where you&apos;d like your donation to create impact.
        </p>

      </div>

      {/* Campaign Cards */}

      <div className="space-y-4">

        {donationCampaigns.map((campaign) => {
          const selected = value === campaign.id;

          return (
            <button
              key={campaign.id}
              type="button"
              onClick={() => onChange(campaign.id)}
              className={`
                group
                flex
                w-full
                items-start
                justify-between
                rounded-2xl
                border-2
                p-5
                text-left
                transition-all
                duration-300
                ${
                  selected
                    ? "border-[#155E4B] bg-[#155E4B]/5"
                    : "border-gray-200 hover:border-[#155E4B]/40 hover:bg-gray-50"
                }
              `}
            >
              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {campaign.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {campaign.description}
                </p>

              </div>

              <div className="ml-4 shrink-0">

                {selected ? (
                  <CheckCircle2
                    size={24}
                    className="text-[#155E4B]"
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full border-2 border-gray-300 transition-colors group-hover:border-[#155E4B]" />
                )}

              </div>
            </button>
          );
        })}

      </div>

    </section>
  );
}