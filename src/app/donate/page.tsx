import DonationForm from '@/components/donate/DonationForm'
import { getVolunteerEvents } from "@/lib/api/event";


export default async function DonatePage() {
  const events = await getVolunteerEvents();
  return (
    <>
      <DonationForm  events={events}/>
    </>
  )
}
