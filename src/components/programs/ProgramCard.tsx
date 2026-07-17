import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import  {IconType} from 'react-icons'

export default function ProgramCard({
  program,
}: {
  program: {
    slug: string;
    image: string;
    category: string;
    title: string;
    description: string;
  };
}) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="
      group
      overflow-hidden
      rounded-[28px]
      border
      bg-white
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="relative h-64 overflow-hidden">

        <Image
          src={program.image}
          alt={program.title}
          fill
          className="
          object-cover
          transition
          duration-700
          group-hover:scale-105
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
          text-xs
          font-medium
          text-[#155E4B]
          "
        >
          {program.category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {program.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {program.description}
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
          Learn More

          <ArrowRight
            size={16}
            className="
            transition
            group-hover:translate-x-1
            "
          />
        </div>

      </div>

    </Link>
  );
}