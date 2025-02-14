'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'
import { API } from '@/API';
import { useRouter } from 'next/navigation';



const MemberLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate=useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const loginData = await axios.post(`${API}/api/member/login/`, {
        email,
        password
      });
  
      if (loginData && loginData.data) {
        const { token } = loginData.data;
        
         //Store the token in cookies
        localStorage.setItem('token', token)

  
        // Fetch the user's role
       
  
        const { role } = loginData.data;
  
        // Save role in localStorage
        localStorage.setItem('role', role);
  
        // Redirect based on role
        if (role === 'admin') {
          navigate.push('/youthvoice/dashboard/admin');
        } else if (role === 'gm') {
          navigate.push('/youthvoice/dashboard/gm');
        } else if (role === 'MOD') {
          navigate.push('/youthvoice/dashboard/mod');
        }
  
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-cyan-500 mb-8">Member Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium mb-2">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full p-3 bg-cyan-500 rounded text-white font-bold"
            whileHover={{ scale: 1.05 }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default MemberLogin;
