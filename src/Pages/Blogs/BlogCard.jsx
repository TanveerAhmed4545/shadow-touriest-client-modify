import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { img, title, blog, date } = item;
  
  return (
    <div className="bg-white rounded-[30px] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 group">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        {/* Optional Date Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-brand-dark font-bold text-sm shadow-lg">
           <FaCalendarAlt className="text-brand-primary" />
           {date || "Recent Post"}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
          {title}
        </h2>
        
        <p className="text-gray-500 mb-6 flex-grow line-clamp-3 leading-relaxed text-sm">
          {blog}
        </p>

        {/* Action footer */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <Link to={`/blog/${item._id}`} className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:text-brand-primary transition-colors group/btn">
            Read Full Story <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;