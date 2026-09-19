import EventEditor from "@/components/admin/EventEditor";

const emptyEvent = {
  title: "",
  slug: "",
  tagline: "",
  description: "",
  cover_image: "",

  date: "",
  time: "",
  location: "",
  category: "",

  featured: false,
  status: "upcoming" as const,

  registration_link: "",
  volunteer_sheet_id: "",
  donation_sheet_id: "",

  volunteer_registration: false,
  registration_fee: "0",
  available_seats: 0,

  overview: {
    title: "",
    subtitle: "",
    description: [""],
    image: "",
  },

  information: {
    participants: "",
    duration: "",
    entry: "",
    language: "",
  },

  schedule: [
    {
      time: "",
      title: "",
      description: "",
    },
  ],

  gallery: [],
};

export default function NewEventPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Add New Event
        </h1>
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
        <p className="text-sm text-amber-800">
          <span className="font-semibold">Note:</span>{" "}
          When creating a new event, please do not add the slug, volunteer
          registration file ID, or Google Sheet ID. These will be generated
          automatically.
        </p>
      </div>


        <p className="mt-1 text-sm text-slate-500">
          Create a new event for Youth&apos;s Voice.
        </p>
      </div>

      <EventEditor event={emptyEvent} />
    </div>
  );
}