"use client"
import AdminSidePanel from '@/components/admin/AdminSidePanel';
import AdminHeader from '@/components/YvHeader';
import React from 'react';
import MemberSearch from '@/components/admin/MemberSERCH';

const AdminPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidePanel />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader />

        {/* Right Panel */}
        <MemberSearch/>
      </div>
    </div>
  );
};

export default AdminPage;
