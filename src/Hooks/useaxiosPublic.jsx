import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tour-guided-server.onrender.com/'
    
})

const useaxiosPublic = () => {
    return axiosPublic
};

export default useaxiosPublic;