import bannerab from '../../assets/bannernew.jpg'
import MeetGuides from '../Home/Tabs/MeetGuides';

const AboutBanner = () => {
    return (
        <div>
            <img className='w-full mb-10' src={bannerab} alt="" />

            <div>
                <MeetGuides></MeetGuides>
            </div>
        </div>
    );
};

export default AboutBanner;