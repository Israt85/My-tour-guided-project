import React from 'react';
import useWish from '../Hooks/useWish';
import { useParams } from 'react-router-dom';

const VisitDetails = () => {
    const {id} = useParams()
    console.log(id);
    // const [tours] = useTours()
    const [wishlist]= useWish()
    console.log(wishlist);
    

    const selectedTours = wishlist.find((tour) => (tour._id == id))


    console.log(selectedTours);
   
    return (
        <div>
            <div className="my-10">
            <div className=" mx-6 flex items-center justify-between">


                <div>
                <p className="text-gray-900 text-xl dark:text-gray-400"> Tour Type: {selectedTours?.tourType} </p>
                <p className="text-gray-500 dark:text-gray-400">{selectedTours?.
                    description} </p>
                    <p>Location: {selectedTours?.location}</p>
                    <p>Price: ${selectedTours?.price}</p>
                </div>
                
              <img className="w-80 h-80" src={selectedTours?.img} alt="" />
            </div>
            </div>
            </div>
    );
};

export default VisitDetails;