"use client";

import {
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  Ticket,
  Languages,
} from "lucide-react";

import { Event } from "@/types/events/event";

interface Props {
  event: Event;
}

export default function EventInformation({
  event,
}: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const cards = [
    {
      icon: CalendarDays,
      title: "Date & Time",
      value: `${formattedDate} • ${event.time}`,
    },
    {
      icon: MapPin,
      title: "Venue",
      value: event.location,
    },
    {
      icon: Users,
      title: "Participants",
      value: event.information.participants,
    },
    {
      icon: Clock3,
      title: "Duration",
      value: event.information.duration,
    },
    {
      icon: Ticket,
      title: "Entry",
      value: event.information.entry,
    },
    {
      icon: Languages,
      title: "Language",
      value: event.information.language,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Event Information
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Everything You Need
            <span className="block text-[#155E4B]">
              Before You Attend
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find all the essential details to help you
            prepare for the event.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[28px] border border-gray-200 bg-[#FFFDF7] p-8 transition hover:-translate-y-1 hover:border-[#155E4B]/20 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#155E4B]/10 text-[#155E4B]">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {card.value}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}