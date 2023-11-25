import React from 'react';
import useaxiosPublic from './useaxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGuide = () => {
    const axiosPublic = useaxiosPublic()

    const {data: guides=[] } = useQuery({
        queryKey: ['guides'],
        queryFn: async ()=>{
          const res = await axiosPublic.get('/guides')
          return res.data
        }
    })
    return [guides]
};

export default useGuide;