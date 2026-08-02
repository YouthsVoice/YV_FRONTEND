import {
  BadgeCheck,
  HeartHandshake,
  Users,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Official Certificate",
    description:
      "Receive a verified Youth's Voice participation certificate after successfully completing the event.",
  },
  {
    icon: Users,
    title: "Community Experience",
    description:
      "Meet passionate young people, collaborate with volunteers, and build meaningful connections.",
  },
  {
    icon: HeartHandshake,
    title: "Real Social Impact",
    description:
      "Contribute directly to initiatives that create positive change in communities across Bangladesh.",
  },
  {
    icon: GraduationCap,
    title: "Leadership & Skills",
    description:
      "Develop teamwork, communication, leadership, and event management skills through real-world experience.",
  },
];

export default function VolunteerBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Volunteer Benefits
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            What You&apos;ll Receive
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every volunteer becomes part of a growing movement of young changemakers
            while gaining valuable experiences that extend beyond the event itself.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#155E4B]/30 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#155E4B]/10 transition group-hover:bg-[#155E4B]">

                  <Icon
                    size={30}
                    className="text-[#155E4B] transition group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}