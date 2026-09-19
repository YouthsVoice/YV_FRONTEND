"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  User,
  GraduationCap,
  Shield,
  CreditCard,
} from "lucide-react";

import { VoluntterEventType } from "@/types/events/event";
import { API_URL } from "@/lib/api/event";

type PaymentMethod = "bkash" | "nagad" | "rocket" | "bank";

interface VolunteerRegistrationFormProps {
  events: VoluntterEventType[];
  selectedEvent: string;
  onEventChange: (slug: string) => void;
}


export default function VolunteerRegistrationForm({
  events,
  selectedEvent,
  onEventChange,
}: VolunteerRegistrationFormProps) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",

    institution: "",
    department: "",
    occupation: "",

    tshirtSize: "",

    experience: "",

    emergencyName: "",
    emergencyPhone: "",

    paymentMethod: "bkash" as PaymentMethod,
  });

  const selectedEventData = useMemo(
    () => events.find((event) => event.slug === selectedEvent),
    [selectedEvent]
  );

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!selectedEvent) {
    setError("Please select an event.");
    return;
  }

  if (
    !form.full_name.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.institution.trim() ||
    !form.department.trim() ||
    !form.occupation.trim() ||
    !form.tshirtSize ||
    !form.experience.trim() ||
    !form.emergencyName.trim() ||
    !form.emergencyPhone.trim()
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  if (!API_URL) {
    setError("Backend API URL is not configured.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(
      `${API_URL}/api/volunteers/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          event_slug: selectedEvent,

          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),

          institution: form.institution.trim(),
          department: form.department.trim(),
          occupation: form.occupation.trim(),

          tshirt_size: form.tshirtSize,
          previous_experience: form.experience.trim(),

          emergency_contact_name:
            form.emergencyName.trim(),

          emergency_contact_number:
            form.emergencyPhone.trim(),

          payment_method: form.paymentMethod,
        }),
      }
    );

    // Read response safely
    const contentType =
      response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      const text = await response.text();

      console.error(
        "Non-JSON response:",
        text
      );

      throw new Error(
        `Server returned ${response.status} instead of JSON.`
      );
    }

    const data = await response.json();

    console.log(
      "Volunteer registration response:",
      data
    );

    if (!response.ok) {
      throw new Error(
        data?.detail ||
          data?.error ||
          data?.message ||
          "Failed to submit volunteer registration."
      );
    }

    // bKash payment redirect
    if (data?.bkash_url) {
      window.location.href = data.bkash_url;
      return;
    }

    if (data?.payment_url) {
      window.location.href =
        data.payment_url;
      return;
    }

    setSuccess(
      "Registration submitted successfully."
    );
  } catch (error) {
    console.error(
      "Volunteer registration error:",
      error
    );

    setError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <form
      id="registration"
      className="bg-[#F8FAF9] py-24"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto max-w-5xl px-4">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Volunteer Registration
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Register for an Event
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Fill in the information below to complete your
            registration. Once submitted you&apos;ll proceed to payment.
          </p>

        </div>

        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

          {/* Event */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <CalendarDays className="text-[#155E4B]" />

              <h3 className="text-2xl font-bold">
                Event Selection
              </h3>

            </div>

            <select
              value={selectedEvent}
              onChange={(e) => onEventChange(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#155E4B]"
            >
              <option value="">
                Select an Event
              </option>

              {events.map((event) => (
                  <option
                    key={event.slug}
                    value={event.slug}
                  >
                    {event.title}
                  </option>
                ))}
            </select>

          </div>

          {/* Personal Information */}

          <div className="mt-12">

            <div className="mb-6 flex items-center gap-3">

              <User className="text-[#155E4B]" />

              <h3 className="text-2xl font-bold">
                Personal Information
              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                value={form.full_name}
                onChange={(e) =>
                  updateField("full_name", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

            </div>

          </div>

          {/* Education */}

          <div className="mt-14">

            <div className="mb-6 flex items-center gap-3">

              <GraduationCap className="text-[#155E4B]" />

              <h3 className="text-2xl font-bold">
                Education
              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Institution"
                value={form.institution}
                onChange={(e) =>
                  updateField("institution", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

              <input
                type="text"
                placeholder="Department / Class"
                value={form.department}
                onChange={(e) =>
                  updateField("department", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

              <input
                type="text"
                placeholder="Occupation"
                value={form.occupation}
                onChange={(e) =>
                  updateField("occupation", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

            </div>

          </div>

                    {/* Volunteer Details */}

          <div className="mt-14">

            <div className="mb-6 flex items-center gap-3">

              <User className="text-[#155E4B]" />

              <h3 className="text-2xl font-bold">
                Volunteer Details
              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <select
                value={form.tshirtSize}
                onChange={(e) =>
                  updateField("tshirtSize", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              >
                <option value="">
                  Select T-Shirt Size
                </option>

                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>

              </select>

              <select
                value={form.experience}
                onChange={(e) =>
                  updateField("experience", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              >
                <option value="">
                  Previous Experience?
                </option>

                <option value="Yes">
                  Yes
                </option>

                <option value="No">
                  No
                </option>

              </select>

            </div>

          </div>

          {/* Emergency Contact */}

          <div className="mt-14">

            <div className="mb-6 flex items-center gap-3">

              <Shield className="text-[#155E4B]" />

              <h3 className="text-2xl font-bold">
                Emergency Contact
              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Emergency Contact Name"
                value={form.emergencyName}
                onChange={(e) =>
                  updateField("emergencyName", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

              <input
                type="tel"
                placeholder="Emergency Contact Number"
                value={form.emergencyPhone}
                onChange={(e) =>
                  updateField("emergencyPhone", e.target.value)
                }
                className="rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#155E4B]"
              />

            </div>

          </div>

          {/* Payment Method */}

          <div className="mt-14">

            <div className="mb-6 flex items-center gap-3">

              <CreditCard className="text-[#155E4B]" />

              <h3 className="text-2xl font-bold">
                Payment Method
              </h3>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                {
                  label: "bKash",
                  value: "bkash",
                }
              ].map((method) => (
                <label
                  key={method.value}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-5 transition ${
                    form.paymentMethod === method.value
                      ? "border-[#155E4B] bg-[#155E4B]/5"
                      : "border-gray-300"
                  }`}
                >
                  <span className="font-medium">
                    {method.label}
                  </span>

                  <input
                    type="radio"
                    name="payment"
                    checked={
                      form.paymentMethod ===
                      method.value
                    }
                    onChange={() =>
                      updateField(
                        "paymentMethod",
                        method.value
                      )
                    }
                    className="h-5 w-5"
                  />

                </label>
              ))}

            </div>

          </div>

          {/* Summary */}

          <div className="mt-14 rounded-3xl bg-[#F8FAF9] p-8">

            <h3 className="text-2xl font-bold">
              Registration Summary
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Event
                </span>

                <span className="font-semibold">
                  {selectedEventData?.title ??
                    "Not Selected"}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Date
                </span>

                <span className="font-semibold">
                  {selectedEventData?.date ??
                    "-"}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Registration Fee
                </span>

                <span className="font-semibold text-[#155E4B]">
                  {selectedEventData
                    ? `৳${selectedEventData.registration_fee}`
                    : "-"}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Payment
                </span>

                <span className="font-semibold capitalize">
                  {form.paymentMethod}
                </span>

              </div>

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="mt-10 w-full cursor-pointer rounded-2xl bg-[#155E4B] py-5 text-lg font-semibold text-white transition hover:bg-[#114A3B]"
          >
            Register & Continue to Payment
          </button>

        </div>

      </div>

    </form>
  );
}