import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TourGuideCard from "../Home/OurTourGuide/TourGuideCard";
import Lottie from "lottie-react";
import useGuide from "../../hooks/useGuide";
import loaderAnimation from "../../assets/loader.json";

const AllGuides = () => {
    const [guides, loading] = useGuide();
    
    if (loading) return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie className="w-1/3 max-w-xs" animationData={loaderAnimation} loop={true} />
      </div>
    );

    return (
      <div className="font-sans w-full overflow-x-hidden bg-brand-light pb-24">
        <Helmet>
          <title>Shadow Tourist || All Guides</title>
        </Helmet>
        
        {/* 1. Hero Section */}
        <div 
          className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white mt-16 px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Tour Guides</h1>
            <div className="flex items-center justify-center space-x-3 text-lg font-medium">
              <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
              <span className="text-white/60">/</span>
              <span className="text-brand-secondary">All Guides</span>
            </div>
          </div>
        </div>

        {/* 2. Guides Grid */}
        <div className="container mx-auto px-5 lg:px-20 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map(guide => (
              <TourGuideCard key={guide._id} guide={guide} />
            ))}
          </div>
        </div>

      </div>
    );
};

export default AllGuides;