"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function RegistrationCTA({ event }: Props) {
  const isRegistrationOpen =
    event.status === "upcoming" && event.registrationLink;

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#155E4B] via-[#1A7A5F] to-[#114A3B]" />

      {/* Decorative Blur */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">

        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          Join the Movement
        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
          Ready to Make
          <span className="block">
            an Impact?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
          Every volunteer, participant, and supporter helps us
          create stronger communities. We&apos;d love to have you
          join this journey.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          {isRegistrationOpen ? (
            <Link
              href={event.registrationLink!}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-[#155E4B] transition hover:-translate-y-1 hover:shadow-xl"
            >
              Register Now

              <ArrowRight size={18} />
            </Link>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-2xl bg-white/20 px-8 py-4 font-semibold text-white/60"
            >
              Registration Closed
            </button>
          )}

          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <CalendarDays size={18} />

            Explore Events
          </Link>

        </div>

      </div>

    </section>
  );
}