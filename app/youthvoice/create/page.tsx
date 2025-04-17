"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/API";

type Role = 'gm' | 'admin' | 'mod';

interface MemberFormData {
  member_name: string;
  email: string;
  dob: string;
  phone: string;
  password: string;
  nid: string;
  role: Role;
  facebook: string;
  instagram: string;
  gmail: string;
}

export default function CreateMemberPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<MemberFormData>({
    member_name: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    nid: "",
    role: "gm",
    facebook: "",
    instagram: "",
    gmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${API}/api/member/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/youthvoice/member-login"); // redirect on success
    } else {
      alert("Failed to create member.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Create Member</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input name="member_name" placeholder="Full Name" value={formData.member_name} onChange={handleChange} required className="input" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />
        <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} className="input" />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input" />
        <input name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input" />
        <input name="nid" placeholder="NID Number" value={formData.nid} onChange={handleChange} className="input" />
        
        <select name="role" value={formData.role} onChange={handleChange} className="input">
          <option value="gm">General Member</option>
          <option value="admin">Administrator</option>
          <option value="mod">Moderator</option>
        </select>

        <input name="facebook" type="url" placeholder="Facebook URL" value={formData.facebook} onChange={handleChange} className="input" />
        <input name="instagram" type="url" placeholder="Instagram URL" value={formData.instagram} onChange={handleChange} className="input" />
        <input name="gmail" type="email" placeholder="Gmail" value={formData.gmail} onChange={handleChange} className="input" />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Create Member
        </button>
      </form>
    </div>
  );
}