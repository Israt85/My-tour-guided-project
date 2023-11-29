// import React, { useEffect } from 'react';
// import useAuth from "../../../Hooks/useAuth";
// import useBookings from "../../../Hooks/useBookings";
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useaxiosSecure';

const AssignTour = () => {
    const axiosSecure= useAxiosSecure()
    const {user, loading} = useAuth()
    const {data: guideName =[] } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/bookings?guideName=${user.displayName}`) 
            return res.data
        }
    })

    return (
        <div>
            <h2>{guideName?.length}</h2>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                               Package name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Guide name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            guideName?.map(guide =><tr key={guide._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {guide?.name}
                            </th>
                            <td className="px-6 py-4">
                                {guide?.guideName
}
                            </td>
                            <td className="px-6 py-4">
                                {guide?.name}
                            </td>
                            <td className="px-6 py-4">
                                <div className='text-white flex gap-2'>
                                    <button className='bg-green-600 p-2'>Accept</button>
                                    <button className='bg-red-600 p-2'>Reject</button>
                                </div>
                            </td>
                        </tr> )
                        }
                                

                            </tbody>
                    </table>
            </div>

        </div>)
        
};

export default AssignTour;
