import AdminSidePanel from '@/components/admin/AdminSidePanel';
import AdminHeader from '@/components/YvHeader';
import React from 'react';
import EventSearch from '@/components/admin/event/FirstPageEVENTS';
const page = () => {
  return (
    <div className="flex">
    <AdminSidePanel />
    <div className="flex-1">
      <AdminHeader />
      <div className="p-6">
       <EventSearch/>
      </div>
    </div>
  </div>
  )
}

export default page
