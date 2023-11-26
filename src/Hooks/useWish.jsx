import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useaxiosSecure from "./useaxiosSecure";


const useWish = () => {
    const axiosSecure = useaxiosSecure()
    const {user} = useAuth()
    const {data : wishlist=[], refetch } = useQuery({
        queryKey: ['wish', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/wishlist?email=${user?.email}`)
            return res.data
        }
    })
    return [wishlist,refetch]
};

export default useWish;