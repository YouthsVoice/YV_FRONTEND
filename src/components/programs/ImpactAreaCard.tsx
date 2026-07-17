interface Props {
  area: {
    title: string;
    description: string;
    icon: any;
  };
}

export default function ImpactAreaCard({
  area,
}: Props) {
  const Icon = area.icon;

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
        -right-10
        -top-10
        h-24
        w-24
        rounded-full
        bg-green-50
        transition
        duration-500
        group-hover:scale-150
        "
      />

      <div className="relative z-10">

        <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#155E4B]
          text-white
          "
        >
          <Icon size={30} />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {area.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {area.description}
        </p>

      </div>
    </div>
  );
}