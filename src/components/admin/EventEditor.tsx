"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Plus,
    Trash2,
    Save,
} from "lucide-react";
import Image from "next/image";
import { API_URL } from "@/lib/api/event";


interface Event {
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
}

interface EventEditorProps {
    event: Event;
}

function ImageField({
    label,
    value,
    onChange,
    onRemove,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    onRemove?: () => void;
}) {
    return (
        <div className="w-full">
            <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                    {label}
                </label>

                {onRemove && (
                    <button
                        type="button"
                        onClick={onRemove}
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                )}
            </div>

            {/* Image Preview */}
            <div className="mb-3 aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                {value ? (
                    <Image
                        src={value}
                        alt={label}
                        className="  object-cover"
                        width={400}
                        height={450}
                        loading="eager"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        No image
                    </div>
                )}
            </div>

            {/* URL */}
            <input
                type="text"
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
            />
        </div>
    );
}

export default function EventEditor({
    event,
}: EventEditorProps) {
    const [form, setForm] = useState<Event>(event);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const isNewEvent = !event.slug;

    const updateField = <K extends keyof Event>(
        field: K,
        value: Event[K]
    ) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const updateOverview = (
        field: keyof Event["overview"],
        value: string | string[]
    ) => {
        setForm((previous) => ({
            ...previous,
            overview: {
                ...previous.overview,
                [field]: value,
            },
        }));
    };

    const updateInformation = (
        field: keyof Event["information"],
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            information: {
                ...previous.information,
                [field]: value,
            },
        }));
    };

    const updateSchedule = (
        index: number,
        field: keyof Event["schedule"][number],
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            schedule: previous.schedule.map((item, itemIndex) =>
                itemIndex === index
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            ),
        }));
    };

    const addScheduleItem = () => {
        setForm((previous) => ({
            ...previous,
            schedule: [
                ...previous.schedule,
                {
                    time: "",
                    title: "",
                    description: "",
                },
            ],
        }));
    };

    const removeScheduleItem = (index: number) => {
        setForm((previous) => ({
            ...previous,
            schedule: previous.schedule.filter(
                (_, itemIndex) => itemIndex !== index
            ),
        }));
    };

    const updateOverviewDescription = (
        index: number,
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            overview: {
                ...previous.overview,
                description: previous.overview.description.map(
                    (item, itemIndex) =>
                        itemIndex === index ? value : item
                ),
            },
        }));
    };

    const addOverviewDescription = () => {
        setForm((previous) => ({
            ...previous,
            overview: {
                ...previous.overview,
                description: [
                    ...previous.overview.description,
                    "",
                ],
            },
        }));
    };

    const removeOverviewDescription = (index: number) => {
        setForm((previous) => ({
            ...previous,
            overview: {
                ...previous.overview,
                description:
                    previous.overview.description.filter(
                        (_, itemIndex) => itemIndex !== index
                    ),
            },
        }));
    };

    const updateGallery = (
        index: number,
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            gallery: previous.gallery.map(
                (image, imageIndex) =>
                    imageIndex === index ? value : image
            ),
        }));
    };

    const addGalleryImage = () => {
        setForm((previous) => ({
            ...previous,
            gallery: [...previous.gallery, ""],
        }));
    };

    const removeGalleryImage = (index: number) => {
        setForm((previous) => ({
            ...previous,
            gallery: previous.gallery.filter(
                (_, imageIndex) => imageIndex !== index
            ),
        }));
    };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSaving(true);
  setError("");
  setSuccess("");

  try {
    const url = isNewEvent
      ? `${API_URL}/api/events/`
      : `${API_URL}/api/events/${event.slug}/`;

    const response = await fetch(url, {
      method: isNewEvent ? "POST" : "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Event save failed:", data);
      setError(
        typeof data === "object"
          ? JSON.stringify(data)
          : "Failed to save event."
      );
      return;
    }

    console.log("Event saved:", data);

    setSuccess(
      isNewEvent
        ? "Event created successfully."
        : "Event updated successfully."
    );

  } catch (error) {
    console.error("Event save error:", error);
    setError("Something went wrong while saving the event.");
  } finally {
    setIsSaving(false);
  }
};
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            {/* Basic Information */}
            <Section title="Basic Information">
                <div className="grid gap-5 md:grid-cols-2">
                    <Input
                        label="Title"
                        value={form.title}
                        onChange={(value) =>
                            updateField("title", value)
                        }
                    />

                    <Input
                        label="Slug"
                        value={form.slug}
                        onChange={(value) =>
                            updateField("slug", value)
                        }
                    />

                    <Input
                        label="Tagline"
                        value={form.tagline}
                        onChange={(value) =>
                            updateField("tagline", value)
                        }
                    />

                    <Input
                        label="Category"
                        value={form.category}
                        onChange={(value) =>
                            updateField("category", value)
                        }
                    />
                </div>

                <Textarea
                    label="Description"
                    value={form.description}
                    onChange={(value) =>
                        updateField("description", value)
                    }
                />

                <ImageField
                    label="Cover Image"
                    value={form.cover_image}
                    onChange={(value) =>
                        updateField("cover_image", value)
                    }
                />
            </Section>

            {/* Event Details */}
            <Section title="Event Details">
                <div className="grid gap-5 md:grid-cols-2">
                    <Input
                        label="Date"
                        type="date"
                        value={form.date}
                        onChange={(value) =>
                            updateField("date", value)
                        }
                    />

                    <Input
                        label="Time"
                        type="time"
                        value={form.time}
                        onChange={(value) =>
                            updateField("time", value)
                        }
                    />

                    <Input
                        label="Location"
                        value={form.location}
                        onChange={(value) =>
                            updateField("location", value)
                        }
                    />

                    <Select
                        label="Status"
                        value={form.status}
                        options={[
                            "upcoming",
                            "ongoing",
                            "completed",
                        ]}
                        onChange={(value) =>
                            updateField(
                                "status",
                                value as Event["status"]
                            )
                        }
                    />
                </div>

                <div className="flex flex-wrap gap-6">
                    <Checkbox
                        label="Featured Event"
                        checked={form.featured}
                        onChange={(value) =>
                            updateField("featured", value)
                        }
                    />

                    <Checkbox
                        label="Volunteer Registration"
                        checked={form.volunteer_registration}
                        onChange={(value) =>
                            updateField(
                                "volunteer_registration",
                                value
                            )
                        }
                    />
                </div>
            </Section>

            {/* Registration */}
            <Section title="Registration">
                <div className="grid gap-5 md:grid-cols-2">
                    <Input
                        label="Registration Link"
                        value={form.registration_link}
                        onChange={(value) =>
                            updateField(
                                "registration_link",
                                value
                            )
                        }
                    />

                    <Input
                        label="Registration Fee"
                        type="number"
                        value={form.registration_fee}
                        onChange={(value) =>
                            updateField(
                                "registration_fee",
                                value
                            )
                        }
                    />

                    <Input
                        label="Available Seats"
                        type="number"
                        value={String(form.available_seats)}
                        onChange={(value) =>
                            updateField(
                                "available_seats",
                                Number(value)
                            )
                        }
                    />
                </div>
            </Section>

            {/* Overview */}
            <Section title="Overview">
                <div className="space-y-5">
                    <Input
                        label="Title"
                        value={form.overview.title}
                        onChange={(value) =>
                            updateOverview("title", value)
                        }
                    />

                    <Input
                        label="Subtitle"
                        value={form.overview.subtitle}
                        onChange={(value) =>
                            updateOverview("subtitle", value)
                        }
                    />

                    <ImageField
                        label="Overview Image"
                        value={form.overview.image}
                        onChange={(value) =>
                            updateOverview("image", value)
                        }
                    />

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-700">
                                Description
                            </label>

                            <button
                                type="button"
                                onClick={addOverviewDescription}
                                className="flex items-center gap-1 text-sm font-medium text-[#155E4B]"
                            >
                                <Plus className="h-4 w-4" />
                                Add
                            </button>
                        </div>

                        <div className="space-y-3">
                            {form.overview.description.map(
                                (description, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2"
                                    >
                                        <textarea
                                            value={description}
                                            onChange={(e) =>
                                                updateOverviewDescription(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            rows={2}
                                            className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeOverviewDescription(
                                                    index
                                                )
                                            }
                                            className="self-start rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Information */}
            <Section title="Event Information">
                <div className="grid gap-5 md:grid-cols-2">
                    <Input
                        label="Participants"
                        value={form.information.participants}
                        onChange={(value) =>
                            updateInformation(
                                "participants",
                                value
                            )
                        }
                    />

                    <Input
                        label="Duration"
                        value={form.information.duration}
                        onChange={(value) =>
                            updateInformation(
                                "duration",
                                value
                            )
                        }
                    />

                    <Input
                        label="Entry"
                        value={form.information.entry}
                        onChange={(value) =>
                            updateInformation("entry", value)
                        }
                    />

                    <Input
                        label="Language"
                        value={form.information.language}
                        onChange={(value) =>
                            updateInformation(
                                "language",
                                value
                            )
                        }
                    />
                </div>
            </Section>

            {/* Schedule */}
            <Section
                title="Schedule"
                action={
                    <button
                        type="button"
                        onClick={addScheduleItem}
                        className="flex items-center gap-1 text-sm font-medium text-[#155E4B]"
                    >
                        <Plus className="h-4 w-4" />
                        Add Schedule
                    </button>
                }
            >
                <div className="space-y-4">
                    {form.schedule.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-slate-200 p-4"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-700">
                                    Schedule {index + 1}
                                </span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeScheduleItem(index)
                                    }
                                    className="text-slate-400 hover:text-red-500"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <Input
                                    label="Time"
                                    type="time"
                                    value={item.time}
                                    onChange={(value) =>
                                        updateSchedule(
                                            index,
                                            "time",
                                            value
                                        )
                                    }
                                />

                                <Input
                                    label="Title"
                                    value={item.title}
                                    onChange={(value) =>
                                        updateSchedule(
                                            index,
                                            "title",
                                            value
                                        )
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <Textarea
                                    label="Description"
                                    value={item.description}
                                    onChange={(value) =>
                                        updateSchedule(
                                            index,
                                            "description",
                                            value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Gallery */}
            <Section
                title="Gallery"
                action={
                    <button
                        type="button"
                        onClick={addGalleryImage}
                        className="flex items-center gap-1 text-sm font-medium text-[#155E4B]"
                    >
                        <Plus className="h-4 w-4" />
                        Add Image
                    </button>
                }
            >
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {form.gallery.map((image, index) => (
                        <ImageField
                            key={index}
                            label={`Gallery Image ${index + 1}`}
                            value={image}
                            onChange={(value) =>
                                updateGallery(index, value)
                            }
                            onRemove={() =>
                                removeGalleryImage(index)
                            }
                        />
                    ))}
                </div>
            </Section>

            {/* Google Sheets IDs */}
            <Section title="Google Sheets">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Volunteer Sheet
                        </label>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={form.volunteer_sheet_id}
                                onChange={(e) =>
                                    updateField("volunteer_sheet_id", e.target.value)
                                }
                                placeholder="Google Sheet ID"
                                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
                            />

                            {form.volunteer_sheet_id && (
                                <a
                                    href={`https://docs.google.com/spreadsheets/d/${form.volunteer_sheet_id}/edit`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex shrink-0 items-center gap-2 rounded-lg bg-[#155E4B] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#114A3B]"
                                >
                                    Open
                                </a>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Donation Sheet
                        </label>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={form.donation_sheet_id}
                                onChange={(e) =>
                                    updateField("donation_sheet_id", e.target.value)
                                }
                                placeholder="Google Sheet ID"
                                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
                            />

                            {form.donation_sheet_id && (
                                <a
                                    href={`https://docs.google.com/spreadsheets/d/${form.donation_sheet_id}/edit`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex shrink-0 items-center gap-2 rounded-lg bg-[#155E4B] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#114A3B]"
                                >
                                    Open
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Section>
            {/* Actions */}
            <div className="sticky bottom-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <Link
                    href="/admin/events"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Events
                </Link>

                <button
                    type="submit"
                    disabled={isSaving}
                    className="rounded-lg bg-[#155E4B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#114A3B] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSaving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </form>
    );
}

/* -------------------------------- */
/* Section */
/* -------------------------------- */

function Section({
    title,
    children,
    action,
}: {
    title: string;
    children: React.ReactNode;
    action?: React.ReactNode;
}) {
    return (
        <section className="rounded-xl border border-slate-200 bg-white p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                    {title}
                </h2>

                {action}
            </div>

            <div className="space-y-5">
                {children}
            </div>
        </section>
    );
}

/* -------------------------------- */
/* Input */
/* -------------------------------- */

function Input({
    label,
    value,
    onChange,
    type = "text",
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
}) {
    return (
        <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
            />
        </div>
    );
}

/* -------------------------------- */
/* Textarea */
/* -------------------------------- */

function Textarea({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <textarea
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
            />
        </div>
    );
}

/* -------------------------------- */
/* Select */
/* -------------------------------- */

function Select({
    label,
    value,
    options,
    onChange,
}: {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}) {
    return (
        <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#155E4B] focus:ring-1 focus:ring-[#155E4B]"
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

/* -------------------------------- */
/* Checkbox */
/* -------------------------------- */

function Checkbox({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: (value: boolean) => void;
}) {
    return (
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) =>
                    onChange(e.target.checked)
                }
                className="h-4 w-4 rounded border-slate-300 text-[#155E4B] focus:ring-[#155E4B]"
            />

            {label}
        </label>
    );
}