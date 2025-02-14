// pages/failed-payment.tsx

import { HiHome } from 'react-icons/hi'; // Import an icon library of your choice
import Link from 'next/link';

const FailedPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-center p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-2">Payment Failed</h1>
      <p className="text-gray-700 mb-6">Something went wrong with your payment. Please try again or contact support.</p>
      
      <Link href="/" className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        <HiHome className="h-6 w-6" aria-hidden="true" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

export default FailedPayment;