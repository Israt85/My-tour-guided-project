import { useQuery } from "@tanstack/react-query";
import useaxiosPublic from "./useaxiosPublic";


const useTours = () => {
    const axiosPublic = useaxiosPublic()

    const {data: tours=[] } = useQuery({
        queryKey: ['tours'],
        queryFn: async ()=>{
          const res = await axiosPublic.get('/tours')
          return res.data
        }
    })
    return [tours]
};

export default useTours;