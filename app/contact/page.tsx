import React from 'react';
import Header from "@/components/Header";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <>
            <Header />
            <main className='w-full min-h-screen bg-gray-900 flex items-center justify-center text-white py-16 px-6'>
                <div className='bg-gray-100 text-gray-900 rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl'>
                    <div className='bg-red-600 text-white flex flex-col p-6 gap-4'>
                        <div className='flex items-start gap-3'>
                            <FaLocationDot className='text-2xl' />
                            <p className='text-lg'>
                                1st Floor, Adjacent Building to Salt & Sugar, 23/2, M.M Ali Road, Opposite of Shilpokola Academy, Chittagong, Bangladesh
                            </p>
                        </div>
                        <div className='flex items-start gap-3'>
                            <IoIosMail className='text-2xl' />
                            <p className='text-lg'>yvfinfo@gmail.com</p>
                        </div>
                    </div>
                    <div className='p-6 flex flex-col items-center gap-4'>
                        <h3 className='text-xl font-semibold'>Connect With Us</h3>
                        <div className='flex gap-4'>
                            <a href='https://www.facebook.com/youthsvoicebd' className='text-red-600 text-2xl hover:text-red-800 transition'>
                                <FaFacebook />
                            </a>
                            <a href='https://www.instagram.com/youths.voice/' className='text-red-600 text-2xl hover:text-red-800 transition'>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ContactPage;
