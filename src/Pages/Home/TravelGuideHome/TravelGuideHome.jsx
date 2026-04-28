import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OurPackages from '../OurPackages/OurPackages';
import OurTourGuide from '../OurTourGuide/OurTourGuide';
import { motion } from 'framer-motion';

const TravelGuideHome = () => {
    return (
        <div className='py-20 bg-brand-light'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Tabs className="w-full">
                    <TabList className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12 border-b border-gray-200 pb-4">
                        <Tab 
                            className="px-6 py-3 font-serif text-lg md:text-xl text-gray-500 cursor-pointer transition-all duration-300 outline-none" 
                            selectedClassName="text-brand-primary border-b-2 border-brand-secondary font-bold"
                        >
                            Overview
                        </Tab>
                        <Tab 
                            className="px-6 py-3 font-serif text-lg md:text-xl text-gray-500 cursor-pointer transition-all duration-300 outline-none" 
                            selectedClassName="text-brand-primary border-b-2 border-brand-secondary font-bold"
                        >
                            Our Packages
                        </Tab>
                        <Tab 
                            className="px-6 py-3 font-serif text-lg md:text-xl text-gray-500 cursor-pointer transition-all duration-300 outline-none" 
                            selectedClassName="text-brand-primary border-b-2 border-brand-secondary font-bold"
                        >
                            Meet Our Guides
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mx-auto" 
                            style={{ maxWidth: '900px' }}
                        >
                            <h2 className="text-3xl lg:text-5xl font-serif text-brand-primary font-bold mb-6">Experience the Extraordinary</h2>
                            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
                                We believe travel is not just about visiting places, but experiencing them. Discover the world with our exclusive luxury packages. Watch the video below for a glimpse of the extraordinary adventures that await you.
                            </p>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-100 border border-white/20">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/lepdqiCF-W8?autoplay=0&controls=1&rel=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Travel Guide Video"
                                ></iframe>
                            </div>
                        </motion.div>
                    </TabPanel>
                    
                    <TabPanel>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <OurPackages></OurPackages>
                        </motion.div>
                    </TabPanel>
                    
                    <TabPanel>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <OurTourGuide></OurTourGuide>
                        </motion.div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TravelGuideHome;