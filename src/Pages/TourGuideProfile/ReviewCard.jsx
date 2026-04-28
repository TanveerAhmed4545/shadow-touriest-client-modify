import { FaStar } from "react-icons/fa";
import demoUserPic from "../../assets/demoUser.png";

// eslint-disable-next-line react/prop-types
const ReviewCard = ({item}) => {
  // eslint-disable-next-line react/prop-types
  const {userName, userRating, userComment, timestamp, userPhoto} = item;
  
  return (
    <div className="bg-white p-8 rounded-[30px] shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
      
      {/* Rating Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex text-brand-secondary">
          {[...Array(parseInt(userRating) || 0)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="text-xs text-gray-400 font-bold bg-brand-light px-3 py-1 rounded-full">
          {new Date(timestamp).toLocaleDateString()}
        </span>
      </div>

      {/* Comment Body */}
      <p className="text-gray-600 italic mb-8 flex-grow relative z-10">
        "{userComment}"
      </p>

      {/* User Info Footer */}
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
        <img 
          src={userPhoto ? userPhoto : demoUserPic} 
          alt={userName} 
          className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20" 
        />
        <div>
          <h4 className="font-bold text-brand-dark font-serif">{userName}</h4>
          <p className="text-sm text-gray-500">Traveler</p>
        </div>
      </div>

      {/* Decorative Quote Mark */}
      <div className="absolute top-10 right-10 text-brand-primary/5 text-6xl font-serif leading-none group-hover:scale-110 transition-transform">
        "
      </div>
    </div>
  );
};

export default ReviewCard;