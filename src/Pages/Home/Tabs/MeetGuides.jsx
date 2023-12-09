import { useEffect, useState } from "react";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import { Link } from "react-router-dom";
import { MotionAnimate } from 'react-motion-animate';


const MeetGuides = () => {
    const [guides,setGuides] = useState([])
    const [showAll,setShowAll] = useState(false)
    const axiosPublic = useaxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/guides')
        .then(res=>{
            setGuides(res.data)
        })
    },[axiosPublic])
    return (
        <div className="mx-10 my-10">
            <MotionAnimate
                          variant={{
                            hidden: { opacity: 0.2, rotate: -180 },
                            show: {
                              opacity: 0.8,
                              rotate: 0,
                              transition: {
                                repeat: Infinity,
                                duration: 4,
                                repeatDelay: 1,
                                type: 'spring'
                              }
                            }
                          }}>
                          <h2 className="text-center font-nold text-green-700 text-3xl my-4">Here is Our famous Tour Guides...</h2>
                        </MotionAnimate>
           {
             guides?.map(guide => <div key={guide._id}>

                
                <ul className="mx-auto divide-y w-full divide-gray-200 dark:divide-gray-700">
                   <li className="pb-3 sm:pb-4">
                      <div className="flex md:flex-row justify-center gap-10 items-center">
                         <div className="bg-green-700 rounded-full p-2">
                            <img className="w-16 h-16 rounded-full" src={guide.img} alt="Neil image"/>
                         </div>
                         <div className="">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {guide.name}
                            </p>
                            <p className="text-sm text-gray-500 w- dark:text-gray-400">
                               {guide.email}
                            </p>
                         </div>
                         <Link to={`/guide/${guide._id}`}><button type="submit" className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</button></Link>
                         
                      </div>
                   </li>
                </ul>
                
                
                
                
                            </div>)
           }
           
           
          

        </div>
    );
};

export default MeetGuides;