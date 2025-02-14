'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const YouthVoicePage = () => {
  const router = useRouter();

  const handleMemberClick = () => {
    router.push('/youthvoice/member-login'); // Replace this with your member login route
  };

  const handleVolunteerClick = () => {
    router.push('/youthvoice/volunteer'); // Replace this with your volunteer info route
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-cyan-700 mb-10">YouthVoice</h1>
      <p className="text-xl text-center text-gray-300 mb-16">
        Join our movement! Choose an option below to get involved.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Volunteer Option */}
        <motion.div
          className="p-10 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-cyan-700"
          onClick={handleVolunteerClick}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Volunteers</h2>
          <p className="text-lg text-gray-300 text-center">
            Learn how you can volunteer with us and make a difference.
          </p>
        </motion.div>

        {/* Member Option */}
        <motion.div
          className="p-10 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-cyan-700"
          onClick={handleMemberClick}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Members</h2>
          <p className="text-lg text-gray-300 text-center">
            Already a member? Log in to access exclusive content.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default YouthVoicePage;
