interface Props {
  title: string;
  description: string;
  icon: any;
  gradient: string;
}

export default function MissionVisionCard({
  title,
  description,
  icon: Icon,
  gradient,
}: Props) {
  return (
    <div
      className={`
      relative
      overflow-hidden
      rounded-[36px]
      p-10
      text-white
      ${gradient}
      `}
    >
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
        <Icon size={32} />
      </div>

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <p className="mt-6 text-lg leading-8 text-white/85">
        {description}
      </p>

      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />
    </div>
  );
}