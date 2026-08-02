import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  User,
} from "lucide-react";

export default function FeaturedStory() {
  return (
    <section
      id="featured-story"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Featured Story
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            One Story. Lasting Impact.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Every initiative leaves behind unforgettable moments.
            Here&apos;s one story that reflects the spirit of Youth&apos;s Voice.
          </p>

        </div>

        {/* Card */}

        <div className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-xl">

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[420px]">

              <Image
                src="/stories/featured-story.jpg"
                alt="Featured Story"
                fill
                className="object-cover"
              />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-8 md:p-12">

              <span className="w-fit rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
                Community Service
              </span>

              <h3 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                More Than Winter Clothes,
                <br />
                We Delivered Hope
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                During our Fight Against Winter campaign,
                hundreds of volunteers traveled across remote
                communities to distribute warm clothing and
                essential supplies. What began as a donation
                drive became a powerful reminder that kindness
                has the ability to change lives.
              </p>

              {/* Meta */}

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <User size={18} />
                  Youth&apos;s Voice Team
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  December 2026
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  Rangamati
                </div>

              </div>

              {/* Quote */}

              <div className="mt-10 rounded-2xl border-l-4 border-[#155E4B] bg-[#F8FAF9] p-6">

                <p className="italic leading-8 text-slate-700">
                  When I handed over a blanket to an elderly
                  woman, she smiled with tears in her eyes.
                  That single moment reminded me why volunteering
                  truly matters.
                </p>

              </div>

              {/* Button */}

              <Link
                href="/stories/fight-against-winter"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-2xl bg-[#155E4B] px-7 py-4 font-semibold text-white transition hover:bg-[#114A3B]"
              >
                Read Full Story

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}