import { Event } from "@/types/events/event";

export const events: Event[] = [
  {
    slug: "mahm-awareness-campaign",

    title: "MHM Awareness Campaign",

    tagline: "Breaking Stigma. Empowering Futures.",

    description:
      "Join us for an interactive awareness campaign focused on menstrual health education, youth empowerment, and community engagement.",

    coverImage: "/events/maya-event.jpg",

    date: "2026-08-24",

    time: "09:00 AM - 02:00 PM",

    location: "Chattogram, Bangladesh",

    category: "Health",

    featured: true,

    status: "upcoming",

    registrationLink: "/volunteer",

    gallery: [
      "/events/gallery/maya-1.jpg",
      "/events/gallery/maya-2.jpg",
      "/events/gallery/maya-3.jpg",
    ],
  },

  {
    slug: "fight-against-winter-2026",

    title: "Fight Against Winter",

    tagline: "Sharing Warmth, Spreading Hope.",

    description:
      "Help distribute winter clothing and essential supplies to underprivileged communities across Bangladesh.",

    coverImage: "/events/winter-event.jpg",

    date: "2026-12-10",

    time: "08:00 AM - 05:00 PM",

    location: "Rangamati, Bangladesh",

    category: "Community Service",

    featured: false,

    status: "upcoming",

    registrationLink: "/volunteer",

    gallery: [
      "/events/gallery/winter-1.jpg",
      "/events/gallery/winter-2.jpg",
    ],
  },

  {
    slug: "cyber-safety-workshop",

    title: "Cyber Safety Workshop",

    tagline: "Stay Safe. Stay Smart.",

    description:
      "An interactive workshop teaching students about online privacy, cyberbullying, scams, and digital security.",

    coverImage: "/events/cyber-event.jpg",

    date: "2026-09-18",

    time: "10:00 AM - 01:00 PM",

    location: "Dhaka, Bangladesh",

    category: "Workshop",

    featured: false,

    status: "completed",

    registrationLink: "/volunteer",

    gallery: [
      "/events/gallery/cyber-1.jpg",
      "/events/gallery/cyber-2.jpg",
    ],
  },

  {
    slug: "film-festival",

    title: "Women's Film Festival",

    tagline: "Stories That Inspire Change.",

    description:
      "A celebration of powerful films highlighting women's voices, creativity, and social impact.",

    coverImage: "/events/film-festival.jpg",

    date: "2026-05-15",

    time: "03:00 PM - 08:00 PM",

    location: "Chattogram, Bangladesh",

    category: "Festival",

    featured: false,

    status: "completed",

    gallery: [
      "/events/gallery/film-1.jpg",
      "/events/gallery/film-2.jpg",
      "/events/gallery/film-3.jpg",
    ],
  },
];