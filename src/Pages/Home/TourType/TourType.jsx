
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MotionAnimate } from 'react-motion-animate';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../TourType/TourType.css'

import { Pagination, Navigation } from 'swiper/modules';
import useTours from "../../../Hooks/useTours";

const TourType = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [tours] = useTours()
         

    return (


        <div className="">

        <div className="text-center ">
        <MotionAnimate animation='fadeInUp' reset={true}>
        <h1 className='my-2 text-3xl text-green-700 italic'>Tour Type.....</h1>
            <h2 className='my-2 text-xl'>Here you can see our tours variation</h2>
                      </MotionAnimate></div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    tours.map(tour => <SwiperSlide key={tour._id}>

                        <Link to={`/tour/${tour.tourType}`} className=" border-4 border-green-700" key={tour.id}><div >
                            <img className=" rounded-full opacity-60 hover:opacity-100 relative" src={tour.img} alt="" />

                            <h2 className="absolute font-extrabold md:px-20 -mt-28 md:-mt-52 text-sm"> {tour.tourType}</h2></div></Link>


                    </SwiperSlide>)
                }

            </Swiper>
        </div>

    );
};

export default TourType;