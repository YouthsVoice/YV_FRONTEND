'use client'
import AdminSidePanel from '@/components/admin/AdminSidePanel';
import AdminHeader from '@/components/YvHeader';
import React from 'react';
import MemberSearch from '@/components/admin/MemberSERCH';



const MemberPage = () => {

  
    return (
      <div className="flex">
        <AdminSidePanel />
        <div className="flex-1">
          <AdminHeader />
          <div className="p-6">
           <MemberSearch/>
          </div>
        </div>
      </div>
    );
  };
  
  export default MemberPage;