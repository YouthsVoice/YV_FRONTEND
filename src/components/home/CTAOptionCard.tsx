import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function CTAOptionCard({
  title,
  description,
  href,
  icon,
}: Props) {
  return (
    <Link
      href={href}
      className="
      group
      rounded-[32px]
      border
      bg-white
      p-8
      shadow-sm
      transition-all
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-semibold text-[#155E4B]">
        Learn More

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}