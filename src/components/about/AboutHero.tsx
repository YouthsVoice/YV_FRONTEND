"use client";

import CountUp from "react-countup";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#155E4B] py-28">

      <div className="mx-auto max-w-7xl px-4">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="text-white">

            <span className="rounded-full bg-white/10 px-4 py-2">
              About Youth&apos;s Voice
            </span>

            <h1 className="mt-8 text-5xl font-bold lg:text-7xl">
              Empowering Youth.
              <span className="block">
                Transforming Communities.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-white/80">
              Youth&apos;s Voice is a youth-led
              social organization committed
              to creating sustainable change
              through volunteerism, awareness,
              education and community action.
            </p>

          </div>

          <div>
            <img
              src="/about/about-hero.webp"
              alt="Youth's Voice Team"
              className="rounded-[32px]"
            />
          </div>

        </div>

        <div className="mt-20 grid grid-cols-3 gap-6">

          <div>
            <h2 className="text-4xl font-bold text-white">
              <CountUp end={10000} />+
            </h2>

            <p className="text-white/70">
              Volunteers
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              <CountUp end={100000} />+
            </h2>

            <p className="text-white/70">
              Lives Impacted
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              13+
            </h2>

            <p className="text-white/70">
              Years Of Impact
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}