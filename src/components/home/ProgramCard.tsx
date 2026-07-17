"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  program: any;
}

export default function ProgramCard({
  program,
}: Props) {
  const Icon = program.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-[32px] border bg-white shadow-sm"
    >
      <div className="relative h-72 overflow-hidden">

        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-6 top-6 rounded-2xl bg-white/90 p-3 backdrop-blur">
          <Icon
            size={24}
            className="text-[#155E4B]"
          />
        </div>

      </div>

      <div className="p-8">

        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#155E4B]">
          {program.impact}
        </span>

        <h3 className="mt-5 text-2xl font-bold">
          {program.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {program.description}
        </p>

        <Link
          href={`/programs/${program.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#155E4B]"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}