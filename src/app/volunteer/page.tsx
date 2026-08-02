
"use client";

import { useState } from "react";
import VolunteerHero from "@/components/volunteer/VolunteerHero";
import VolunteerEvents from "@/components/volunteer/VolunteerEvents";
import VolunteerRegistrationForm from "@/components/volunteer/VolunteerRegistrationForm";
import VolunteerBenefits from "@/components/volunteer/VolunteerBenefits";
export default function VolunteerPage() {

      const [selectedEvent, setSelectedEvent] =
    useState("");

  return (
    <>
      <VolunteerHero />

        <VolunteerEvents
        selectedEvent={selectedEvent}
        onSelect={setSelectedEvent}
      />

      <VolunteerRegistrationForm          selectedEvent={selectedEvent}
        onEventChange={setSelectedEvent}/>

      <VolunteerBenefits />
    </>
  );
}