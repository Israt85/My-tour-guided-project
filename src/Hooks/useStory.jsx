import { useQuery } from "@tanstack/react-query";
import useaxiosPublic from "./useaxiosPublic";


const useStory = () => {
    const axiosPublic = useaxiosPublic()

    const {data: story=[] } = useQuery({
        queryKey: ['story'],
        queryFn: async ()=>{
          const res = await axiosPublic.get('/story')
          return res.data
        }
    })
    return [story]
};

export default useStory;