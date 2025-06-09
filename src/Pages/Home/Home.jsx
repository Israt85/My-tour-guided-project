import Testimonal from "./Feedback/Testimonal";
import PopularPlaces from "./PopularPlaces/PopularPlaces";
import Slider from "./Slider/Slider";
import StorySection from "./StorySection/StorySection";
import TouristTab from "./Tabs/TouristTab";
import TourType from "./TourType/TourType";
// import Wheather from "./Wheater/Wheather";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Slider></Slider>
            <TouristTab></TouristTab>
            <PopularPlaces></PopularPlaces>
            <Testimonal/>
            <TourType></TourType>
            <StorySection></StorySection>
            {/* <Wheather></Wheather> */}
        </div>
    );
};

export default Home;