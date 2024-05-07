
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const MyCarousel = ({images}) => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
                images?.map((img,idx)=>
                    <SwiperSlide key={idx}>
                     <img className='w-full h-72' src={img} alt={`Image ${idx + 1}`} />
                     </SwiperSlide>
                )
                
            }
         
        </Swiper>
      </>
    );
};

export default MyCarousel;