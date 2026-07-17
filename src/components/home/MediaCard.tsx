import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
}

export default function MediaCard({
  item,
}: Props) {
  return (
    <Link
      href={`/media/${item.id}`}
      className="
      group
      overflow-hidden
      rounded-[28px]
      border
      bg-white
      shadow-sm
      transition-all
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="relative h-56 overflow-hidden">

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-6">

        <span
          className="
          rounded-full
          bg-green-50
          px-3
          py-1
          text-sm
          text-[#155E4B]
          "
        >
          {item.category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {item.date}
        </p>

        <div
          className="
          mt-5
          flex
          items-center
          gap-2
          font-semibold
          text-[#155E4B]
          "
        >
          Read More
          <ArrowRight size={18} />
        </div>

      </div>
    </Link>
  );
}