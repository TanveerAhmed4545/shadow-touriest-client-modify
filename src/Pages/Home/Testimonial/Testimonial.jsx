import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Amelia Warner",
            role: "Tourist",
            text: "Once the travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        },
        {
            id: 2,
            name: "Ewan McNeil",
            role: "Adventurer",
            text: "This was hands down the best travel experience of my life. Everything from the seamless booking process to the incredible guides and stunning locations was absolutely perfect.",
            image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Photographer",
            text: "The breathtaking landscapes and the hidden gems we visited were phenomenal. The local knowledge of the guides made all the difference in capturing the perfect moments.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        },
        {
            id: 4,
            name: "Michael Chen",
            role: "Explorer",
            text: "A truly immersive experience! I've traveled extensively, but this agency provided a level of care and curated activities that went far beyond my expectations. Highly recommended.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    // Get next 3 images for the thumbnails
    const thumbnails = [
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
        testimonials[(currentIndex + 3) % testimonials.length],
    ];

    return (
        <div className="py-24 bg-white relative overflow-hidden font-sans">
            
            {/* Header Section & Huge Background Text */}
            <div className="relative w-full flex flex-col items-center pt-10 mb-20 lg:mb-32">
                
                {/* Titles */}
                <div className="text-center relative z-20 mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#145d5e] mb-2">
                        Our Client <span className="text-brand-secondary">Says!</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base px-4">Destinations worth exploring! Here are a few popular spots</p>
                </div>

                {/* Plane, Path, and Huge Text Container */}
                <div className="relative w-full flex justify-center items-center py-6 md:py-16">
                    
                    {/* TESTIMONIAL Huge Text (Background) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <h1 
                            className="text-[42px] sm:text-[70px] md:text-[100px] lg:text-[150px] font-bold tracking-[0.15em] uppercase opacity-90 select-none"
                            style={{
                                background: 'linear-gradient(to bottom, #145d5e 0%, rgba(253, 241, 214, 0.2) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: 1
                            }}
                        >
                            TESTIMONIAL
                        </h1>
                    </div>

                    {/* Dotted path SVG */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-30 z-10 px-4">
                        <svg width="100%" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M20 40 C 200 -20, 600 100, 780 40" stroke="#145d5e" strokeWidth="2" strokeDasharray="6 8" fill="none"/>
                            <circle cx="20" cy="40" r="4" fill="#145d5e" />
                            <circle cx="780" cy="40" r="4" fill="#f9a826" />
                        </svg>
                    </div>

                    {/* Airplane Image (Local Public Asset) */}
                    <div className="relative z-20">
                        <img 
                            src="/airplane-takeoff1.png" 
                            alt="Airplane" 
                            className="w-28 sm:w-36 lg:w-48 drop-shadow-2xl transform -rotate-12 translate-y-2 md:translate-y-4"
                        />
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left: Main Image */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
                        {/* Decorative Background Circles */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FFFBF0] rounded-full -z-20"></div>
                        <div className="absolute top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-full h-[90%] bg-[#145d5e] rounded-l-full rounded-r-[100px] -z-10 hidden lg:block"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-[350px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 bg-white"
                            >
                                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Middle: Thumbnails */}
                    <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center gap-6">
                        {thumbnails.map((thumb, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === thumb.id))}
                                className={`w-16 h-16 rounded-[15px] overflow-hidden shadow-md cursor-pointer border-2 transition-all duration-300 hover:scale-110 ${idx === 1 ? 'ml-10' : ''} border-transparent hover:border-brand-secondary`}
                            >
                                <img src={thumb.image} alt="Thumbnail" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    
                    {/* Right: Review Content */}
                    <div className="lg:col-span-5 relative mt-10 lg:mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-transparent"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-accent text-[#145d5e] mb-1">{currentTestimonial.name}</h3>
                                        <p className="text-sm font-bold text-brand-secondary">{currentTestimonial.role}</p>
                                    </div>
                                    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#145d5e] opacity-60">
                                        <path d="M10 40C15.5228 40 20 35.5228 20 30C20 24.4772 15.5228 20 10 20C4.47715 20 0 24.4772 0 30C0 35.5228 4.47715 40 10 40Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <path d="M10 20C10 8.9543 18.9543 0 30 0" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M40 40C45.5228 40 50 35.5228 50 30C50 24.4772 45.5228 20 40 20C34.4772 20 30 24.4772 30 30C30 35.5228 34.4772 40 40 40Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <path d="M40 20C40 8.9543 48.9543 0 60 0" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </div>
                                
                                <p className="text-lg text-gray-600 leading-relaxed mb-8 pr-4">
                                    {currentTestimonial.text}
                                </p>
                                
                                <div className="flex gap-1 text-brand-secondary text-xl mb-10">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slider Controls */}
                        <div className="flex gap-4">
                            <button 
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full bg-brand-secondary text-white flex items-center justify-center hover:bg-brand-dark hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-secondary/30"
                            >
                                <FaChevronLeft />
                            </button>
                            <button 
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full bg-brand-secondary text-white flex items-center justify-center hover:bg-brand-dark hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-secondary/30"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
