"use client";

import MissionVisionCard from "./MissionVisionCard";
import { missionVision } from "@/constants/about/mission-vision";

export default function MissionVision() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#155E4B]">
            Purpose & Direction
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            What Drives Us
            <span className="block text-[#155E4B]">
              Forward Every Day
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our mission guides our actions,
            while our vision inspires the future
            we strive to create.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <MissionVisionCard
            title={missionVision.mission.title}
            description={
              missionVision.mission.description
            }
            icon={missionVision.mission.icon}
            gradient="
              bg-gradient-to-br
              from-[#155E4B]
              to-[#0D3D31]
            "
          />

          <MissionVisionCard
            title={missionVision.vision.title}
            description={
              missionVision.vision.description
            }
            icon={missionVision.vision.icon}
            gradient="
              bg-gradient-to-br
              from-[#C96D32]
              to-[#A95520]
            "
          />

        </div>

      </div>

    </section>
  );
}