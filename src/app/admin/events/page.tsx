import Link from "next/link";
import {
  Plus,
  Pencil,
  CalendarDays,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { API_URL } from "@/lib/api/event";

interface Event {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
  category: string;
  featured: boolean;
  status: "upcoming" | "ongoing" | "completed";
  volunteerRegistration?: boolean;
  registrationFee?: number;
}

async function getEvents(): Promise<Event[]> {
  const response = await fetch(`${API_URL}/api/events/`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}

export default async function AdminEventsPage() {
  const events = await getEvents();

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Events
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage all Youth&apos;s Voice events.
          </p>
        </div>

        <Link
          href="/admin/events/new"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#155E4B] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#114A3B]"
        >
          <Plus className="h-4 w-4" />
          Add Event
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Total Events"
          value={events.length}
        />

        <StatCard
          label="Upcoming"
          value={
            events.filter((event) => event.status === "upcoming").length
          }
        />

        <StatCard
          label="Completed"
          value={
            events.filter((event) => event.status === "completed").length
          }
        />
      </div>

      {/* Events */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {events.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-slate-300" />

            <h2 className="mt-4 font-semibold text-slate-900">
              No events yet
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Create your first event to get started.
            </p>

            <Link
              href="/admin/events/new"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#155E4B] px-4 py-2.5 text-sm font-medium text-white"
            >
              <Plus className="h-4 w-4" />
              Add Event
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Event
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {events.map((event) => (
                    <tr
                      key={event.slug}
                      className="transition hover:bg-slate-50"
                    >
                      {/* Event */}
                      <td className="px-6 py-4">
                        <div className="max-w-sm">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-slate-900">
                              {event.title}
                            </h3>

                            {event.featured && (
                              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                                Featured
                              </span>
                            )}
                          </div>

                          <p className="mt-1 truncate text-sm text-slate-500">
                            {event.tagline}
                          </p>

                          <p className="mt-1 text-xs capitalize text-slate-400">
                            {event.category}
                          </p>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-slate-700">
                          {event.date}
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                          {event.time}
                        </div>
                      </td>

                      {/* Location */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-slate-600">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          {event.location}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <StatusBadge status={event.status} />
                      </td>

                      {/* Action */}
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/events/${event.slug}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-[#155E4B] hover:text-[#155E4B]"
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="divide-y divide-slate-100 md:hidden">
              {events.map((event) => (
                <div
                  key={event.slug}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-900">
                          {event.title}
                        </h3>

                        {event.featured && (
                          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        {event.tagline}
                      </p>
                    </div>

                    <StatusBadge status={event.status} />
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {event.date} • {event.time}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>

                  <Link
                    href={`/admin/events/${event.slug}`}
                    className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#155E4B] hover:text-[#155E4B]"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit Event
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Stat Card */
/* -------------------------------- */

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* Status Badge */
/* -------------------------------- */

function StatusBadge({
  status,
}: {
  status: Event["status"];
}) {
  const styles = {
    upcoming: "bg-blue-50 text-blue-700",
    ongoing: "bg-green-50 text-green-700",
    completed: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}