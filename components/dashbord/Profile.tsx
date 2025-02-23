"use client";

import { API } from '@/API';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';

interface MemberData {
  id: string;
  member_name: string;
  role: string;
  email: string;
  facebook: string;
  instagram: string;
  profile_pic: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<MemberData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<MemberData>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  const getData = async () => {
    try {
      if (token) {
        const response = await axios.get(`${API}/api/member/memberinfo/`, {
          headers: { Authorization: `Token ${token}` },
        });
        setData(response.data);
        setFormData(response.data);
      }
    } catch (error) {
      console.error("Error fetching member info:", error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setSelectedFile(file);
      console.log(selectedFile);
      
      await handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    if (file && token) {
      const formData = new FormData();
      formData.append('image', file);
      if(data){
         
      formData.append("pre_image",data.profile_pic)
      }
      try {
        const response = await axios.post(`${API}/api/member/profilepic/`, formData, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          setData((prevData) => prevData ? { ...prevData, profile_pic: response.data.id } : null);
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (token && data) {
      try {
        await axios.put(`${API}/api/member/profile/update/`, formData, {
          headers: { Authorization: `Token ${token}` },
        });
        setEditMode(false);
        getData();
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  return (
    <main className="flex flex-col h-screen ">
      <div className="flex flex-1">
      <div className="flex-1 p-4 bg-orange-50/5 min-h-screen mt-[20px] ml-0 lg:ml-[250px]">
      <div className="bg-white mb-4 py-5 pt-20 p-6 rounded-lg shadow-md w-full max-w-md text-center">
        {data ? (
          <>
            <div className="relative inline-block">
              <img
                src={`https://lh3.googleusercontent.com/d/${data.profile_pic}=w500`}
                alt={data.member_name}
                className="w-32 h-32 rounded-full object-cover border border-gray-300"
              />
              <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full cursor-pointer">
                <FaCamera />
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
            {editMode ? (
              <>
                <input
                  type="text"
                  name="member_name"
                  value={formData.member_name || ''}
                  onChange={handleChange}
                  className="border p-2 w-full mt-4 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="border p-2 w-full mt-2 rounded-md"
                />
                <input
                  type="text"
                  name="facebook"
                  value={formData.facebook || ''}
                  onChange={handleChange}
                  className="border p-2 w-full mt-2 rounded-md"
                />
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram || ''}
                  onChange={handleChange}
                  className="border p-2 w-full mt-2 rounded-md"
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mt-4">{data.member_name}</h2>
                <p className="text-gray-500">Role: {data.role}</p>
                <p className="text-gray-500">Email: {data.email}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={data.facebook} className="text-blue-500 hover:underline">Facebook</a>
                  <a href={data.instagram} className="text-pink-500 hover:underline">Instagram</a>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              </>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </div>
      </div>
    </main>
  );
};

export default Profile;
