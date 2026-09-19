import { notFound } from "next/navigation";
import EventEditor from "@/components/admin/EventEditor";
import { API_URL } from "@/lib/api/event";

interface Event {
  id?: number;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  cover_image: string;

  date: string;
  time: string;
  location: string;
  category: string;

  featured: boolean;
  status: "upcoming" | "ongoing" | "completed";

  registration_link: string;
  volunteer_sheet_id: string;
  donation_sheet_id: string;

  volunteer_registration: boolean;
  registration_fee: string;
  available_seats: number;

  overview: {
    title: string;
    subtitle: string;
    description: string[];
    image: string;
  };

  information: {
    participants: string;
    duration: string;
    entry: string;
    language: string;
  };

  schedule: {
    time: string;
    title: string;
    description: string;
  }[];

  gallery: string[];

  created_at: string;
  updated_at: string;
}

async function getEvent(slug: string): Promise<Event> {
  const response = await fetch(`${API_URL}/api/events/${slug}/`, {
    next: {
      revalidate: 60,
    },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch event");
  }

  return response.json();
}

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = await getEvent(slug);

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold text-slate-900">
            Edit Event
          </h1>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {event.slug}
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-500">
          Update the event information below.
        </p>
      </div>

      <EventEditor event={event} />
    </div>
  );
}