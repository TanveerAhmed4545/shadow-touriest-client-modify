import Lottie from "lottie-react";
import usePackage from "../../../hooks/usePackage";
import PackagesCard from "./PackagesCard";
import loaderAnimation from "../../../assets/loader.json";

const OurPackages = () => {
    const [packages, loading, refetch] = usePackage();
    
    if (loading) return (
      <div className="flex justify-center items-center py-20 bg-[#F5F9F9]">
        <Lottie className="w-48" animationData={loaderAnimation} loop={true} />
      </div>
    );

    return (
        <div className="py-24 bg-[#F5F9F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-accent text-brand-secondary inline-block mr-2 transform -rotate-3">Explore</h2>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold inline-block leading-tight mt-2">Travlla Tours</h2>
                <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                  Discover our handpicked selection of premium luxury packages, designed to provide you with unforgettable experiences across the globe.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.slice(0, 4).map(pack => (
                  <PackagesCard key={pack._id} pack={pack} refetch={refetch} />
                ))}  
              </div>
          </div>
        </div>
    );
};

export default OurPackages;