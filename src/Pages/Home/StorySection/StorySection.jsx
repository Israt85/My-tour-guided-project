import { Link } from "react-router-dom";
import useStory from "../../../Hooks/useStory";
import { motion } from 'framer-motion';


const StorySection = () => {
    const [story] = useStory()
    console.log(story);
    return (
        <div className="my-10" >
            <h2 className='my-2 text-center text-3xl text-green-700 italic'>See Our Story</h2>
            <div className=" mx-auto gap-4 grid grid-cols-1 md:grid-cols-2">

                {
                   story?.length> 4 ? (story?.slice(0,4).map(store =>

                    <div  key={store._id}>

<motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 10, x: 0 }}   
      transition={{ duration: 2 }}    
    >
        <div  className="w-full mx-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <Link to={`/story/${store._id}`}>
                    <a href="#">
                        <img className="p-8 h-96 w-full rounded-t-lg" src={store.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{store.
                                experience}</h5>
                        </a>
                    </div>
                    </Link>
                </div> 
    </motion.div>
                    </div>
                )) :  story?.map(store =>

                    <div  key={store._id}><div  className="w-full mx-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-8 h-96 w-full rounded-t-lg" src={store.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{store.
                                experience}</h5>
                        </a>
                    </div>
                </div> </div>
                )
                }
            </div>
            <div>
            <Link to='/allstories'> <button className="flex mt-4 justify-center mx-auto items-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">All Stories
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></button></Link>
            </div>
        </div>
    );
};

export default StorySection;