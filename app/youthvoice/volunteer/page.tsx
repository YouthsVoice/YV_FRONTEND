"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { API } from '@/API';

const VolunteerSignup: React.FC = () => {
  const [name,setName]=useState<string>()
  const [email,setEmail]=useState<string>()
  const [phone,setPhone]=useState<string>()
  const [age,setAge]=useState<string>()
  const [tshirtSize, setTshirtSize]=useState<string>()
  const [amount, setAmount]=useState<number>(1)
  const [religion, setReligion]=useState<string>()
  const [address, setAdress]=useState<string>()
  const [bloodgrp, setBloodgrp]=useState<string>()  
  const [institution, setInstitution]=useState<string>()
  const [error, setError] = useState<string>('');
  const [loading,setLoading]=useState<boolean>(false)



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setAmount(400)
      setLoading(true)
      const response=await axios.post(`${API}/api/vol/payment/create/`,{

        name,email,phone,age,religion,"tshirt_size":tshirtSize,amount,address,bloodgrp,institution
      })
      if(response.status==200){
        const res=response.data
        console.log(res.url);
        
        window.location.href=res.url
        
        
      }
    } catch (err) {
      setError('Failed to register volunteer');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Volunteer Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              required
              className="w-full p-2 border bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              className="w-full p-2 border bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              required
              className="w-full p-2 border bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="institution">Institution</label>
            <input
              type="text"
              name="institution"
              id="institution"
              value={institution}
              onChange={(e)=>{setInstitution(e.target.value)}}
              required
              className="w-full p-2 border bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e)=>{setAdress(e.target.value)}}
              required
              className="w-full p-2 border bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e)=>{setAge(e.target.value)}}
              required
              className="w-full p-2 border bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="tshirtSize">T-shirt Size</label>
            <select
              name="tshirtSize"
              id="tshirtSize"
              value={tshirtSize}
              onChange={(e)=>{setTshirtSize(e.target.value)}}
              required
              className="w-full p-2 bg-gray-700 text-white border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="bloodgrp">Blood group</label>
            <select
              name="bloodgrp"
              id="bloodgrp"
              value={bloodgrp}
              onChange={(e)=>{setBloodgrp(e.target.value)}}
              required
              className="w-full p-2 bg-gray-700 text-white border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Blood GROUP</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="religion">religion Type</label>
            <select
              name="religion"
              id="religion"
              value={religion}
              onChange={(e)=>{setReligion(e.target.value)}}
              required
              className="w-full p-2 bg-gray-700 text-white border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select religion TYPE</option>
              <option value="islamic">ISLAMIC</option>  
              <option value="christian">CHRISTIAN</option>
              <option value="hindu">HINDU</option>
              <option value="buddhist">BUDDHIST</option>               
            </select>
          </div>
          <p className='text-white font-bold my-1'>Fee 400TK</p>
          <button
            type="submit"
            className="w-full p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {!loading&&(
            "Pay"
            )}
            {loading&&(
            "Loading . . . "
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerSignup;