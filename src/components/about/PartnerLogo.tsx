import Image from "next/image";

interface Props {
  name: string;
  logo: string;
}

export default function PartnerLogo({
  name,
  logo,
}: Props) {
  return (
    <div
      className="
      group
      flex
      h-32
      items-center
      justify-center
      rounded-[24px]
      border
      bg-white
      p-8
      transition-all
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      <Image
        src={logo}
        alt={name}
        width={180}
        height={80}
        className="
        max-h-16
        w-auto
        object-contain
        transition
        duration-300
        group-hover:grayscale-0
        "
      />
    </div>
  );
}