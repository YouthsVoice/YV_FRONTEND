"use client";

import { HandCoins } from "lucide-react";

interface AmountSelectorProps {
  amount: number;
  customAmount: string;
  onAmountChange: (amount: number) => void;
  onCustomAmountChange: (value: string) => void;
}

const presetAmounts = [500, 1000, 2000, 5000];

export default function AmountSelector({
  amount,
  customAmount,
  onAmountChange,
  onCustomAmountChange,
}: AmountSelectorProps) {
  const handlePresetClick = (value: number) => {
    onAmountChange(value);
    onCustomAmountChange("");
  };

  const handleCustomAmount = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, "");

    onCustomAmountChange(value);

    if (value) {
      onAmountChange(Number(value));
    }
  };

  return (
    <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-start gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#155E4B]/10 text-[#155E4B]">
          <HandCoins size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Choose an Amount
          </h2>

          <p className="mt-2 text-slate-600">
            Select a suggested amount or enter your own.
          </p>
        </div>

      </div>

      {/* Preset Buttons */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

        {presetAmounts.map((value) => {
          const selected =
            customAmount === "" && amount === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => handlePresetClick(value)}
              className={`
                rounded-2xl
                border-2
                px-6
                py-5
                text-lg
                font-semibold
                transition-all
                duration-300
                ${
                  selected
                    ? "border-[#155E4B] bg-[#155E4B] text-white"
                    : "border-gray-200 hover:border-[#155E4B] hover:text-[#155E4B]"
                }
              `}
            >
              ৳{value.toLocaleString()}
            </button>
          );
        })}

      </div>

      {/* Divider */}

      <div className="my-8 flex items-center gap-4">

        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">
          OR
        </span>

        <div className="h-px flex-1 bg-gray-200" />

      </div>

      {/* Custom Amount */}

      <div>

        <label
          htmlFor="customAmount"
          className="mb-3 block font-semibold text-slate-900"
        >
          Custom Amount
        </label>

        <div className="flex items-center rounded-2xl border-2 border-gray-200 px-5 transition focus-within:border-[#155E4B]">

          <span className="text-xl font-bold text-[#155E4B]">
            ৳
          </span>

          <input
            id="customAmount"
            type="text"
            inputMode="numeric"
            placeholder="Enter amount"
            value={customAmount}
            onChange={handleCustomAmount}
            className="w-full bg-transparent px-4 py-5 text-lg outline-none"
          />

        </div>

        <p className="mt-3 text-sm text-gray-500">
          Minimum donation: <strong>৳100</strong>
        </p>

      </div>

    </section>
  );
}