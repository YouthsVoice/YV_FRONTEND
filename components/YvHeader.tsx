'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const AdminHeader = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Get role from local storage
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <header className="flex justify-between items-center bg-gray-900 p-4 text-white fixed w-full z-20 lg:ml-64">
      <h1 className="text-lg max-md:hidden">
        {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : "Dashboard"}
      </h1>
      <div className="text-lg text-transparent hidden max-md:flex">
        {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : "Dashboard"}
      </div>
      <Link href="/youthvoice/profile" className="text-sm hover:underline">
        Profile
      </Link>
    </header>
  );
};

export default AdminHeader;
