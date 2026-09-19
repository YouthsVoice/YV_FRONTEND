
"use client";

import { useState } from "react";
import VolunteerEvents from "@/components/volunteer/VolunteerEvents";
import VolunteerRegistrationForm from "@/components/volunteer/VolunteerRegistrationForm";
import { VoluntterEventType } from "@/types/events/event";

interface VolunteerHubProps {
  events: VoluntterEventType[];
}

export default function VoluntterPage ({
  events,
}: VolunteerHubProps) {

    
    const [selectedEvent, setSelectedEvent] =
    useState("");

  return (
    <>
    
        <VolunteerEvents
        events={events}
        selectedEvent={selectedEvent}
        onSelect={setSelectedEvent}
      />

      <VolunteerRegistrationForm    events={events}      selectedEvent={selectedEvent}
        onEventChange={setSelectedEvent}/>
      
    </>
  )
}
