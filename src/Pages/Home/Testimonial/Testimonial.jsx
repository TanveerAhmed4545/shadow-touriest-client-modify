import { FaStar, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className="py-24 bg-[#E8F3F1] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-black text-[#1A3C40] opacity-5 text-4xl sm:text-6xl md:text-[120px] whitespace-nowrap z-0 pointer-events-none uppercase tracking-widest">Testimonial</div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-accent text-brand-secondary inline-block mr-2 transform -rotate-3">Our Client Say!</h2>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold inline-block leading-tight mt-2">Testimonial</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Images */}
                    <div className="relative flex justify-center">
                        <div className="w-full max-w-[350px] aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white">
                            <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Client" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-10 -right-10 w-24 h-24 rounded-2xl overflow-hidden shadow-xl z-20 border-[4px] border-white hidden md:block">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Client 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-10 -left-10 w-20 h-20 rounded-2xl overflow-hidden shadow-xl z-20 border-[4px] border-white hidden md:block">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Client 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    
                    {/* Right: Review */}
                    <div className="relative bg-white p-10 md:p-14 rounded-[40px] shadow-xl border border-gray-100 mt-10 lg:mt-0">
                        <FaQuoteRight className="absolute -top-6 -right-2 text-brand-secondary opacity-10 text-8xl" />
                        <h3 className="text-3xl font-serif font-bold text-brand-dark mb-1">Ewan McNeil</h3>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Traveler</p>
                        
                        <p className="text-lg text-gray-600 leading-relaxed italic mb-8 relative z-10 border-l-4 border-brand-primary pl-6">
                            "This was hands down the best travel experience of my life. Everything from the seamless booking process to the incredible guides and stunning locations was absolutely perfect. I can't wait for my next adventure!"
                        </p>
                        
                        <div className="flex gap-2 text-brand-secondary text-xl">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
