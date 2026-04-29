import Loader from "../../components/Shared/Loader";
import usePackage from "../../hooks/usePackage";
import AllPackCard from "./AllPackCard";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const AllPackages = () => {
    const [packages, loading] = usePackage();
    const location = useLocation();
    
    const searchQuery = location.state?.search?.toLowerCase() || "";
    
    const displayedPackages = packages.filter(pack => 
        pack.tourType?.toLowerCase().includes(searchQuery) || 
        pack.tripTitle?.toLowerCase().includes(searchQuery)
    );
    
    if (loading) return (
      <Loader />
    );

    return (
      <div className="font-sans w-full overflow-x-hidden bg-brand-light pb-24">
        <Helmet>
          <title>Shadow Tourist || All Packages</title>
        </Helmet>
            
        {/* 1. Hero Section */}
        <div 
          className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white mt-16 px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">All Packages</h1>
            <div className="flex items-center justify-center space-x-3 text-lg font-medium">
              <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
              <span className="text-white/60">/</span>
              <span className="text-brand-secondary">Packages</span>
            </div>
          </div>
        </div>

        {/* 2. Packages Grid */}
        <div className="container mx-auto px-5 lg:px-20 -mt-20 relative z-20">
          {searchQuery && displayedPackages.length === 0 ? (
             <div className="bg-white rounded-[30px] p-12 text-center shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-gray-500">No packages found for "{searchQuery}"</h3>
                <Link to="/allPackages" className="text-brand-primary font-bold mt-4 inline-block hover:underline" onClick={() => window.history.replaceState({}, document.title)}>Clear Search</Link>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPackages.map(pack => (
                <AllPackCard key={pack._id} pack={pack}></AllPackCard>
              ))}  
            </div>
          )}
        </div>

      </div>
    );
};

export default AllPackages;