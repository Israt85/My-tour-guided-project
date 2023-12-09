import { Triangle } from "react-loader-spinner";
import useAuth from "../../Hooks/useAuth";
import useTours from "../../Hooks/useTours";
import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import useaxiosPublic from "../../Hooks/useaxiosPublic";
import Swal from "sweetalert2";
import { motion } from 'framer-motion';


const AllPackage = () => {
    const {loading} = useAuth()
   const [tourPackage] = useTours()
  
  
   const axiosPublic = useaxiosPublic()
   const {user} = useAuth()
    const handleAddtoWishlist = (card)=>{
        if(user && user?.email){
        
            console.log(card);
            const wishlist ={
                package : card?.name,
                price : card?.price,
                email: user?.email,
                description: card?.description,
                location: card?.location,
                tourType: card?.tourType,
                img: card?.img


            }
            console.log('wishlist', wishlist);
            axiosPublic.post('/wishlist', wishlist)
            .then(res => {
               if(res.data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "successfully added this in your wishlist",
                    showConfirmButton: false,
                    timer: 1500
                  });
               }
          
        })
    }
    }
    return (
       <div>
        <h2 className='text-3xl text-green-700 font-bold text-center my-4'>Here's our All Packages</h2>
         <div className='my-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
            {
                loading ? <div className="w-[max-content] mx-auto"> <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              /> </div> : tourPackage.map(tour=> <div key={tour._id}>
                     
                     <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 10, x: 0 }}   
      transition={{ duration: 2 }}    
    >


<div className="bg-white mx-16 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="relative rounded-t-lg w-full h-52" src={tour?.img} alt="" />
                      
                      <div onClick={()=>handleAddtoWishlist (tour)} className="w-full px-4 text-3xl -mt-48 ml-96 absolute">
                           <GiSelfLove></GiSelfLove>
                        </div>
                        <div className="w-20 p-2 text-white mx-4 bg-black text-xl -mt-48 absolute">
                            $ {tour.price}
                        </div>
                    

                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tour.tourType}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tour.tripTitle}</p>
                
                       <Link to={`/tours/${tour._id}`} > <button className="flex justify-center mx-auto items-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Package
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></button></Link>
                    </div>
                </div>



    </motion.div>
                
                    
                    
                    
                    
                    
                                    </div>)
            }
        </div>
       </div>
    );
};

export default AllPackage;