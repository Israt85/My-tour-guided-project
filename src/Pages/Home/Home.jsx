import Slider from "./Slider/Slider";
import StorySection from "./StorySection/StorySection";
import TouristTab from "./Tabs/TouristTab";
import TourType from "./TourType/TourType";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TouristTab></TouristTab>
            <TourType></TourType>
            <StorySection></StorySection>
        </div>
    );
};

export default Home;