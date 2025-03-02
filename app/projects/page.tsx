import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <section className="bg-gray-900 text-white py-20 px-6 overflow-hidden">
      {/* Content goes here */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold text-cyan-500 mb-6">PROJECTS</h1>
      </div>

      {/* Section 2: Mission Statement */}
      <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="">
          <h2 className="text-4xl font-bold text-cyan-500">PROJECT MAYA</h2>
          <p className="text-lg text-gray-300">
          An innovative and sustainable initiative dedicated to transforming the lives of 33 families—breaking the cycle of poverty, eradicating hunger, ensuring proper medical care, and paving the way for their children to receive quality education, unlocking a future filled with opportunity and hope.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/MAYA01.webp"
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
