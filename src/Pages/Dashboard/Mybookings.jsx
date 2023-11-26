import React from 'react';
import useaxiosPublic from '../../Hooks/useaxiosPublic';
import useWish from '../../Hooks/useWish';
import useBookings from '../../Hooks/useBookings';

const Mybookings = () => {
    const [bookings,refetch] = useBookings()
       



    return (
        <div className='m-10'>
            bookings
            <div>
                

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Package name
                </th>
                <th scope="col" className="px-6 py-3">
                    Tour Guide Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Tour Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Tour Price
                </th>
                <th scope="col" className="px-6 py-3">
                   Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Options
                </th>
            </tr>
        </thead>
        <tbody>

            {
                bookings.map(booking => <tr key={booking._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {booking.packageName}
                </th>
                <td className="px-6 py-4">
                    {booking.guideName}
                </td>
                <td className="px-6 py-4">
                    {booking.date}
                </td>
                <td className="px-6 py-4">
                    {booking.price}
                </td>
                <td className=" mx-6 p-2">
                  <select className='p-2' name="" id="">
                    <option value="In Review">In Review</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                    <button className='btn bg-green-600 px-2 py-1 rounded text-white'>pay</button>
                    <button disabled className='btn my-2 p-1 rounded border'>Apply</button>
                    <button className='btn bg-red-700 p-1 rounded text-white'>Cencel</button>
                </td>
            </tr> )
            }
            
        </tbody>
    </table>
</div>

            </div>
        </div>
    );
};

export default Mybookings;