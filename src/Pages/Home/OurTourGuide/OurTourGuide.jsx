import Loader from "../../../components/Shared/Loader";
import useGuide from "../../../hooks/useGuide";
import TourGuideCard from "./TourGuideCard";
import { Link } from "react-router-dom";

const OurTourGuide = () => {
    const [guides, loading] = useGuide();
    
    if (loading) return (
      <Loader />
    );
    
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-bold mb-4 uppercase tracking-widest text-sm">
                  Expert Leaders
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold mb-6">
                Meet Our Tour Guides
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Journey with the best. Our experienced and passionate guides are dedicated to making every step of your adventure extraordinary.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.slice(0,3).map(guide => (
                  <TourGuideCard key={guide._id} guide={guide} />
                ))}  
            </div>
            
            <div className="mt-16 text-center">
              <Link to={'/allGuides'}>
                <button className="btn-primary px-8 py-4 rounded-full text-lg shadow-lg shadow-brand-primary/30">
                  View All Guides 
                </button>
              </Link>
            </div>
        </div>
      </div>
    );
};

export default OurTourGuide;
