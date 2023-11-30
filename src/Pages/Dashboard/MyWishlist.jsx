import { Link } from "react-router-dom";
import useWish from "../../Hooks/useWish";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useaxiosSecure";


const MyWishlist = () => {

    const axiosSecure = useAxiosSecure()
    const [wishlist,refetch] = useWish()


    const handleDelete=(user)=>{
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


                axiosSecure.delete(`/wishlist/${user._id}`)
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
    return (
        <div className="mx-10 my-10">
            <h2 className="pb-6 text-3xl font-bold text-green-700">My wishlist</h2>
            <div>
                

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Package name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            {
                wishlist.map(list =>  <tr key={list._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {list.package}
                </th>
                <td className="px-6 py-4">
                    $ {list.price}
                </td>
                <td className=" flex items-center gap-2 py-4">
                   
                <Link to={`/list/${list._id}`}>
                <button className="flex justify-center items-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit Details
                        </button>
                </Link>
                    <button onClick={()=> handleDelete(list)} className="flex justify-centeritems-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete
                        </button>
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

export default MyWishlist;