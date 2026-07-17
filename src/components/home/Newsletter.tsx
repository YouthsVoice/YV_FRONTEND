"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#FFFDF7]">

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-green-100 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4">

        <div className="rounded-[40px] bg-white border p-10 md:p-16 shadow-sm text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
            <Mail className="text-[#155E4B]" size={32} />
          </div>

          <h2 className="mt-8 text-4xl font-bold">
            Stay Connected With
            <span className="block text-[#155E4B]">
              Youth&apos;s Voice
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Receive campaign updates,
            volunteer opportunities,
            event announcements and
            impact stories directly
            in your inbox.
          </p>

          <form className="mt-10 flex flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1
              rounded-xl
              border
              px-5
              py-4
              outline-none
              focus:border-[#155E4B]
              "
            />

            <button
              className="
              rounded-xl
              bg-[#155E4B]
              px-8
              py-4
              font-semibold
              text-white
              "
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}