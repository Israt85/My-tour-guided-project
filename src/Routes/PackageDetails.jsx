
import BookingForm from '../Components/BookingForm';
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
            <BookingForm></BookingForm>
           
        </div>
    );
};

export default PackageDetails;