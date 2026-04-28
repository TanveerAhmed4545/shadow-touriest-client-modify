import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaUsers, FaBookOpen, FaCalendarAlt, FaHandsHelping, FaShareAlt, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import useStory from "../../hooks/useStory";
import useGuide from "../../hooks/useGuide";
import StoryCard from "../Home/OurStory/StoryCard";
import TourGuideCard from "../Home/OurTourGuide/TourGuideCard";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";

const Community = () => {
  const [stories, isLoadingStories] = useStory();
  const [guides, isLoadingGuides] = useGuide();

  if (isLoadingStories || isLoadingGuides) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie className="w-1/3 max-w-xs" animationData={loaderAnimation} loop={true} />
      </div>
    );
  }

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light pb-24">
      <Helmet>
        <title>Shadow Tourist || Community Hub</title>
      </Helmet>
      
      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/20 backdrop-blur-md rounded-full text-brand-primary font-bold mb-6 border border-brand-primary/30">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Active Community Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">Connect. Share. <br/><span className="text-brand-primary">Explore.</span></h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of passionate travelers sharing their adventures, tips, and incredible stories from around the globe.</p>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Community</span>
          </div>
        </div>
      </div>

      {/* 2. Floating Stats Bar */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
         <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center gap-8 border border-gray-100">
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-2">10k+</h3>
               <p className="text-gray-500 font-bold tracking-wider uppercase text-sm">Active Travelers</p>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-2">500+</h3>
               <p className="text-gray-500 font-bold tracking-wider uppercase text-sm">Travel Stories</p>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-2">50+</h3>
               <p className="text-gray-500 font-bold tracking-wider uppercase text-sm">Expert Guides</p>
            </div>
         </div>
      </div>

      {/* 3. Recent Stories Integration */}
      <div className="container mx-auto px-5 lg:px-20 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 rounded-full text-brand-secondary font-medium mb-4">
                  <FaMapMarkerAlt /> Community Journeys
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">
                  Latest Field Notes
                </h2>
            </div>
            <Link to="/allStories" className="hidden md:inline-flex mt-6 btn-secondary shadow-lg shadow-brand-secondary/30">
               View All Stories
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.slice(0, 3).map((item) => (
                <StoryCard key={item._id} item={item}></StoryCard>
            ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/allStories" className="btn-secondary w-full shadow-lg shadow-brand-secondary/30">
               View All Stories
            </Link>
        </div>
      </div>

      {/* 4. Why Join Us Features */}
      <div className="bg-white py-24 border-y border-gray-100 mb-32">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
                Community Perks
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">More than just a platform, we are a global family of explorers. Here is why you should join us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-[30px] p-8 hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-brand-primary/20">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                <FaUsers size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Forums</h3>
              <p className="text-gray-500 leading-relaxed">Engage with fellow travelers, share your experiences, and glean insights from seasoned adventurers in our forums.</p>
            </div>
            <div className="bg-brand-light rounded-[30px] p-8 hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-brand-secondary/20">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                <FaBookOpen size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Stories</h3>
              <p className="text-gray-500 leading-relaxed">Browse inspiring stories contributed by our community. From safari encounters to tranquil getaways, discover it all.</p>
            </div>
            <div className="bg-brand-light rounded-[30px] p-8 hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-brand-primary/20">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                <FaCalendarAlt size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Meetups</h3>
              <p className="text-gray-500 leading-relaxed">Join us for meetups where you can connect with travelers in person. From group hikes to photography workshops.</p>
            </div>
            <div className="bg-brand-light rounded-[30px] p-8 hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-brand-secondary/20">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                <FaHandsHelping size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Outreach</h3>
              <p className="text-gray-500 leading-relaxed">We are committed to giving back. Learn more about our sustainable practices, conservation efforts, and local partnerships.</p>
            </div>
            <div className="bg-brand-light rounded-[30px] p-8 hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-brand-primary/20">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                <FaShareAlt size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Share</h3>
              <p className="text-gray-500 leading-relaxed">Have a travel story, tip, or photo to share? We invite you to contribute and inspire others. Your contributions enrich us.</p>
            </div>
            <div className="bg-brand-light rounded-[30px] p-8 hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-brand-secondary/20">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                <FaStar size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Spotlights</h3>
              <p className="text-gray-500 leading-relaxed">Discover tips and tricks, member spotlights, and travel recommendations from top contributors in the community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Top Guides / Members */}
      <div className="container mx-auto px-5 lg:px-20 mb-32">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <FaStar /> Top Contributors
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">
              Meet Our Community Leaders
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.slice(0, 4).map((guide) => (
               <TourGuideCard key={guide._id} guide={guide} />
            ))}
        </div>
      </div>

      {/* 6. CTA Banner */}
      <div className="container mx-auto px-5 lg:px-20 mb-24">
        <div className="relative rounded-[40px] overflow-hidden bg-brand-dark shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Ready to share your journey?</h2>
             <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl">Create an account today to start posting stories, reviewing guides, and connecting with a global network of explorers.</p>
             <Link to="/register" className="btn-primary px-10 py-4 text-lg shadow-lg shadow-brand-primary/40 hover:-translate-y-1 transition-transform">
                Join the Community Now
             </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Community;
