export interface Event {
  slug: string;

  title: string;

  tagline: string;

  description: string;

  coverImage: string;

  date: string;

  time: string;

  location: string;

  category: string;

  featured: boolean;

  status: "upcoming" | "ongoing" | "completed";

  registrationLink?: string;

  overview: {
    title: string;
    subtitle: string;
    description: string[];
    image: string;
  };
information: {
    participants: string;
    duration: string;
    entry: string;
    language: string;
  };

  schedule: {
    time: string;
    title: string;
    description: string;
  }[];

  gallery: string[];
}