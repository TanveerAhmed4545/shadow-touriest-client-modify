import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const StoryCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, imageUrl, title, story } = item;
  // eslint-disable-next-line react/prop-types
  const shortStory = story ? story.slice(0, 150) : "";

  return (
    <Link to={`/storyDetails/${_id}`} className="group h-full block">
      <div className="bg-white rounded-[30px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 h-full">
        
        <div className="relative overflow-hidden h-56">
          <img
            src={imageUrl}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-4 left-4 bg-brand-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            Travel Story
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
            {shortStory}...
          </p>
          
          <div className="mt-auto pt-6 border-t border-gray-100">
            <span className="flex items-center gap-2 text-brand-secondary font-bold group-hover:text-brand-primary transition-colors">
              Read Full Story <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default StoryCard;
