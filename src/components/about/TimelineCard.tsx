interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
}

export default function TimelineCard({
  item,
}: {
  item: TimelineItem;
}) {
  const Icon = item.icon;

  return (
    <div
      className="
      relative
      rounded-[28px]
      border
      bg-white
      p-8
      shadow-sm
      transition
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div
        className="
        mb-6
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-green-50
        "
      >
        <Icon
          size={28}
          className="text-[#155E4B]"
        />
      </div>

      <span className="text-sm font-semibold text-[#155E4B]">
        {item.year}
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {item.description}
      </p>
    </div>
  );
}