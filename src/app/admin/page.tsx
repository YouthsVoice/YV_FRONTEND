import Link from "next/link";
import {
  CalendarDays,
  FolderKanban,
  Plus,
  ArrowRight,
  Clock,
} from "lucide-react";

import { API_URL } from "@/lib/api/event";

interface Event {
  slug: string;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  featured: boolean;
}
export const dynamic = 'force-dynamic';
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

export default async function AdminDashboard() {
  const events = await getEvents();

  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  const ongoingEvents = events.filter(
    (event) => event.status === "ongoing"
  );

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage Youth&apos;s Voice events and programs.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Events"
          value={events.length}
          icon={<CalendarDays className="h-5 w-5" />}
        />

        <StatCard
          title="Upcoming"
          value={upcomingEvents.length}
          icon={<Clock className="h-5 w-5" />}
        />

        <StatCard
          title="Ongoing"
          value={ongoingEvents.length}
          icon={<CalendarDays className="h-5 w-5" />}
        />

        <StatCard
          title="Programs"
          value="—"
          icon={<FolderKanban className="h-5 w-5" />}
        />
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/admin/events/new"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#155E4B] hover:shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#155E4B]/10 text-[#155E4B]">
                <Plus className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Add New Event
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Create a new event
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#155E4B]" />
          </Link>

          <Link
            href="/admin/programs/new"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#155E4B] hover:shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#155E4B]/10 text-[#155E4B]">
                <Plus className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Add New Program
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Create a new program
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#155E4B]" />
          </Link>
        </div>
      </div>

      {/* Recent Events */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-semibold text-slate-900">
              Recent Events
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Events from your backend
            </p>
          </div>

          <Link
            href="/admin/events"
            className="flex items-center gap-1 text-sm font-medium text-[#155E4B] hover:underline"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="px-5 py-8 text-center text-sm text-slate-500">
            No events found.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {events.slice(0, 5).map((event) => (
              <Link
                key={event.slug}
                href={`/admin/events/${event.slug}`}
                className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <h3 className="truncate font-medium text-slate-900">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {event.location} • {event.date}
                  </p>
                </div>

                <StatusBadge status={event.status} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* Stat Card */

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#155E4B]/10 text-[#155E4B]">
          {icon}
        </div>
      </div>
    </div>
  );
}

/* Status Badge */

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
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}