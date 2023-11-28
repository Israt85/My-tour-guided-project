import img1 from '../../../assets/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg'
import img2 from '../../../assets/group-friends-having-fun-taking-selfies-nature.jpg'
import img3 from '../../../assets/hiking-hikers-looking-map-couple-friends-navigating-together-smiling-happy-during-camping-travel-hike-outdoors-forest-young-mixed-race-asian-woman-man.jpg'
import img4 from '../../../assets/male-female-tourists-are-enjoying-forest.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import '../Slider/slider.css';


const Slider = () => {
    return (
        <div className='w-full'>
           <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: '80vh' }} 
      >
        <SwiperSlide style={{ height: '100%' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src={img1} />
          
        <div className='w-full text-center absolute top-20'>
        <h2 className="text-3xl font-bold italic">Explore the Beauty of the Sea with Our Expert Guides</h2>
        <p className="text-xl">Embark on a coastal journey with our expert guides. Discover the allure of the sea as our knowledgeable narrators weave tales of maritime history, guide you through scenic shorelines, and create unforgettable moments by the waves. Dive into the beauty of the seaside with us</p>
    </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src={img2} />
          <div className='w-full text-center absolute top-20'>
        <h2 className="text-3xl font-bold italic">Immerse Yourself in the Wonders of the Woodlands</h2>
        <p className="text-xl">Embark on a coastal journey with our expert guides. Discover the al Immerse yourself in the wonders of the woodlands as our knowledgeable guides lead you along hidden trails, sharing insights into the diverse flora and fauna that call the forest home.</p>
    </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src={img3} />
          <div className='w-full text-center absolute top-20'>
        <h2 className="text-3xl font-bold italic">Unveil the Secrets of Nature's Sanctuary</h2>
        <p className="text-xl">Embark on a coastal journey with our expert guides. Discover the allure of the sea as our knowledgeable narrators weave tales of maritime history, guide you through scenic shorelines, and create unforgettable moments by the waves. Dive into the beauty of the seaside with us</p>
    </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className='w-full text-center absolute top-20'>
        <h2 className="text-3xl font-bold italic">Immerse Yourself in the Wonders of the Woodlands</h2>
        <p className="text-xl">Embark on a coastal journey with our expert guides. Discover the al Immerse yourself in the wonders of the woodlands as our knowledgeable guides lead you along hidden trails, sharing insights into the diverse flora and fauna that call the forest home.</p>
    </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <div className='w-full text-center absolute top-20'>
        <h2 className="text-3xl font-bold italic">Unveil the Secrets of Nature's Sanctuary</h2>
        <p className="text-xl">Embark on a coastal journey with our expert guides. Discover the allure of the sea as our knowledgeable narrators weave tales of maritime history, guide you through scenic shorelines, and create unforgettable moments by the waves. Dive into the beauty of the seaside with us</p>
    </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src={img4} />
          <div className='w-full text-center absolute top-20'>
        <h2 className="text-3xl font-bold italic">Unveil the Secrets of Nature's Sanctuary</h2>
        <p className="text-xl">Embark on a coastal journey with our expert guides. Discover the allure of the sea as our knowledgeable narrators weave tales of maritime history, guide you through scenic shorelines, and create unforgettable moments by the waves. Dive into the beauty of the seaside with us</p>
    </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;