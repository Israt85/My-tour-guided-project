import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurPackage from './OurPackage';
import MeetGuides from './MeetGuides';
import { MotionAnimate } from 'react-motion-animate';

const TouristTab = () => {
    return (
        <div className=' text-center'>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel className='my-10'>
                <MotionAnimate animation='fadeInUp' reset={true}>
                <h1 className='my-2 text-3xl text-green-700 italic'>Check this.....</h1>
                    <h2 className='my-2 text-xl'>This is the sample of our Guide</h2>
                      </MotionAnimate>

                    <iframe className='w-72 h-52 border-8 border-green-700 mx-auto md:w-[800px] md:h-[600px]'  src="https://www.youtube.com/embed/dMG4RnJZBwM" title="Travel Guides &amp; Tour Guides and Escorts Career Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </TabPanel>
                <TabPanel>
                    <OurPackage></OurPackage>
                </TabPanel>
                <TabPanel>
                    <MeetGuides></MeetGuides>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TouristTab;