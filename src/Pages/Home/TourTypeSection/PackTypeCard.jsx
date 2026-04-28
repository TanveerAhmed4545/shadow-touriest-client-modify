import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PackTypeCard = ({type}) => {
  // eslint-disable-next-line react/prop-types
  const {tourType, img} = type;
  
  return (
    <Link to={`/typePage/${tourType}`} className="block group">
      <div className="relative rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl h-[350px] bg-white p-2 transition-all duration-300">
        <div className="relative w-full h-full rounded-[24px] overflow-hidden">
            <img
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            src={img}
            alt={tourType}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="absolute bottom-6 w-full text-center">
            <h3 className="text-xl font-serif font-bold text-white tracking-wide group-hover:text-brand-secondary transition-colors duration-300">
                {tourType}
            </h3>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default PackTypeCard;
