'use client'
import AdminSidePanel from '@/components/admin/AdminSidePanel';
import Profile from '@/components/dashbord/Profile';
import AdminHeader from '@/components/YvHeader';
const page = () => {
  return (
<div className="flex">
        <AdminSidePanel />
        <div className="flex-1">
          <AdminHeader />
          <div className="p-6">
           <Profile/>
          </div>
        </div>
      </div>
  )
}

export default page
