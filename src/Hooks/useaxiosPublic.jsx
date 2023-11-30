import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tour-guided-server.vercel.app/'
})

const useaxiosPublic = () => {
    return axiosPublic
};

export default useaxiosPublic;