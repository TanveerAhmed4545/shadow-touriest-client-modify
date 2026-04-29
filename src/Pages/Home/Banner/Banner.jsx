import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
              className="absolute inset-0 bg-cover bg-center transform-gpu scale-105 transition-transform duration-[10000ms] ease-out will-change-transform"
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
    </div>
  );
};

export default Banner;
