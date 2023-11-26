

import { useParams } from "react-router-dom";
import useTours from "../Hooks/useTours";
import BookingForm from "./BookingForm";



const TourSections = () => {
    const {id} = useParams()
    const [tours] = useTours()
    console.log(tours);

    const selectedTours = tours.find((tour) => tour._id == id)

    console.log(selectedTours);
   
    return (
        <div>
            <div className="my-10">
            <h2 className="mx-6 text-3xl font-bold">Let's go for a tour on : {selectedTours?.name}</h2>
            <div className=" mx-6 flex items-center justify-between">


                <div>
                <p className="text-gray-500 dark:text-gray-400">{selectedTours?.
                    description} </p>
                    <p>Price: ${selectedTours?.price}</p>
                </div>
                
              <img className="w-80 h-80" src={selectedTours?.img} alt="" />
            </div>
        </div>

         <BookingForm selectedTours={selectedTours}></BookingForm>
       
        </div>
    );
};

export default TourSections;