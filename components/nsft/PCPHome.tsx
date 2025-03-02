import React from 'react'

const PCPHome = () => {
  return (
<section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 lg:py-24 overflow-hidden">
  <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
    {/* Image */}
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      <img
        src="/PCP_HOME.webp" 
        alt="Project Chauna Piyaju"
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>

    {/* Text Content */}
    <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
        Project Chauna Piyaju
      </h1>
      <p className="text-base lg:text-lg leading-relaxed mb-6">
        Project Chauna Piyaju is an event held during the month of Ramadan, created for underprivileged children to have a day of pure fun while providing them with Iftar and gifts.
      </p>
      <a
        href="/youthvoice/volunteer"
        className="inline-block px-8 py-4 bg-orange-500 text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors"
      >
        Join As a Volunteer 
      </a>
    </div>
  </div>
</section>
  )
}

export default PCPHome
