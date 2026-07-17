"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import  {IconType} from 'react-icons'

interface Props {
  stat: {
    value: number;
    suffix: string;
    title: string;
    icon: IconType;
  };
}

export default function ProgramStatCard({
  stat,
}: Props) {
  const Icon = stat.icon;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="
      group
      rounded-[32px]
      border
      bg-white
      p-8
      text-center
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div
        className="
        mx-auto
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-green-50
        "
      >
        <Icon
          size={30}
          className="text-[#155E4B]"
        />
      </div>

      <h3 className="mt-6 text-5xl font-bold text-[#155E4B]">
        {inView && (
          <CountUp
            end={stat.value}
            duration={2}
            separator=","
          />
        )}
        {stat.suffix}
      </h3>

      <p className="mt-3 text-gray-600">
        {stat.title}
      </p>
    </div>
  );
}