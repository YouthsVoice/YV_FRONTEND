"use client";

import { ArrowRight, Lock } from "lucide-react";

interface DonateButtonProps {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function DonateButton({
  loading = false,
  disabled = false,
  onClick,
}: DonateButtonProps) {
  return (
    <div className="space-y-5">

      <button
        type="button"
        disabled={disabled || loading}
        onClick={onClick}
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
        {loading ? (
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
  );
}