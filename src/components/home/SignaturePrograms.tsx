"use client";

import { programs } from "@/constants/programs";
import ProgramCard from "./ProgramCard";

export default function SignaturePrograms() {
  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Programs Creating
            <span className="block text-[#155E4B]">
              Real Community Impact
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Through innovative programs and
            grassroots initiatives, Youth&apos;s Voice
            addresses critical social challenges
            while empowering young leaders.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              program={program}
            />
          ))}

        </div>

      </div>

    </section>
  );
}