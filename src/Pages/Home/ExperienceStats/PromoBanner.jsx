import { Link } from "react-router-dom";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const PromoBanner = () => {
    return (
        <div className="bg-[#E8F3F1] py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text and CTA */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-accent text-brand-secondary mb-2 transform -rotate-2">Get up to 50% discount</h2>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold leading-tight mb-8">
                            Get Extra Discount & Help
                        </h2>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-xl mb-8 border border-gray-100 flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300">
                           <div className="w-16 h-16 bg-[#1A3C40] rounded-xl flex items-center justify-center text-white shrink-0">
                               <FaCheckCircle size={28} />
                           </div>
                           <div>
                               <h4 className="text-xl font-bold text-brand-dark">Best Tour Service</h4>
                               <p className="text-sm text-gray-500 mt-1">Exceptional quality and care for every traveler.</p>
                           </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-xl mb-10 border border-gray-100 flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300">
                           <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center text-white shrink-0">
                               <FaCheckCircle size={28} />
                           </div>
                           <div>
                               <h4 className="text-xl font-bold text-brand-dark">Best Support Service</h4>
                               <p className="text-sm text-gray-500 mt-1">24/7 assistance wherever you are in the world.</p>
                           </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                           <div className="bg-brand-secondary text-white font-black text-4xl md:text-5xl p-6 rounded-2xl shadow-lg transform -rotate-6">
                              50%
                           </div>
                           <a href="tel:+000123456789" className="bg-[#1A3C40] text-white p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:bg-[#122b2e] transition-colors cursor-pointer">
                              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center animate-bounce">
                                 <FaPhoneAlt />
                              </div>
                              <div>
                                 <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Call Us Now</p>
                                 <p className="text-2xl font-bold font-serif">+00 012 345 6789</p>
                              </div>
                           </a>
                        </div>
                    </div>
                    
                    {/* Right: Image Graphic */}
                    <div className="relative">
                        <div className="relative z-10 w-full max-w-lg mx-auto">
                            <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Happy Traveler" className="w-full h-auto drop-shadow-2xl rounded-[40px] border-[10px] border-white" />
                        </div>
                        <div className="hidden sm:block absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 font-accent text-brand-secondary text-7xl md:text-9xl opacity-20 -rotate-90 z-0 whitespace-nowrap">
                            Summer!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
