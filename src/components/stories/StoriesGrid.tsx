import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Bringing Warmth to Remote Communities",
    excerpt:
      "Volunteers traveled across the hills of Rangamati to distribute winter clothing and bring hope to hundreds of families.",
    image: "/stories/story-1.jpg",
    category: "Community Service",
    date: "Dec 10, 2026",
    readTime: "4 min read",
    href: "/stories/fight-against-winter",
  },
  {
    id: 2,
    title: "Breaking the Silence Around Menstrual Health",
    excerpt:
      "Students and volunteers came together to create safe conversations about menstrual health and hygiene.",
    image: "/stories/story-2.jpg",
    category: "Health",
    date: "Aug 24, 2026",
    readTime: "5 min read",
    href: "/stories/mhm-awareness",
  },
  {
    id: 3,
    title: "Helping Students Stay Safe Online",
    excerpt:
      "Our Cyber Safety Workshop equipped young learners with practical digital safety skills.",
    image: "/stories/story-3.jpg",
    category: "Workshop",
    date: "Sep 18, 2026",
    readTime: "3 min read",
    href: "/stories/cyber-safety",
  },
  {
    id: 4,
    title: "Celebrating Women's Voices Through Film",
    excerpt:
      "The Women's Film Festival inspired meaningful conversations through powerful storytelling.",
    image: "/stories/story-4.jpg",
    category: "Festival",
    date: "May 15, 2026",
    readTime: "6 min read",
    href: "/stories/film-festival",
  },
  {
    id: 5,
    title: "Youth Volunteers Making a Difference",
    excerpt:
      "Meet the volunteers who dedicated their time and energy to serving communities across Bangladesh.",
    image: "/stories/story-5.jpg",
    category: "Volunteering",
    date: "Nov 02, 2026",
    readTime: "4 min read",
    href: "/stories/youth-volunteers",
  },
  {
    id: 6,
    title: "Small Actions, Big Change",
    excerpt:
      "How simple acts of kindness created lasting impact for children and families in need.",
    image: "/stories/story-6.jpg",
    category: "Impact",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    href: "/stories/small-actions",
  },
];

export default function StoriesGrid() {
  return (
    <section
      id="stories"
      className="bg-[#F8FAF9] py-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            All Stories
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Stories That Inspire Change
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Discover inspiring moments from our volunteers, beneficiaries,
            and community initiatives across Bangladesh.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {stories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <span className="rounded-full bg-[#155E4B]/10 px-3 py-1 text-xs font-semibold text-[#155E4B]">
                  {story.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-[#155E4B]">
                  {story.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {story.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm text-slate-500">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {story.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {story.readTime}
                  </div>

                </div>

                <Link
                  href={story.href}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#155E4B] transition hover:gap-3"
                >
                  Read Story
                  <ArrowRight size={18} />
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}