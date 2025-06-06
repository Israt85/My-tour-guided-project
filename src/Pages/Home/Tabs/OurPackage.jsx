import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import useTours from "../../../Hooks/useTours";
import useAuth from "../../../Hooks/useAuth";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import { motion } from 'framer-motion';
import Swal from "sweetalert2";



const OurPackage = () => {
   const [tourCards] = useTours()
  
  
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
            <div className="grid gap-4 mx-4 grid-cols-1 md:grid-cols-3">
            { 
               tourCards.length >3? <>{tourCards.slice(0,3).map(card=> <div key={card._id}>
                     

                
                     <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 10, x: 0 }}   
      transition={{ duration: 2 }}    
    >

<div className="bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="relative rounded-t-lg w-full h-52" src={card.img} alt="" />
                       <div onClick={()=>handleAddtoWishlist (card)} className="w-full px-4 text-3xl -mt-48 ml-64 absolute">
                           <GiSelfLove></GiSelfLove>
                        </div>
                        <div className="w-20 text-white mx-4 bg-black text-xl -mt-48 absolute">
                            $ {card.price}
                        </div>

                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card?.tourType}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.tripTitle}</p>
                
                       <Link to={`/tours/${card._id}`} > <button className="flex justify-center mx-auto items-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Package
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></button></Link>
                            {/* <Link to={`/wheather/${card?.location}`}><button>Check Wheather</button></Link> */}
                    </div>
                </div>
    </motion.div>
                
                
                
                
                
                                </div>)} </>:<> {tourCards.map(card=> <div key={card._id}>
                     

                                    <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 10, x: 0 }}   
      transition={{ duration: 2 }}    
    >

<div className="bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                         <a href="#">
                             <img className="rounded-t-lg h-52" src={card.img} alt="" />
                         </a>
                         <div className="p-5">
                             <a href="#">
                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
                             </a>
                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.tripTitle}</p>
                     
                             <button className="flex justify-center mx-auto items-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Package
                             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                 </svg></button>
                         </div>
                     </div>
    </motion.div>
                     
                     
                     
                     
                     
                                     </div> )} </>
            }
        </div>

        <Link to='/allpackage'><button type="submit" className="mt-4 text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">All Package</button></Link>
        </div>
       
    );
};

export default OurPackage;