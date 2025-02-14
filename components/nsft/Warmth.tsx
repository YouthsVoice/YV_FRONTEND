'use client';
import React from 'react';

const Warmth = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/FAW00.webp")', backgroundAttachment: 'fixed' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl text-white z-10 transition-all duration-700 ease-in-out transform">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Share Warmth</h2>
          <p className="mb-8 text-lg">
            Join us in making a difference this winter. Help us distribute blankets and provide warmth to those in need.
          </p>
          <a
            href="/donate"
            className="inline-block bg-cyan-600 text-white text-lg font-semibold py-3 px-8 rounded hover:bg-cyan-700 transition transform hover:scale-105 active:scale-95"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Warmth;
