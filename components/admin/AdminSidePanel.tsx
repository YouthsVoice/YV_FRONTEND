"use client";
import { useState,useEffect } from 'react';
import { Home, Users,User, Menu, CalendarDays, X } from "lucide-react";

import Link from "next/link";

const AdminSidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    
  
    useEffect(() => {
      // Get role from local storage
      const storedRole = localStorage.getItem("role");
      setRole(storedRole);
    }, []);
  

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 w-64 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:block`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <h1 className="text-white text-lg">Admin Dashboard</h1>
        </div>
        <nav className="mt-5 flex flex-col h-[90vh] justify-between">
          <ul>
            <li className="group">
              <Link href="/youthvoice/dashboard/admin" className="flex items-center p-4 text-white hover:bg-gray-700">
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li className="group">
              <Link href="/youthvoice/dashboard/admin/member" className="flex items-center p-4 text-white hover:bg-gray-700">
                <Users className="w-5 h-5 mr-3" />
                Members
              </Link>
            </li>
            <li className="group">
              <Link href="/youthvoice/dashboard/admin/events" className="flex items-center p-4 text-white hover:bg-gray-700">
                
                <CalendarDays className="w-5 h-5 mr-3" />
                EVENTS
              </Link>
            </li>
            <li className='group'>
              <Link href="/youthvoice/dashboard/admin/profile" className="flex items-center p-4 text-white hover:bg-gray-700">
              <User className="w-5 h-5 mr-3" />
              PROFILE
              
              </Link>
            </li>
            {/* Admin-only routes */}
            {role === "admin" && (
              <li className="group">
                <Link href="/youthvoice/dashboard/admin/volunteer" className="flex items-center p-4 text-white hover:bg-gray-700">
                  <Users className="w-5 h-5 mr-3" />
                  volunteer
                </Link>
              </li> 
            )}
          </ul>
          <ul>
            <li className="group">
              <Link href="/logout" className="flex items-center p-4 text-white hover:bg-gray-700">
                <X className="w-5 h-5 mr-3" />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default AdminSidePanel;
