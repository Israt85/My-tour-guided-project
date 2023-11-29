import { useQuery } from "@tanstack/react-query";
import useaxiosSecure from "../../../Hooks/useaxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";


const ManageUser = () => {
    
    const axiosSecure = useaxiosSecure()
    const { data: users , refetch } = useQuery({
        queryKey: ['userinfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }

    })


    const handledelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })


            }
        });


    }
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You successfully changed the role",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()

                }
            })
    }

    const handleMakeTourGuide = (user) => {
        axiosSecure.patch(`/users/tourguide/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You successfully changed the role",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()

                }
            })
    }


    return (
        <div>
            <h2 className="py-6 text-3xl mx-6 text-center  font-bold text-green-700">Manage All Users </h2>
            <div>


                <div className="relative w-full mx-6 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, index) => <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user?.email}
                                    </td>
                                    <td className="px-6 py-4">


                                        <div className="flex">
              <button type="button" onClick={()=>handleMakeAdmin(user)} disabled={user.role === 'admin' || user.role === 'tour guide'} className="btn border p-2 bg-green-700 rounded-xl text-white" >Admin</button>
              <button type="button" onClick={()=>handleMakeTourGuide(user)} className="border p-2 bg-green-700 rounded-xl text-white" disabled ={user.role === 'admin' || user.role === 'tour guide'}>Tour Guide</button>
                
              </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handledelete(user)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageUser;