import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useaxiosPublic from "./useaxiosPublic";

const useBookings = () => {
    const axiosPublic = useaxiosPublic()
    const {user} = useAuth()
    const {data: Bookings =[] , refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/bookings?email=${user?.email}`) 
            return res.data
        }
    })
    return [Bookings,refetch]
};

export default useBookings;