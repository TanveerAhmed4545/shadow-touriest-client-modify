import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const AllPackCard = ({pack}) => {
    // eslint-disable-next-line react/prop-types
    const {_id, images, tourType, tripTitle, price} = pack;
    const firstImage = images[0];
    
    return (
      <div className="bg-white rounded-[30px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 group">
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img 
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
            src={firstImage} 
            alt={tripTitle} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-brand-primary text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center shadow-brand-primary/40">
            <BsCurrencyDollar className="text-lg" />
            <span className="text-lg">{price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
            {tripTitle}
          </h2>
          
          <div className="flex items-center gap-2 text-gray-500 mb-8 bg-brand-light p-3 rounded-2xl">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-secondary shadow-sm">
               <FaMapMarkedAlt />
            </div>
            <span className="font-medium text-brand-dark tracking-wide">{tourType}</span>
          </div>
          
          <div className="mt-auto">
            <Link to={`/package-details/${_id}`}>
              <button className="btn-primary w-full py-3 shadow-lg shadow-brand-primary/30 group-hover:bg-brand-secondary group-hover:shadow-brand-secondary/30 transition-all duration-300">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AllPackCard;