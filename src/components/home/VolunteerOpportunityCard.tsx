import {
  ArrowRight,
  MapPin,
} from "lucide-react";

interface Props {
  title: string;
  location: string;
  type: string;
}

export default function VolunteerOpportunityCard({
  title,
  location,
  type,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#155E4B]">
          {type}
        </span>

      </div>

      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2 text-gray-500">
        <MapPin size={16} />
        {location}
      </div>

      <button className="mt-5 flex items-center gap-2 font-semibold text-[#155E4B]">
        Apply Now
        <ArrowRight size={18} />
      </button>

    </div>
  );
}