import { useQuery } from "@tanstack/react-query";
import useaxiosSecure from "../../../Hooks/useaxiosSecure";
import { TbPackageExport } from "react-icons/tb";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const AdminProfile = () => {
     const axiosSecure= useaxiosSecure()
     const {data : adminProfile } = useQuery({
        queryKey: ['admin-profile'],
        queryFn: async()=>{
            const res= await axiosSecure('/admin-profile')
            return(res.data);
        }
     })
    return (
        <div>
            <h2 className='text-3xl text-green-700 font-bold text-center my-4'>Admin profile </h2>
            <div>
            <div className="stats flex p-6 gap-10 mx-6 shadow">
  
  <div className="stat flex gap-2 items-center">
    <div className="stat-figure text-green-700 text-5xl">
      <TbPackageExport></TbPackageExport>
    </div>
   <div className="text-center">
   <div className="stat-title">Total Tour Package</div>
    <div className="stat-value text-3xl font-bold text-green-700">{adminProfile?.tours}</div>
    <div className="stat-desc">21% more than last month</div>
   </div>
  </div>
  
  <div className="stat flex items-center px-2 border-x-8 border-green-700">
    <div className="stat-figure text-green-700 text-5xl">
     <FaChalkboardTeacher></FaChalkboardTeacher>
      </div>
    <div className="text-center">
    <div className="stat-title">Total Guide</div>
    <div className="stat-value text-3xl font-bold text-green-700">{adminProfile?.guides}</div>
    <div className="stat-desc">21% more than last month</div>
    </div>
  </div>
  
  <div className="stat flex items-center">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="stat-figure text-green-700 text-5xl">
        <FaUsers></FaUsers>
        </div>
      </div>
    </div>
    <div className="text-center">
    <div className="stat-value">Total Users</div>
    <div className="stat-title text-3xl font-bold text-green-700">{adminProfile?.users}</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
    </div>
  </div>
  
</div>
            </div>
        </div>
    );
};

export default AdminProfile;