import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/YTRkngj/underwater-portrait-scuba-diver-exploring-sea-world-1.jpg",
      title: "Vietnam",
      subtitle: "Explore",
    },
    {
      image: "https://i.ibb.co/ZHRtWn2/group-elephants-walking-dry-grass-wilderness-1.jpg",
      title: "Safari",
      subtitle: "Discover",
    }
  ];

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const destination = e.target.destination.value;
    if (!destination) {
       navigate('/allPackages');
    } else {
       toast.success(`Searching for ${destination}...`);
       navigate('/allPackages', { state: { search: destination } });
    }
  };

  return (
    <div className="relative">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        stopOnHover={false}
        swipeable={false}
        showArrows={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[100vh] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms] ease-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/20"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-accent text-brand-secondary drop-shadow-lg mb-[-20px] ml-[-150px] z-10 transform -rotate-12"
              >
                {slide.subtitle}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[80px] sm:text-[100px] md:text-[180px] font-serif text-white font-extrabold drop-shadow-2xl leading-none tracking-tight"
              >
                {slide.title}
              </motion.h1>
              
              <div className="flex gap-4 mt-8">
                 <Link to="/allPackages" className="btn-primary rounded-full px-10 py-3 shadow-lg shadow-brand-primary/40 font-bold text-sm tracking-widest uppercase">Book Tour</Link>
                 <Link to="/contact" className="btn bg-white/20 backdrop-blur-sm text-white border-white/50 rounded-full px-10 py-3 shadow-lg hover:bg-white hover:text-brand-dark transition-colors font-bold text-sm tracking-widest uppercase">Contact Us</Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      
      {/* Floating Search Bar */}
      <form onSubmit={handleSearch} className="absolute bottom-[-60px] md:bottom-[-40px] left-1/2 transform -translate-x-1/2 z-20 w-11/12 max-w-4xl">
         <div className="bg-white rounded-[30px] md:rounded-full shadow-2xl p-3 flex flex-col md:flex-row items-center justify-between border-4 border-white/50 backdrop-blur-md">
            <div className="flex-1 flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-gray-200">
               <div className="px-6 py-3 md:py-2 flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Destination</p>
                  <input name="destination" type="text" placeholder="Where to?" className="w-full text-brand-dark font-bold outline-none bg-transparent" />
               </div>
               <div className="px-6 py-2 flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Date</p>
                  <input type="text" placeholder="When?" className="w-full text-brand-dark font-bold outline-none bg-transparent" />
               </div>
               <div className="px-6 py-2 flex-1 hidden md:block">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Guests</p>
                  <input type="text" placeholder="How many?" className="w-full text-brand-dark font-bold outline-none bg-transparent" />
               </div>
            </div>
            <button type="submit" className="bg-brand-dark text-white p-5 rounded-full hover:bg-brand-primary transition-colors mt-4 md:mt-0 shadow-lg w-full md:w-auto flex justify-center">
               <FaSearch />
            </button>
         </div>
      </form>
    </div>
  );
};

export default Banner;
