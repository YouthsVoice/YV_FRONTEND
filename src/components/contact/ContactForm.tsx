"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    // TODO:
    // Connect to Django Backend
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Send a Message
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            We&apos;d Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Have a question, suggestion, partnership proposal,
            or want to learn more about Youth&apos;s Voice?
            Fill out the form below and our team will get back to you.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg md:p-10"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Full Name
              </label>

              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                placeholder="John Doe"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#155E4B]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Email Address
              </label>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#155E4B]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Phone Number
              </label>

              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                placeholder="+880 1XXX-XXXXXX"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#155E4B]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Subject
              </label>

              <input
                type="text"
                value={form.subject}
                onChange={(e) =>
                  updateField("subject", e.target.value)
                }
                placeholder="How can we help?"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#155E4B]"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-semibold text-slate-800">
              Message
            </label>

            <textarea
              rows={7}
              value={form.message}
              onChange={(e) =>
                updateField("message", e.target.value)
              }
              placeholder="Write your message here..."
              className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#155E4B]"
            />

          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#155E4B] px-8 py-4 font-semibold text-white transition hover:bg-[#114A3B]"
          >
            <Send size={20} />

            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}