import bannerab from '../../assets/bannernew.jpg'
import MeetGuides from '../Home/Tabs/MeetGuides';
import AboutUs from './AboutUs';

const AboutBanner = () => {
    return (
        <div>
            <img className='w-full mb-10' src={bannerab} alt="" />

            <div>
                <AboutUs></AboutUs>
                <MeetGuides></MeetGuides>
            </div>
        </div>
    );
};

export default AboutBanner;