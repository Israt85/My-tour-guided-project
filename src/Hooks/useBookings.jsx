import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useaxiosSecure from "./useaxiosSecure";

const useBookings = () => {
    const axiosSecure = useaxiosSecure()
    const {user,loading} = useAuth()
    const {data: Bookings =[] , refetch} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`) 
            return res.data
        }
    })
    return [Bookings,refetch]
};

export default useBookings;