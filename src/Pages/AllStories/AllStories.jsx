import { Link } from "react-router-dom";
import useStory from "../../Hooks/useStory";
import { motion } from 'framer-motion';


const AllStories = () => {
    const [story] = useStory()
    return (
        <div className="my-10" >
            <h2 className='my-2 text-center text-3xl text-green-700 italic'>See Our Story</h2>
            <div className=" mx-auto gap-4 grid grid-cols-1 md:grid-cols-2">

                {  story?.map(store =>

                    <div  key={store._id}><motion.div
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
                  </motion.div> </div>
                )
                }
            </div>
        </div>
    );
};

export default AllStories;