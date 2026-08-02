import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  HeartHandshake,
  CalendarDays,
} from "lucide-react";

export default function VolunteerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAF9] via-white to-[#EEF8F3]">

      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#155E4B]/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#155E4B]/10 bg-[#155E4B]/5 px-4 py-2 text-sm font-semibold text-[#155E4B]">

              <HeartHandshake size={16} />

              Volunteer Opportunities

            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">

              Become a
              <span className="block text-[#155E4B]">
                Youth&apos;s Voice
              </span>

              Volunteer

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              Join meaningful events, support communities,
              gain real-world experience, and receive an
              official certificate while creating positive
              impact across Bangladesh.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#registration"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#155E4B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#114A3B] hover:shadow-xl"
              >
                Register Now

                <ArrowRight size={18} />

              </Link>

              <Link
                href="#events"
                className="inline-flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:border-[#155E4B] hover:text-[#155E4B]"
              >
                <CalendarDays size={18} />

                Upcoming Events

              </Link>

            </div>

            {/* Features */}

            <div className="mt-12 flex flex-wrap gap-6">

              <div className="flex items-center gap-3">

                <Award
                  size={20}
                  className="text-[#155E4B]"
                />

                <span className="font-medium">
                  Official Certificate
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Users
                  size={20}
                  className="text-[#155E4B]"
                />

                <span className="font-medium">
                  Community Impact
                </span>

              </div>

              <div className="flex items-center gap-3">

                <HeartHandshake
                  size={20}
                  className="text-[#155E4B]"
                />

                <span className="font-medium">
                  Leadership Experience
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/volunteer/hero.jpg"
                alt="Youth's Voice Volunteers"
                width={700}
                height={850}
                className="h-[700px] w-full object-cover"
                priority
              />

            </div>

            {/* Floating Stats */}

            <div className="absolute -left-8 top-12 rounded-3xl border border-white/30 bg-white/90 p-6 shadow-xl backdrop-blur">

              <p className="text-3xl font-black text-[#155E4B]">
                1000+
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Volunteers
              </p>

            </div>

            <div className="absolute -right-8 bottom-12 rounded-3xl border border-white/30 bg-white/90 p-6 shadow-xl backdrop-blur">

              <p className="text-3xl font-black text-[#155E4B]">
                50+
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Events Organized
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}