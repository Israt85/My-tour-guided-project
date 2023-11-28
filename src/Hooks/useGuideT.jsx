import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useaxiosSecure";


const useGuideT = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth()
    const {data: isTourGuide, isPending: isGuideLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: [user?.email, 'tourguide'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/tourguide/${user?.email}
            `)
            return res.data?.tourGuide
        }
    })
    return [isTourGuide, isGuideLoading]
}
export default useGuideT;