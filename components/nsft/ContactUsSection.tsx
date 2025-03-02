'use client';

const ContactUsSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="space-y-6 transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
          <h2 className="text-4xl font-bold text-cyan-500 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office Location */}
        <div className="space-y-6 transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
          <h2 className="text-4xl font-bold text-cyan-500 mb-4">Office Location</h2>
          <p className="text-gray-400">
            1st Floor, adjacent Building to Salt & Sugar, 23/2, M.M Ali Road, Opposite of Shilpokola Academy, Chittagong, Bangladesh
          </p>
          <div className="h-64 w-full rounded-lg overflow-hidden">
          <iframe className=" border-0 " src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3689.9981866980143!2d91.82270057502177!3d22.353697322874424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20Floor%2C%20adjacent%20Building%20to%20Salt%20%26%20Sugar%2C%2023%2F2%2C%20M.M%20Ali%20Road%2C%20Opposite%20of%20Shilpokola%20Academy%2C%20%2C%20Chittagong%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1740897915210!5m2!1sen!2sbd" width="600" height="450"  
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
