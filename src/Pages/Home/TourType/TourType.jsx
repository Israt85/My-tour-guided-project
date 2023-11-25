
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";

const TourType = () => {
    const [tours,setTours] = useState([])
    const axiosPublic= useaxiosPublic()

    useEffect(()=>{
        axiosPublic.get('/tours')
        .then(res=>{
            console.log(res.data);
            setTours(res.data)
        })
    },[axiosPublic])
    return (
        <div className="my-10 min-h-screen">
            <div className="text-center "><h1 className='my-2 text-3xl text-green-700 italic'>Tour Type.....</h1>
            <h2 className='my-2 text-xl'>Here you can see our tours variation</h2></div>
            <div className="grid grid-cols-5 item-center w-full border-4 border-green-700 px-16 mx-auto py-28 h-96">
               {
                tours?.map(tour =><Link key={tour.id}><div >
                    <img className="w-40 rounded-lg h-40 opacity-60 hover:opacity-100 relative" src={tour.img} alt="" />
                    
                   <h2 className="absolute font-extrabold  px-1 -mt-20 text-sm"> {tour.name}</h2></div></Link> )
               }
            </div>
        </div>
    );
};

export default TourType;