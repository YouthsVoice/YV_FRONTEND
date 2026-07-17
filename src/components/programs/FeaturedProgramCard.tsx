import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  program: any;
  reverse?: boolean;
}

export default function FeaturedProgramCard({
  program,
  reverse = false,
}: Props) {
  return (
    <div
      className={`
      grid
      items-center
      gap-12
      rounded-[40px]
      border
      bg-white
      p-8
      lg:grid-cols-2
      ${
        reverse
          ? "lg:[&>*:first-child]:order-2"
          : ""
      }
      `}
    >
      {/* Image */}

      <div className="relative h-[350px] overflow-hidden rounded-[32px]">

        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />

      </div>

      {/* Content */}

      <div>

        <span
          className="
          rounded-full
          bg-green-50
          px-4
          py-2
          text-sm
          font-medium
          text-[#155E4B]
          "
        >
          {program.category}
        </span>

        <h3 className="mt-6 text-4xl font-bold">
          {program.title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {program.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {program.stats.map(
            (item: string) => (
              <div
                key={item}
                className="
                rounded-full
                border
                px-4
                py-2
                text-sm
                "
              >
                {item}
              </div>
            )
          )}

        </div>

        <Link
          href={`/programs/${program.slug}`}
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#155E4B]
          "
        >
          Learn More

          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}