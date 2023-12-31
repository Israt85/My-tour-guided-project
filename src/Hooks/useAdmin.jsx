import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useaxiosSecure";


const useAdmin = () => {
    
    const axiosSecure = useAxiosSecure()
    const{user,loading} = useAuth()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
           const res = await axiosSecure.get(`/users/admin/${user?.email}`)
           return res.data?.admin
        }
    })
    return [isAdmin ,isAdminLoading]
};

export default useAdmin;