import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useaxiosPublic from "./useaxiosPublic";


const useWish = () => {
    const axiosPublic = useaxiosPublic()
    const {user} = useAuth()
    const {data : wishlist=[], refetch } = useQuery({
        queryKey: ['wish', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/wishlist?email=${user?.email}`)
            return res.data
        }
    })
    return [wishlist,refetch]
};

export default useWish;