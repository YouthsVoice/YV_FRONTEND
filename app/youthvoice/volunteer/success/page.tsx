"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const trxId = searchParams.get('trx_id') || '';
  const name = (searchParams.get('name') || '').replace(/-/g, ' ');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-2">Registration Successful!</h1>
      <p className="text-gray-700 text-lg mb-4">Thank you, <span className="font-semibold">{name}</span>!</p>
      <p className="text-gray-600 mb-6">Your transaction ID is <span className="font-mono text-green-600">{trxId}</span>.</p>

      <Link href="/" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        <HiHome className="h-6 w-6" aria-hidden="true" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage;