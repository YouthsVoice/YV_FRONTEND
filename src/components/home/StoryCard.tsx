import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Story {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  category: string;
}

export default function StoryCard({
  story,
}: {
  story: Story;
}) {
  return (
    <div className="group overflow-hidden rounded-[32px] border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-8">

        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#155E4B]">
          {story.category}
        </span>

        <h3 className="mt-5 text-xl font-bold">
          {story.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {story.role}
        </p>

        <p className="mt-5 leading-7 text-gray-600">
          {story.quote}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-[#155E4B]">
          Read Story
          <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}