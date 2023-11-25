import { useState } from "react";
import useTours from "../Hooks/useTours";


const DayTour = () => {
    const [tours] = useTours()
    const [isDropDown, setIsDropDown] = useState(false)
    const handleToggleDropdown = (tourId) => {
        setIsDropDown((prevStates) => ({
            ...prevStates,
            [tourId]: !prevStates[tourId],
        }));
    };

    return (
        <div className="min-h-screen">
            {
                tours.map((tour, index) => <div key={tour._id}><div  className=" relative flex justify-center mx-52 items-center">
                <div> <h2 className="absolute rounded-s-lg px-2 py-6 h-20 bg-green-700 -mt-10 w-16">Day 0{index + 1}</h2></div>
                <div className="w-96 flex items-center justify-between mx-10 px-6 h-20 my-4 bg-green-200">
                    <h2 className="text-center w-52 px-4 py-6">{tour.location}</h2>

                    <div className="dropdown dropdown-right">
                            <button onClick={() => handleToggleDropdown(tour._id)} className="btn m-1">Click</button>
                            </div>

                        {isDropDown[tour._id] && 
                            <ul className=" dropdown-content z-10 menu p-2 shadow bg-white rounded-box h-auto w-52">
                                {
                                    tour.locationDescription
                                }
                            </ul>
                        





                        }



                </div>
                

            </div>
            
            
            
 </div>
                )
            }
        </div>
    );
};

export default DayTour;