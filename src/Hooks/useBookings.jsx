import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useaxiosSecure from "./useaxiosSecure";

const useBookings = () => {
    const axiosSecure = useaxiosSecure()
    const {user} = useAuth()
    const {data: Bookings =[] , refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`) 
            return res.data
        }
    })
    return [Bookings,refetch]
};

export default useBookings;