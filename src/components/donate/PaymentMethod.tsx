"use client";

import {
  Wallet,
  Landmark,
  CheckCircle2,
} from "lucide-react";

import type { PaymentMethodValue } from "./DonationForm";

interface PaymentMethodProps {
  value: PaymentMethodValue;
  onChange: (value: PaymentMethodValue) => void;
}

const paymentMethods = [
  {
    id: "bkash" as const,
    name: "bKash",
    description: "Fast and secure mobile payment.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "nagad" as const,
    name: "Nagad",
    description: "Pay instantly using Nagad.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "rocket" as const,
    name: "Rocket",
    description: "Dutch-Bangla mobile banking.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "bank" as const,
    name: "Bank Transfer",
    description: "Transfer directly from your bank.",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function PaymentMethod({
  value,
  onChange,
}: PaymentMethodProps) {
  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Payment Method
        </h2>

        <p className="mt-2 text-slate-600">
          Select your preferred payment option.
        </p>

      </div>

      {/* Methods */}

      <div className="grid gap-4 sm:grid-cols-2">

        {paymentMethods.map((method) => {
          const selected = value === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onChange(method.id)}
              className={`
                relative
                rounded-3xl
                border-2
                p-5
                text-left
                transition-all
                duration-300
                ${
                  selected
                    ? "border-[#155E4B] bg-[#155E4B]/5"
                    : "border-gray-200 hover:border-[#155E4B]/40 hover:-translate-y-1 hover:shadow-md"
                }
              `}
            >
              {/* Selected Badge */}

              {selected && (
                <CheckCircle2
                  size={24}
                  className="absolute right-5 top-5 text-[#155E4B]"
                />
              )}

              {/* Icon */}

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${method.color}`}
              >
                {method.id === "bank" ? (
                  <Landmark size={28} />
                ) : (
                  <Wallet size={28} />
                )}
              </div>

              {/* Name */}

              <h3 className="text-lg font-bold text-slate-900">
                {method.name}
              </h3>

              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {method.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Security Notice */}

      <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">

        <p className="text-sm leading-6 text-emerald-800">
          🔒 Your payment information is processed securely. Youth&apos;s Voice
          does not store your financial credentials.
        </p>

      </div>

    </section>
  );
}