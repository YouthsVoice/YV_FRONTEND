"use client";

import { useState } from "react";

import DonationType from "./DonationType";
import CampaignSelector from "./CampaignSelector";
import AmountSelector from "./AmountSelector";
import DonorInformation from "./DonorInformation";
import PaymentMethod from "./PaymentMethod";
import DonationSummary from "./DonationSummary";
import DonateButton from "./DonateButton";

export type DonationTypeValue = "one-time" | "monthly";

export type PaymentMethodValue =
  | "bkash"
  | "nagad"
  | "rocket"
  | "bank"; 
  
export interface DonorInformationData {
  name: string;
  email: string;
  phone: string;
  anonymous: boolean;
}

export default function DonationForm() {
  const [donationType, setDonationType] =
    useState<DonationTypeValue>("one-time");

  const [campaign, setCampaign] =
    useState("general");

  const [amount, setAmount] =
    useState<number>(1000);

  const [customAmount, setCustomAmount] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodValue>("bkash");

  const [donor, setDonor] =
    useState<DonorInformationData>({
      name: "",
      email: "",
      phone: "",
      anonymous: false,
    });

  const donationAmount =
    customAmount !== ""
      ? Number(customAmount)
      : amount;

  return (
    <section className="bg-[#F8FAF9] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Secure Donation
          </span>

          <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Complete Your Donation
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Your generosity empowers young people,
            strengthens communities, and creates
            lasting impact across Bangladesh.
          </p>

        </div>

        {/* Layout */}

        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">

          {/* Left */}

          <div className="space-y-8">

            <DonationType
              value={donationType}
              onChange={setDonationType}
            />

            <CampaignSelector
              value={campaign}
              onChange={setCampaign}
            />

            <AmountSelector
              amount={amount}
              customAmount={customAmount}
              onAmountChange={setAmount}
              onCustomAmountChange={
                setCustomAmount
              }
            />

            <DonorInformation
              donor={donor}
              onChange={setDonor}
            />

            <PaymentMethod
              value={paymentMethod}
              onChange={setPaymentMethod}
            />

            <DonateButton />

          </div>

          {/* Right */}

          <aside className="lg:sticky lg:top-28 lg:self-start">

            <DonationSummary
              donationType={donationType}
              campaign={campaign}
              amount={donationAmount}
              paymentMethod={paymentMethod}
              donor={donor}
            />

          </aside>

        </div>

      </div>
    </section>
  );
}