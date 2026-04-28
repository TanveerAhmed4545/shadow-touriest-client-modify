import { useParams, Link } from "react-router-dom";
import usePackage from "../../../hooks/usePackage";
import PackagesCard from "../OurPackages/PackagesCard";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";

const TypePage = () => {
  const { id } = useParams();
  const [packages, loading, refetch] = usePackage();
  const detailsPack = packages.filter((d) => d.tourType == id);

  if (loading) return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie className="w-1/3 max-w-xs" animationData={loaderAnimation} loop={true} />
      </div>
    );
    
  return (
    <div className="bg-brand-light min-h-screen pb-24">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h2 className="text-4xl md:text-5xl font-accent text-brand-secondary transform -rotate-3 mb-2">Explore</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{id}</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">{id}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {detailsPack.length === 0 ? (
           <div className="text-center py-20 bg-white rounded-[40px] shadow-sm">
             <h3 className="text-2xl font-serif font-bold text-gray-400">No packages available for this destination yet.</h3>
           </div>
        ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {detailsPack.map((pack) => (
               <PackagesCard
                 key={pack._id}
                 pack={pack}
                 refetch={refetch}
               ></PackagesCard>
             ))}
           </div>
        )}
      </div>
    </div>
  );
};

export default TypePage;
