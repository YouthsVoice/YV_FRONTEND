import Image from "next/image";
import Link from "next/link";
interface Props {
  member: {
    name: string;
    position: string;
    image: string;
    shortBio: string;
    linkedin: string;
  };
}

export default function TeamCard({
  member,
}: Props) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-[32px]
      border
      bg-white
      shadow-sm
      transition-all
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="relative h-96 overflow-hidden">

        <Image
          src={member.image}
          alt={member.name}
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

        <h3 className="text-2xl font-bold">
          {member.name}
        </h3>

        <p className="mt-2 font-medium text-[#155E4B]">
          {member.position}
        </p>

        <p className="mt-5 text-gray-600 leading-7">
          {member.shortBio}
        </p>

        <Link
          href={member.linkedin}
          className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-[#155E4B]
          font-semibold
          "
        >
        </Link>

      </div>
    </div>
  );
}