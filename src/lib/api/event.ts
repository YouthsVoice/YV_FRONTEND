export interface HomeEvent {
  title: string;
  location: string;
  slug: string;
  status: "upcoming" | "ongoing" | "completed";
}
import { HomeEventType ,VoluntterEventType } from "@/types/events/event";

export const API_URL = process.env.DJANGO_API_URL || "https://server-rippling-lantern-482.fly.dev";

export async function getHomeEvents(): Promise<HomeEvent[]> {
  const response = await fetch(`${API_URL}/api/events/home/`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}


export async function getTopEvent(): Promise<HomeEventType | null> {
  const response = await fetch(
    `${API_URL}/api/events/home/top/`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top event");
  }

  const data: HomeEventType = await response.json();

  return data
}

export async function getVolunteerEvents(): Promise<VoluntterEventType[]> {
  const response = await fetch(`${API_URL}/api/events/volunteer/`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}