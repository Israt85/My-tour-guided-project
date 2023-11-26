import useWish from "../../Hooks/useWish";


const MyWishlist = () => {
    const [wishlist,refetch] = useWish()
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
                <td className="px-6 flex items-center gap-4 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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