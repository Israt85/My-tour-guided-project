import { Link, useParams } from "react-router-dom";
import useTours from "../../../Hooks/useTours";
import { GiSelfLove } from "react-icons/gi";


const TourTypeFilter = () => {
    const [tours] = useTours()
    const {tourtype} = useParams()
    console.log(tourtype);

    const filteredType = tours?.filter(
        tour => tour.tourType?.toLowerCase() === tourtype?.toLowerCase()
      );
console.log(filteredType); 
    return (
        <div className="grid my-10 justify-center gap-4 mx-4 grid-cols-1 md:grid-cols-2">
            {
                filteredType?.map(type => <div key={type._id}>
                     

                    <div className="bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="relative rounded-t-lg w-full h-52" src={type.img} alt="" />
                           <div className="w-full px-4 text-3xl -mt-48 ml-64 absolute">
                            </div>
                            <div className="w-20 text-white mx-4 bg-black text-xl -mt-48 absolute">
                                $ {type.price}
                            </div>
    
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{type?.tourType}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{type?.tripTitle}</p>
                    
                            <Link><button className="flex justify-center mx-auto items-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Package
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg></button></Link>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                                    </div>)
            }
        </div>
    );
};

export default TourTypeFilter;