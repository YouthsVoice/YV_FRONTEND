"use client";

import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Receipt,
  Wallet,
  Target,
} from "lucide-react";

import type {
  DonationTypeValue,
  PaymentMethodValue,
  DonorInformationData,
} from "./DonationForm";

interface DonationSummaryProps {
  donationType: DonationTypeValue;
  campaign: string;
  amount: number;
  paymentMethod: PaymentMethodValue;
  donor: DonorInformationData;
}

const campaignNames: Record<string, string> = {
  general: "General Fund",
  winter: "Fight Against Winter",
  mhm: "MHM Awareness",
  cyber: "Cyber Safety Workshop",
};

const paymentNames: Record<PaymentMethodValue, string> = {
  bkash: "bKash",
  nagad: "Nagad",
  rocket: "Rocket",
  bank: "Bank Transfer"
};

export default function DonationSummary({
  donationType,
  campaign,
  amount,
  paymentMethod,
}: DonationSummaryProps) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#155E4B]/10 text-[#155E4B]">
          <HeartHandshake size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Donation Summary
          </h2>

          <p className="text-sm text-slate-500">
            Review your donation before continuing.
          </p>
        </div>

      </div>

      {/* Summary */}

      <div className="space-y-5">

        <SummaryRow
          icon={Target}
          label="Donation Type"
          value={
            donationType === "monthly"
              ? "Monthly"
              : "One-Time"
          }
        />

        <SummaryRow
          icon={BadgeCheck}
          label="Campaign"
          value={campaignNames[campaign] ?? "General Fund"}
        />

        <SummaryRow
          icon={Wallet}
          label="Payment"
          value={paymentNames[paymentMethod]}
        />

      </div>

      {/* Amount */}

      <div className="my-8 rounded-3xl bg-[#155E4B] p-6 text-white">

        <p className="text-sm uppercase tracking-wide text-white/80">
          Donation Amount
        </p>

        <h3 className="mt-2 text-4xl font-black">
          ৳{amount.toLocaleString()}
        </h3>

        <p className="mt-2 text-white/80">
          Thank you for supporting Youth&apos;s Voice.
        </p>

      </div>

      {/* Impact */}

      <div className="rounded-3xl bg-[#F8FAF9] p-6">

        <h3 className="flex items-center gap-2 text-lg font-bold">

          <HeartHandshake
            size={20}
            className="text-[#155E4B]"
          />

          Your Impact

        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Your contribution helps Youth&apos;s Voice
          deliver education, community development,
          humanitarian relief, and youth empowerment
          initiatives across Bangladesh.
        </p>

      </div>

      {/* Trust */}

      <div className="mt-8 space-y-4">

        <TrustItem
          icon={ShieldCheck}
          text="Secure payment processing"
        />

        <TrustItem
          icon={Receipt}
          text="Instant donation receipt"
        />

        <TrustItem
          icon={BadgeCheck}
          text="Transparent fund management"
        />

      </div>
    </div>
  );
}

interface SummaryRowProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function SummaryRow({
  icon: Icon,
  label,
  value,
}: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <Icon
          size={18}
          className="text-[#155E4B]"
        />

        <span className="text-slate-600">
          {label}
        </span>

      </div>

      <span className="font-semibold text-slate-900">
        {value}
      </span>

    </div>
  );
}

interface TrustItemProps {
  icon: React.ElementType;
  text: string;
}

function TrustItem({
  icon: Icon,
  text,
}: TrustItemProps) {
  return (
    <div className="flex items-center gap-3">

      <Icon
        size={18}
        className="text-[#155E4B]"
      />

      <span className="text-sm text-slate-600">
        {text}
      </span>

    </div>
  );
}