"use client";

import { useState } from "react";

import DonationType from "./DonationType";
import CampaignSelector from "./CampaignSelector";
import AmountSelector from "./AmountSelector";
import DonorInformation from "./DonorInformation";
import PaymentMethod from "./PaymentMethod";
import DonationSummary from "./DonationSummary";
import DonateButton from "./DonateButton";
import { ArrowRight, Lock } from "lucide-react";
import { API_URL } from "@/lib/api/event";

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
import { VoluntterEventType } from "@/types/events/event";

interface VolunteerHubProps {
  events: VoluntterEventType[];
}

export default function DonationForm({
  events,
}: VolunteerHubProps) {
  const [donationType, setDonationType] =
    useState<DonationTypeValue>("one-time");

  const [campaign, setCampaign] =
    useState("");

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

      
const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!campaign) {
    setError("Please select a campaign.");
    return;
  }

  if (
    !donor.name.trim() ||
    !donor.email.trim() ||
    !donor.phone.trim() ||
    !donor.anonymous 
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  if (!API_URL) {
    setError("Backend API URL is not configured.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(
      `${API_URL}/api/donations/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          event_slug: campaign,
          full_name: donor.name,
          email: donor.email,
          phone: donor.phone,
          anonymous: donor.anonymous,
          amount: String(donationAmount),

          payment_method: paymentMethod,
        }),
      }
    );

    // Read response safely
    const contentType =
      response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      const text = await response.text();

      console.error(
        "Non-JSON response:",
        text
      );

      throw new Error(
        `Server returned ${response.status} instead of JSON.`
      );
    }

    const data = await response.json();

    console.log(
      "Volunteer registration response:",
      data
    );

    if (!response.ok) {
      throw new Error(
        data?.detail ||
          data?.error ||
          data?.message ||
          "Failed to submit volunteer registration."
      );
    }

    // bKash payment redirect
    if (data?.bkash_url) {
      window.location.href = data.bkash_url;
      return;
    }

    if (data?.payment_url) {
      window.location.href =
        data.payment_url;
      return;
    }

    setSuccess(
      "Registration submitted successfully."
    );
  } catch (error) {
    console.error(
      "Volunteer registration error:",
      error
    );

    setError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="bg-[#F8FAF9] py-20 lg:py-28">
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
              events={events}
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

                <div className="space-y-5">
            
                  <button
                    type="submit"
                    disabled={ isSubmitting}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-[#155E4B]
                      px-8
                      py-5
                      text-lg
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#114638]
                      hover:shadow-xl
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      disabled:hover:translate-y-0
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeOpacity=".25"
                            strokeWidth="4"
                          />
            
                          <path
                            d="M22 12a10 10 0 0 1-10 10"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
            
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock size={20} />
            
                        Donate Securely
            
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
            
                  <div className="rounded-2xl bg-slate-50 p-5">
            
                    <div className="flex items-start gap-3">
            
                      <Lock
                        size={18}
                        className="mt-0.5 shrink-0 text-[#155E4B]"
                      />
            
                      <div>
            
                        <p className="font-medium text-slate-900">
                          Secure Checkout
                        </p>
            
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Clicking <strong>Donate Securely</strong> will redirect you
                          to your selected payment provider to complete your donation.
                          Your payment details are handled securely and are never stored
                          by Youth&apos;s Voice.
                        </p>
            
                      </div>
            
                    </div>
            
                  </div>
            
                </div>

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
    </form>
  );
}