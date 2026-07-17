"use client";

interface Props {
  value: {
    title: string;
    description: string;
    example: string;
    icon: any;
  };
}

export default function CoreValueCard({
  value,
}: Props) {
  const Icon = value.icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      bg-white
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div
        className="
        absolute
        -right-12
        -top-12
        h-32
        w-32
        rounded-full
        bg-green-50
        transition
        group-hover:scale-150
        "
      />

      <div className="relative z-10">

        <div
          className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#155E4B]
          text-white
          "
        >
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-bold">
          {value.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {value.description}
        </p>

        <div
          className="
          mt-6
          rounded-xl
          bg-gray-50
          p-4
          text-sm
          text-gray-600
          "
        >
          <span className="font-semibold">
            In Action:
          </span>
          {" "}
          {value.example}
        </div>

      </div>
    </div>
  );
}