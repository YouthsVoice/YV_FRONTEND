import DonationForm from '@/components/donate/DonationForm'
import { getVolunteerEvents } from "@/lib/api/event";

export const dynamic = 'force-dynamic';



export default async function DonatePage() {
  const events = await getVolunteerEvents();
  return (
    <>
      <DonationForm  events={events}/>
    </>
  )
}
