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

  gallery: string[];
}