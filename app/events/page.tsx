import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <section className="flex flex-col justify-center py-20 px-6 overflow-hidden bg-gray-900 items-center gap-5">
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-6 animate-fadeIn">
          OUR EVENTS
        </h1>
        <p className="text-xl leading-relaxed text-gray-300 animate-slideUp">
          Throughout the year, we organize impactful events like Fight Against Winter (FAW), Project Chauna Piyaju (PCP), and Menstrual Hygiene Management (MHM).
        </p>
      </div>

      {/* Events Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Event 1 */}
        <div className="group bg-gray-800 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer overflow-hidden">
          <div className="relative">
            <img
              src="/FAW2024.webp"
              alt="Fight Against Winter"
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Fight Against Winter (FAW)</h2>
            <p className="text-gray-300">
              A fundraising event to distribute blankets to people in rural areas of Bangladesh during the harsh winter months.
            </p>
          </div>
        </div>

        {/* Event 2 */}
        <div className="group bg-gray-800 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer overflow-hidden">
          <div className="relative">
            <img
              src="/PCP2023.webp"
              alt="Project Chauna Piyaju"
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Project Chauna Piyaju (PCP)</h2>
            <p className="text-gray-300">
              A community-based project focused on providing warm meals and food support to underserved communities.
            </p>
          </div>
        </div>

        {/* Event 3 */}
        <div className="group bg-gray-800 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer overflow-hidden">
          <div className="relative">
            <img
              src="/MHM2024.webp"
              alt="Menstrual Hygiene Management"
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-100"
            />
            <div className="absolute -inset-1 h-50 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Menstrual Hygiene Management (MHM)</h2>
            <p className="text-gray-300">
              An initiative to raise awareness about menstrual hygiene and distribute essential supplies to women in need.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default page
