export interface Event {  id?: number;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  cover_image: string;

  date: string;
  time: string;
  location: string;
  category: string;

  featured: boolean;
  status: "upcoming" | "ongoing" | "completed";

  registration_link: string;
  volunteer_sheet_id: string;
  donation_sheet_id: string;

  volunteer_registration: boolean;
  registration_fee: string;
  available_seats: number;

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

  created_at: string;
  updated_at: string;
}

export interface HomeEventType {
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  category: string;
  cover_image: string;
  slug: string;
  volunteer_registration: boolean;
  status: "upcoming" | "ongoing" | "completed";
}


export interface VoluntterEventType {
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  category: string;
  cover_image: string;
  slug: string;
  volunteer_registration: boolean;
  available_seats:number;
  registration_fee:string;
  status: "upcoming" | "ongoing" | "completed";

}