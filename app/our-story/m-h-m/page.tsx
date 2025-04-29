'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-900 text-white py-20 px-6 overflow-hidden">
        {/* Content goes here */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h1 className="text-5xl font-bold text-cyan-500 mb-6">MHM</h1>
          <p className="text-xl leading-relaxed text-gray-300">
          A Decade of Championing Menstrual Health in Bangladesh
          </p>
        </div>

        {/* Section 2: Mission Statement */}
        <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <h2 className="text-4xl font-bold text-cyan-500">Our Mission</h2>
            <p className="text-lg text-gray-300">
              It has been 40 years since independence, yet we are still struggling with economic and social challenges. Our mission is to raise awareness among people of all classes, rich and poor, to solve these problems and drive growth.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/IDK01.webp"
              alt="Our Mission"
              className="w-full h-auto object-contain rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page
