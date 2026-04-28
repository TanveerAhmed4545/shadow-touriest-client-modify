import { Link } from "react-router-dom";
import { FaGraduationCap, FaPhoneAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const TourGuideCard = ({guide}) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, profilePicture, phone, education} = guide;
    
    return (
      <div className="bg-white rounded-[30px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 group">
        
        <div className="relative h-72 overflow-hidden">
          <img
            src={profilePicture}
            alt={name}
            className="object-cover object-top w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-8 flex flex-col flex-grow text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
            {name}
          </h2>
          
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-brand-primary/10 rounded-full text-brand-primary font-bold text-sm mx-auto mb-6">
            Expert Guide
          </div>

          <div className="space-y-3 mb-8 text-gray-500 text-sm text-left">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-secondary">
                  <FaPhoneAlt size={12} />
                </div>
                <span>{phone}</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-primary">
                  <FaGraduationCap size={16} />
                </div>
                <span className="line-clamp-1">{education}</span>
             </div>
          </div>
          
          <div className="mt-auto">
            <Link to={`/guide-Profile/${_id}`}>
              <button className="btn-primary w-full py-3 shadow-lg shadow-brand-primary/30 group-hover:bg-brand-secondary group-hover:shadow-brand-secondary/30 transition-all duration-300">
                View Profile
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    );
};

export default TourGuideCard;
