import Link from "next/link";

export default function DonationSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAF9] px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#155E4B]">
          Donation Successful
        </h1>

        <p className="mt-3 text-slate-600">
          Thank you for supporting Youth&apos;s Voice.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#155E4B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#114A3B]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}