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
            <iframe
              src="https://maps.app.goo.gl/Fw1DkqT21TGYYsiB7"
              className="w-full h-full"
              allowFullScreen={false}
              loading="lazy"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
