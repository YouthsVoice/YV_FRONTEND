import { Event } from "@/types/events/event";

export const events: Event[] = [
  {
    slug: "mhm-awareness-campaign",

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

    information: {
      participants: "Open for Everyone",
      duration: "5 Hours",
      entry: "Free Registration",
      language: "Bangla & English",
    },

    overview: {
      title: "About This Event",

      subtitle: "Creating Awareness, Inspiring Change",

      description: [
        "The MHM Awareness Campaign aims to promote menstrual health education and eliminate the stigma surrounding menstruation through open conversations and interactive learning.",

        "Participants will engage in workshops, awareness sessions, and collaborative activities led by healthcare professionals, volunteers, and educators.",

        "Together, we strive to create safer, healthier, and more informed communities while empowering young people with knowledge and confidence.",
      ],

      image: "/events/maya-overview.jpg",
    },

    schedule: [
      {
        time: "09:00 AM",
        title: "Registration",
        description:
          "Participant registration, welcome kit distribution, and networking.",
      },
      {
        time: "09:30 AM",
        title: "Opening Ceremony",
        description:
          "Introduction to the campaign and keynote speeches.",
      },
      {
        time: "10:30 AM",
        title: "Interactive Workshop",
        description:
          "Hands-on learning sessions on menstrual health and hygiene.",
      },
      {
        time: "12:00 PM",
        title: "Group Discussion",
        description:
          "Open discussion and Q&A with experts and volunteers.",
      },
      {
        time: "01:30 PM",
        title: "Closing Session",
        description:
          "Feedback, certificates, and group photographs.",
      },
    ],

    gallery: [
      "/events/gallery/maya-1.jpg",
      "/events/gallery/maya-2.jpg",
      "/events/gallery/maya-3.jpg",
      "/events/gallery/maya-4.jpg",
      "/events/gallery/maya-5.jpg",
      "/events/gallery/maya-6.jpg",
    ],
  },

  {
    slug: "fight-against-winter-2026",

    title: "Fight Against Winter",

    tagline: "Sharing Warmth. Spreading Hope.",

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

    information: {
      participants: "Registered Volunteers",
      duration: "9 Hours",
      entry: "Volunteer Registration",
      language: "Bangla",
    },

    overview: {
      title: "About This Event",

      subtitle: "Bringing Warmth to Those in Need",

      description: [
        "Fight Against Winter is one of Youth's Voice's flagship humanitarian campaigns dedicated to supporting vulnerable communities during the cold season.",

        "Volunteers collect, organize, and distribute winter clothing, blankets, and essential supplies to families living in remote areas.",

        "Every volunteer contributes to making winter safer and more comfortable for those who need it the most.",
      ],

      image: "/events/winter-overview.jpg",
    },

    schedule: [
      {
        time: "08:00 AM",
        title: "Volunteer Gathering",
        description: "Meet at the collection point and receive assignments.",
      },
      {
        time: "09:00 AM",
        title: "Travel",
        description: "Journey to the selected community.",
      },
      {
        time: "11:00 AM",
        title: "Distribution",
        description: "Distribute winter essentials to beneficiaries.",
      },
      {
        time: "03:00 PM",
        title: "Community Engagement",
        description: "Interact with local families and children.",
      },
      {
        time: "05:00 PM",
        title: "Wrap-up",
        description: "Team reflection and return journey.",
      },
    ],

    gallery: [
      "/events/gallery/winter-1.jpg",
      "/events/gallery/winter-2.jpg",
      "/events/gallery/winter-3.jpg",
      "/events/gallery/winter-4.jpg",
      "/events/gallery/winter-5.jpg",
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

    information: {
      participants: "Students",
      duration: "3 Hours",
      entry: "Free",
      language: "Bangla",
    },

    overview: {
      title: "About This Workshop",

      subtitle: "Empowering the Next Generation Online",

      description: [
        "The Cyber Safety Workshop equips students with practical knowledge to navigate the internet safely and responsibly.",

        "Topics include password security, cyberbullying prevention, digital privacy, phishing attacks, and responsible social media use.",

        "Participants leave with practical skills that help them become safer digital citizens.",
      ],

      image: "/events/cyber-overview.jpg",
    },

    schedule: [
      {
        time: "10:00 AM",
        title: "Welcome Session",
        description: "Introduction to digital safety.",
      },
      {
        time: "10:30 AM",
        title: "Cyber Threats",
        description: "Recognizing scams, phishing, and malware.",
      },
      {
        time: "11:30 AM",
        title: "Interactive Activities",
        description: "Real-world case studies and quizzes.",
      },
      {
        time: "12:30 PM",
        title: "Q&A",
        description: "Discussion with cybersecurity experts.",
      },
    ],

    gallery: [
      "/events/gallery/cyber-1.jpg",
      "/events/gallery/cyber-2.jpg",
      "/events/gallery/cyber-3.jpg",
      "/events/gallery/cyber-4.jpg",
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

    information: {
      participants: "Open to Public",
      duration: "5 Hours",
      entry: "Ticket Required",
      language: "Bangla",
    },

    overview: {
      title: "About The Festival",

      subtitle: "Celebrating Stories That Matter",

      description: [
        "The Women's Film Festival showcases inspiring films created by and about women to spark meaningful conversations and celebrate creativity.",

        "The festival brings together filmmakers, artists, students, and community members through screenings and panel discussions.",

        "By sharing powerful stories, the festival encourages empathy, awareness, and positive social change.",
      ],

      image: "/events/film-overview.jpg",
    },

    schedule: [
      {
        time: "03:00 PM",
        title: "Opening Ceremony",
        description: "Festival inauguration and welcome address.",
      },
      {
        time: "03:30 PM",
        title: "Film Screenings",
        description: "Screening of selected short films.",
      },
      {
        time: "06:00 PM",
        title: "Panel Discussion",
        description: "Discussion with filmmakers and guests.",
      },
      {
        time: "07:30 PM",
        title: "Award Ceremony",
        description: "Recognition of outstanding films.",
      },
    ],

    gallery: [
      "/events/gallery/film-1.jpg",
      "/events/gallery/film-2.jpg",
      "/events/gallery/film-3.jpg",
      "/events/gallery/film-4.jpg",
      "/events/gallery/film-5.jpg",
    ],
  },
];