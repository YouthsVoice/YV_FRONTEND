"use cilent"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '@/API';
import { FaFacebook, FaInstagram, FaPhone} from 'react-icons/fa';
import { Card, Dropdown } from "flowbite-react";

// Function to get a specific cookie by name (only runs in the browser)
const getCookie = (name: string) => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
  return null;
};

interface Member {
  id: number;
  member_name: string;
  email: string;
  phone: string;
  facebook: string;
  instagram: string;
  profile_pic:string;
  role: string;
  availability: boolean;
  
}

const MembarViewCard=({member}:{member:Member})=>{
  console.log(member.availability)
  return (
  <Card className="max-w-sm shadow-2xl cursor-pointer hover:-translate-y-1 transition-all">
  <div className="hidden justify-end px-4 pt-4">
    <Dropdown className='hidden' inline label="">
      <Dropdown.Item>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Edit
        </a>
      </Dropdown.Item>
      <Dropdown.Item>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Export Data
        </a>
      </Dropdown.Item>
      <Dropdown.Item>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Delete
        </a>
      </Dropdown.Item>
    </Dropdown>
  </div>
  <div className="flex flex-col items-center pb-10">
    <img
      alt="Bonnie image"
      height="96"
      src={`https://drive.google.com/thumbnail?id=${member.profile_pic}&sz=w1000?authuser=0`}
      width="96"
      className="mb-3 rounded-full shadow-lg"
    />
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.member_name}</h5>
    <a href={`mailto:${member.email}`} className="text-sm text-gray-500 dark:text-gray-400">{member.email}</a>
    <div className="flex items-center space-x-2">
        <FaPhone className="text-gray-500" />
        <span className="text-gray-700">{member.phone}</span>
      </div>
      <div className="mt-1 text-right">
      <span className="text-gray-400 text-sm">Member ID: {member.id}</span>
    </div>
    {
      member.availability === true?(
        <div className="mt-1 text-right">
      <span className="text-green-400 text-sm">Active</span>
    </div>

      ):(
        <div className="mt-1 text-right">
      <span className="text-red-400 text-sm">Nonactive </span>
    </div>
      )
    }
    
    <div className="mt-1 text-right">
      <span className="text-gray-400 text-sm">Member Role: {member.role}</span>
    </div>

    <div className="mt-4 flex space-x-3 lg:mt-6">
      <a
        href={member.facebook}
        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 gap-2  focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      >
        <FaFacebook/>
        Facebook
      </a>
      <a
        href={member.instagram}
        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white gap-2 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <FaInstagram/> Instagram
      </a>
    </div>
  </div>
</Card>
)}
const MemberSearch = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get the token from cookies
  const token = getCookie('token');
  // Axios config with Authorization header
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  console.log(members)

  const fetchAllMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/api/member/allmember/`);
      setMembers(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch members');
    } finally {
      setLoading(false);
    }
  };

  const searchMembers = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/api/member/search?member_name=${query}`, axiosConfig);
      console.log(response.data);
      
      setMembers(response.data);
      setError('');
    } catch (err) {
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMembers();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      searchMembers(e.target.value);
    } else {
      fetchAllMembers();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {/* Sidebar space */}
        <div className="flex-1 p-4 bg-orange-50/5 min-h-screen mt-[20px] ml-0 lg:ml-[250px]">
          {/* Search Bar */}
          <div className="mb-4 py-5">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search members"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Members Display */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {members && members.map((member: Member) => (
                <MembarViewCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberSearch;
