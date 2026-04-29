import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TourTypeSection from "./TourTypeSection/TourTypeSection";
import ExperienceStats from "./ExperienceStats/ExperienceStats";
import StatsBanner from "./ExperienceStats/StatsBanner";
import OurPackages from "./OurPackages/OurPackages";
import PromoBanner from "./ExperienceStats/PromoBanner";
import Testimonial from "./Testimonial/Testimonial";
import AdventureCTA from "./AdventureCTA/AdventureCTA";
import OurStory from "./OurStory/OurStory";

const Home = () => {
    return (
        <div className="font-sans overflow-x-hidden bg-brand-light">
            <Helmet>
                <title>Shadow Tourist || Home</title>
            </Helmet>
            
            <Banner />
            <TourTypeSection />
            <ExperienceStats />
            <StatsBanner />
            <OurPackages />
            <PromoBanner />
            <Testimonial />
            <AdventureCTA />
            <OurStory />
            
        </div>
    );
};

export default Home;