import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function StoryCard({
  story,
}: {
  story: any;
}) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-[32px]
      border
      bg-white
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="relative h-72 overflow-hidden">

        <Image
          src={story.image}
          alt={story.name}
          fill
          className="
          object-cover
          transition
          duration-700
          group-hover:scale-105
          "
        />

      </div>

      <div className="p-8">

        <div
          className="
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-green-50
          "
        >
          <Quote
            size={22}
            className="text-[#155E4B]"
          />
        </div>

        <span
          className="
          rounded-full
          bg-green-50
          px-3
          py-1
          text-xs
          font-medium
          text-[#155E4B]
          "
        >
          {story.program}
        </span>

        <h3 className="mt-5 text-2xl font-bold">
          {story.name}
        </h3>

        <p className="mt-5 italic leading-7 text-gray-600">
          {story.quote}
        </p>

        <p className="mt-5 text-sm font-medium text-gray-500">
          {story.impact}
        </p>

        <Link
          href={`/stories/${story.slug}`}
          className="
          mt-6
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#155E4B]
          "
        >
          Read Full Story

          <ArrowRight
            size={16}
            className="
            transition
            group-hover:translate-x-1
            "
          />
        </Link>

      </div>
    </div>
  );
}