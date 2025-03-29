"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const steps = [
  { id: "name", label: "Full Name", type: "text", image: "/D-02.webp" },
  { id: "phone", label: "Phone Number", type: "tel", image: "/D-01.webp" },
  { id: "email", label: "Email", type: "email", image: "/D-03.webp" },
  { id: "event", label: "Select Event", type: "select", options: ["PCP", "FAW", "MHM", "MAYA"], image: "/D-04.webp" },
  { id: "amount", label: "Amount (TK)", type: "number", image: "/D-05.webp" },
];


export default function DonationPage() {
    const { register, handleSubmit } = useForm();
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
  
    const onSubmit = (data: any) => {
      console.log(data);
      setSubmitted(true);
    };
  
    const nextStep = () => {
      if (step < steps.length - 1) setStep(step + 1);
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-500 via-orange-500 to-pink-500 text-white flex justify-center items-center relative overflow-hidden">
        {/* Scrollable Sections */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className={`w-full max-w-4xl h-screen flex justify-center items-center flex-col p-8 sm:flex-row gap-10 relative`}
        >
          {/* Left Section: Form */}
          <motion.div
            className="w-full sm:w-1/2 bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-lg z-10 transform transition-all "
          >
            <h1 className="text-3xl font-bold text-cyan-500 mb-6">{steps[step].label}</h1>
            <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {steps[step].type === "select" ? (
                <select
                  {...register(steps[step].id)}
                  required
                  className="w-full p-4 bg-gray-200 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                >
                  {steps[step].options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  {...register(steps[step].id)}
                  type={steps[step].type}
                  placeholder={steps[step].label}
                  required
                  className="w-full p-4 bg-gray-200 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                />
              )}
              {step < steps.length - 1 ? (
                <button type="button" onClick={nextStep} className="w-full p-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
                  Next
                </button>
              ) : (
                <button type="submit" className="w-full p-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
                  Donate Now
                </button>
              )}
            </motion.form>
          </motion.div>
  
          {/* Right Section: Background Image and Floating Effect */}
          <motion.div
            className="w-full sm:w-1/2 h-full bg-cover bg-center rounded-2xl z-0"
            style={{
              backgroundImage: `url(${steps[step].image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    );
  }