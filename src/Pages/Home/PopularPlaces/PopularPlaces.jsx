import axios from "axios";
import { useEffect, useState } from "react";
import MyCarousel from "./MyCarousel";


const PopularPlaces = () => {
    const [places,setPlaces] = useState(null)
    useEffect(()=>{
        axios.get('/places.json')
        .then(res=>{
            console.log(res.data)
            setPlaces(res.data)
        })
    },[])


    return (
        <div className="my-10 p-6">
           <h2 className='my-2 text-center text-3xl text-green-700 italic'>Popular Places...</h2>

<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 mx-12">
{
    places?.map((place,idx)=> <div key={place?.id} className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        

        <label htmlFor={`my_modal_${idx}`}>
            <img className="rounded-full pt-2 w-60 h-60 mx-auto" src={place?.picture} alt="" />
            
            </label>


<input type="checkbox" id={`my_modal_${idx}` }className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    
  <img className='w-full h-72' src={place?.picture} alt={`Image ${idx + 1}`} />
    <h3 className="font-bold text-lg">{place?.name} </h3>
    <p className="py-4">{place?.description}</p>
    <div className="modal-action">

    
      <label htmlFor={`my_modal_${idx}`} 
      className="btn">Close!</label>
    </div>
  </div>
</div>  


    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{place?.name}</h5>
        </a>

    </div>
</div>)
}
</div>

        </div>
    );
};

export default PopularPlaces;