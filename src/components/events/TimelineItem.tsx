"use client";

interface Props {
  year: string;
  title: string;
  description: string;
  isLast: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  isLast,
}: Props) {
  return (
    <div className="relative flex gap-8">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#155E4B] text-lg font-bold text-white">
          {year}
        </div>

        {!isLast && (
          <div className="mt-2 h-28 w-[2px] bg-[#155E4B]/20" />
        )}
      </div>

      {/* Content */}

      <div className="pb-12 pt-2">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 max-w-2xl leading-8 text-gray-600">
          {description}
        </p>

      </div>

    </div>
  );
}