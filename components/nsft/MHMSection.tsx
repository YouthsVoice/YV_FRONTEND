"use client"
import { useRef, useState } from "react";

const MHMSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(!muted);
    }
  };
  return (
    <section className="bg-red-500/10 py-16 px-4 sm:px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src="/MHM.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
          <button
            onClick={toggleSound}
            className="absolute bottom-3 right-3 bg-white bg-opacity-70 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow"
          >
            {muted ? "Unmute 🔈" : "Mute 🔇"}
          </button>
        </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          A Decade of Championing Menstrual Health in Bangladesh
        </h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
        Every kit purchased helps fund our MHM workshops AND directly provides essential care to a girl or woman in need.
It&apos;s more than products; it&apos;s about providing choice, promoting health, and supporting our community from the ground up. Ready to explore a period solution that feels good and does good?
Support the movement — spread the word, gift a kit, or share the message.
A small kit. A world of difference. Bringing change for only 600 BDT
        </p>
        <a
          href="/donation"
          className="mt-6 inline-block text-teal-600 font-semibold text-base hover:underline transition duration-200"
        >
          Donate NOW
        </a>
      </div>
    </div>
  </section>
  )
}

export default MHMSection
