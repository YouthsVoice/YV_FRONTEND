import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#155E4B] to-[#0B3D2F] py-28 lg:py-36">
      {/* Background Decorations */}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#4ADE80] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            We&apos;d Love to
            <span className="block text-[#A7F3D0]">
              Hear From You
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
            Whether you have a question, want to collaborate, become a
            volunteer, or simply learn more about Youth&apos;s Voice,
            our team is always happy to help.
          </p>

        </div>

        {/* Quick Contact Cards */}

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center backdrop-blur transition hover:bg-white/15">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Mail className="text-[#A7F3D0]" size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Email Us
            </h3>

            <p className="mt-3 text-white/70">
              contact@youthsvoice.org
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center backdrop-blur transition hover:bg-white/15">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Phone className="text-[#A7F3D0]" size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Call Us
            </h3>

            <p className="mt-3 text-white/70">
              +880 1XXX-XXXXXX
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center backdrop-blur transition hover:bg-white/15">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <MapPin className="text-[#A7F3D0]" size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Visit Us
            </h3>

            <p className="mt-3 text-white/70">
              Chattogram, Bangladesh
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}