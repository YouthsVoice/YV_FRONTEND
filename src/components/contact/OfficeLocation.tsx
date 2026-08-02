import { MapPin, Clock3, Navigation } from "lucide-react";

export default function OfficeLocation() {
  return (
    <section className="bg-[#F8FAF9] py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-[#155E4B]/10 px-4 py-2 text-sm font-semibold text-[#155E4B]">
            Visit Our Office
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            We&apos;d Love to Meet You
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Stop by our office to learn more about Youth&apos;s Voice,
            discuss collaborations, or connect with our team in person.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">

          {/* Map */}

          <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-lg">

            {/* Replace with Google Maps iframe later */}

            <div className="flex h-[500px] items-center justify-center bg-gradient-to-br from-[#155E4B]/10 to-[#0F766E]/10">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#155E4B]">

                  <MapPin
                    size={38}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Google Maps
                </h3>

                <p className="mt-3 text-slate-600">
                </p>

              </div>

            </div>

          </div>

          {/* Information */}

          <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg">

            <h3 className="text-3xl font-black text-slate-900">
              Office Information
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Feel free to visit us during office hours.
              We welcome volunteers, partners, students,
              and anyone interested in creating positive
              social impact.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#155E4B]/10">

                  <MapPin className="text-[#155E4B]" />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Address
                  </h4>

                  <p className="mt-2 text-slate-600 leading-7">
                    Chattogram,
                    Bangladesh
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#155E4B]/10">

                  <Clock3 className="text-[#155E4B]" />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Office Hours
                  </h4>

                  <p className="mt-2 text-slate-600 leading-7">
                    Sunday to Thursday
                    <br />
                    9:00 AM to 5:00 PM
                  </p>

                </div>

              </div>

            </div>

            <button
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#155E4B] py-4 font-semibold text-white transition hover:bg-[#114A3B]"
            >
              <Navigation size={20} />

              Get Directions
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}