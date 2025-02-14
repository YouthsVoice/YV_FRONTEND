'use client';
import { useEffect, useState } from 'react';

const NSFTSection = () => {
  const [inView, setInView] = useState(false);

  const counters = [
    { label: 'Signature Events', number: 4 },
    { label: 'Plus Activations', number: 250 },
    { label: 'People Supported', number: 100000 },
    { label: 'Lifetime Volunteers', number: 10000 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('nsft-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="nsft-section"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-10 z-0"></div>

      <h2 className="relative z-10 text-3xl md:text-6xl font-bold mb-12 tracking-wider text-center">
        Numbers Speak For Themselves
      </h2>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-6 text-center">
        {counters.map((counter, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${idx * 0.2}s` }}
          >
            <h3
              className="text-4xl md:text-7xl font-bold mb-2 cursor-pointer text-cyan-500 hover:text-cyan-300 transform hover:scale-105 transition-all duration-300"
            >
              {counter.number}
            </h3>
            <p className="text-base md:text-lg uppercase tracking-wide">
              {counter.label.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NSFTSection;
