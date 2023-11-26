import DayTour from '../Components/DayTour';
import Gallery from '../Components/Gallery';
import TourSections from '../Components/TourSections';
import MeetGuides from '../Pages/Home/Tabs/MeetGuides';


const PackageDetails = () => {
   
    return (
        <div>
            <Gallery></Gallery>
            <TourSections></TourSections>
            <DayTour></DayTour>
            <MeetGuides></MeetGuides>
           
           
        </div>
    );
};

export default PackageDetails;