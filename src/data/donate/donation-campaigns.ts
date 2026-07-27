export interface DonationCampaign {
  id: string;
  title: string;
  description: string;
}

export const donationCampaigns: DonationCampaign[] = [
  {
    id: "general",
    title: "General Fund",
    description:
      "Support all Youth's Voice initiatives where help is needed most.",
  },
  {
    id: "winter",
    title: "Fight Against Winter",
    description:
      "Provide warm clothing and essential supplies to vulnerable families.",
  },
  {
    id: "mhm",
    title: "MHM Awareness",
    description:
      "Support menstrual health education and hygiene initiatives.",
  },
  {
    id: "cyber",
    title: "Cyber Safety Workshop",
    description:
      "Help educate students about digital safety and cyber awareness.",
  },
];