import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    description: "For general inquiries and partnerships.",
    value: "contact@youthsvoice.org",
  },
  {
    icon: Phone,
    title: "Phone Number",
    description: "Reach us during office hours.",
    value: "+880 1XXX-XXXXXX",
  },
  {
    icon: MapPin,
    title: "Office Address",
    description: "Visit our office in Chattogram.",
    value: "Chattogram, Bangladesh",
  },
  {
    icon: Clock3,
    title: "Office Hours",
    description: "We're available throughout the week.",
    value: "Sun – Thu • 9:00 AM – 5:00 PM",
  },
];

export default function ContactInformation() {
  return (
    <section className="bg-[#F8FAF9] py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Get in Touch
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            We&apos;re Here to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you&apos;re looking to volunteer, partner with us,
            support our initiatives, or simply have a question,
            we&apos;d love to hear from you.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#155E4B]/30 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#155E4B]/10 transition group-hover:bg-[#155E4B]">

                  <Icon
                    size={30}
                    className="text-[#155E4B] transition group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <p className="mt-6 font-semibold text-[#155E4B] break-words">
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}