'use client';
import React from 'react';

const FAWSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
        {/* Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/FAW_BASE.webp" 
            alt="Fight Against Winter"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Fight Against Winter
          </h1>
          <p className="text-base lg:text-lg leading-relaxed mb-6">
            Since 2013, we&apos;ve been organizing this signature event, raising funds and distributing blankets and essential commodities all over Bangladesh. With the support of 40,000 volunteers, we&apos;ve helped over 3 lakh people by distributing more than 30,000 blankets.
          </p>
          <a
            href="/events"
            className="inline-block px-8 py-4 bg-red-600 text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors"
          >
            Check Our Latest Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAWSection;