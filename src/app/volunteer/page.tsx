
import VolunteerHero from "@/components/volunteer/VolunteerHero";

import VolunteerBenefits from "@/components/volunteer/VolunteerBenefits";
import VoluntterPage from "@/components/home/VoluntterPage";
import { getVolunteerEvents } from "@/lib/api/event";
export const dynamic = 'force-dynamic';
export default async function VolunteerPage() {
  const events = await getVolunteerEvents();
  

  return (
    <>
      <VolunteerHero />
      <VoluntterPage events={events} />


      <VolunteerBenefits />
    </>
  );
}