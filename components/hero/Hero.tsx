'use client'; 
import "./style.css"
import React from 'react'

const Hero = () => {
  return (
<section className="relative flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/Hero.webp" 
      alt="Youth Worldwide Foundation Hero" 
      className="object-cover w-full h-full opacity-70 rotate-3 scale-105"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900 z-10"></div>

  {/* Content */}
  <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
    {/* Heading */}
    <h1
      className="text-6xl lg:text-8xl font-extrabold tracking-tighter  mb-4 opacity-0 animate-fadeInDown"
    >
      Youth&apos;s Voice
    </h1>

    {/* Subheading */}
    <p
      className="text-xl lg:text-2xl mb-6 lg:mb-8 font-light leading-relaxed opacity-0 animate-fadeInUp"
      style={{ animationDelay: '0.2s' }}
    >
      Let&apos;s create the revolution
    </p>

    {/* Description */}
    <p
      className="text-lg lg:text-xl mb-8 text-gray-300 opacity-0 animate-fadeInUp"
      style={{ animationDelay: '0.4s' }}
    >
      Throughout the last 9 years, we have had the opportunity to organize events
      that have supported hundreds of people, both financially and emotionally. Discover more
      about our mission below.
    </p>

    {/* CTA Button */}
    <a
      href="/about"
      className="inline-block px-8 py-4 bg-cyan-500 text-lg font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition transform hover:-translate-y-1 focus:ring-4 focus:ring-cyan-300 opacity-0 animate-fadeInUp"
      style={{ animationDelay: '0.6s' }}
    >
      Learn More
    </a>
  </div>
</section>
  )
}

export default Hero
