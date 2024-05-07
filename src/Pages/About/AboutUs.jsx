import React from 'react';
import img1 from '../../assets/tour.jpeg'
import img2 from '../../assets/tour2.jpeg'

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-center font-nold text-green-700 text-3xl my-4">About Us...</h2>
            <div className='flex flex-col items-center lg:flex-row mx-6 justify-evenly gap-6'>
           
           
           <div  className='sm:mx-10'>
                <div className='relative'>
                <img className='h-60 w-96' src={img2} alt="" />
                <img className='lg:ml-40 lg:-mt-32 mt-4 h-60 w-96' src={img1} alt="" />
                </div>
                {/* <div className='lg:absolute hover:scale-110 lg:-mt-32 lg:mx-6 mx-auto mt-4 flex gap-2 p-6 bg-white border-4 w-60 lg:w-1/4 border-l-nevy-blue'>
                    <h2 className='text-3xl text-red-600 font-bold' >25</h2>
                    <h2 className='w-40 text-center'>We Have More Than years of Experience</h2>
                </div> */}

            </div>
            <div className='w-full lg:w-96 px-10'>
                  <h2 className='text-2xl font-bold mb-4'>Crafting Excellence Since 5 Years</h2>
                  <p className='text-xl font-medium'>At Travel Guide, we believe that travel is more than just visiting landmarks; it's about embarking on immersive journeys that enrich your life and broaden your horizons. With a passion for exploration and a commitment to excellence, we specialize in curating exceptional tour packages that cater to the adventurous spirit in you</p>
            </div>
           </div>
        </div>
    );
};

export default AboutUs;