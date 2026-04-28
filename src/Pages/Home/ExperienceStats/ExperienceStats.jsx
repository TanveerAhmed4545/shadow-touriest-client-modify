import { Link } from "react-router-dom";
import { FaPlaneDeparture, FaRegMap, FaUsers } from "react-icons/fa";

const ExperienceStats = () => {
    return (
        <div className="py-24 bg-[#E8F3F1] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left side: Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-accent text-brand-secondary inline-block mr-2 transform -rotate-6">We Recommend</h2>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold block leading-tight mt-2">Beautiful Destination every Month</h2>
                        <p className="text-gray-500 mt-6 mb-10 max-w-md text-sm leading-relaxed border-l-2 border-brand-primary pl-4">
                            We believe travel is not just about visiting places, but experiencing them. Discover the world with our exclusive luxury packages, expert guides, and a commitment to making every journey unforgettable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 mb-10">
                            <div className="flex flex-col items-center p-4 bg-brand-dark rounded-2xl text-white shadow-xl min-w-[100px] w-max">
                                <span className="text-brand-secondary font-accent text-4xl leading-none">20+</span>
                                <span className="text-xs font-bold uppercase mt-2">Years</span>
                                <span className="text-[10px] text-gray-400">Experience</span>
                            </div>
                            <div className="flex flex-col justify-center gap-4">
                                <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center"><FaUsers size={16} /></div>
                                   <div>
                                     <p className="text-sm font-bold text-brand-dark">10k+ Happy Travelers</p>
                                     <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Global clients</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center"><FaRegMap size={16} /></div>
                                   <div>
                                     <p className="text-sm font-bold text-brand-dark">50+ Destinations</p>
                                     <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">World wide</p>
                                   </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/allPackages" className="btn-primary rounded-full px-8 py-4 shadow-lg shadow-brand-primary/30 flex items-center gap-3 w-max text-sm tracking-widest font-bold uppercase">
                            Book Tour Now <FaPlaneDeparture />
                        </Link>
                        
                        <div className="mt-16 flex items-center gap-6 opacity-60 grayscale overflow-x-auto">
                           <span className="font-bold text-sm text-brand-secondary">Partners:</span>
                           <span className="font-serif font-bold text-lg">Booking.com</span>
                           <span className="font-serif font-bold text-lg">TripAdvisor</span>
                           <span className="font-serif font-bold text-lg">Expedia</span>
                        </div>
                    </div>

                    {/* Right side: Circular Image */}
                    <div className="relative flex justify-center mt-10 lg:mt-0">
                        <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[15px] border-white shadow-2xl relative z-10">
                            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Traveler" className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="absolute top-10 right-0 md:-right-10 bg-brand-dark text-white p-6 md:p-8 rounded-[30px] rounded-br-none shadow-2xl z-20 max-w-[150px] md:max-w-[200px] border-4 border-white transform rotate-6">
                            <h3 className="font-accent text-5xl text-brand-secondary mb-2">Yes!</h3>
                            <p className="text-sm font-bold leading-tight">We are available for adventure</p>
                        </div>
                        
                        <div className="absolute -top-10 left-0 z-0 opacity-20">
                           <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-brand-primary"><circle cx="10" cy="10" r="2"/><circle cx="30" cy="10" r="2"/><circle cx="50" cy="10" r="2"/><circle cx="70" cy="10" r="2"/><circle cx="90" cy="10" r="2"/><circle cx="10" cy="30" r="2"/><circle cx="30" cy="30" r="2"/><circle cx="50" cy="30" r="2"/><circle cx="70" cy="30" r="2"/><circle cx="90" cy="30" r="2"/><circle cx="10" cy="50" r="2"/><circle cx="30" cy="50" r="2"/><circle cx="50" cy="50" r="2"/><circle cx="70" cy="50" r="2"/><circle cx="90" cy="50" r="2"/><circle cx="10" cy="70" r="2"/><circle cx="30" cy="70" r="2"/><circle cx="50" cy="70" r="2"/><circle cx="70" cy="70" r="2"/><circle cx="90" cy="70" r="2"/></svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExperienceStats;
