'use client'
import AdminSidePanel from '@/components/admin/AdminSidePanel';
import Volunteer from '@/components/dashbord/Volunteer';
import AdminHeader from '@/components/YvHeader';

const page = () => {
    return (
  <div className="flex">
          <AdminSidePanel />
          <div className="flex-1">
            <AdminHeader />
            <div className="p-6">
             <Volunteer/>
            </div>
          </div>
        </div>
    )
  }
  
  export default page
  