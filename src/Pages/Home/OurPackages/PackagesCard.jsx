import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const PackagesCard = ({pack}) => {
  // eslint-disable-next-line react/prop-types
  const { title, _id, tourType, price, images } = pack;

  return (
    <Link to={`/package-details/${_id}`} className="block group h-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col border border-gray-100">
        
        {/* Image Section */}
        <div className="relative h-60 overflow-hidden p-2">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <img
                src={images?.[0] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3'}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                 <FaMapMarkerAlt className="text-brand-primary" /> {tourType}
              </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
               <span className="flex items-center gap-1 text-brand-secondary"><FaStar /> 4.9</span>
               <span className="flex items-center gap-1"><FaClock /> 3 Days</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
               {title}
            </h3>
            
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Starts From</p>
                   <p className="text-2xl font-serif font-bold text-[#1A3C40]">${price}</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default PackagesCard;
