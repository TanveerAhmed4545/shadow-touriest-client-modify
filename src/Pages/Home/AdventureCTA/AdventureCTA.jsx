import { Link } from "react-router-dom";

const AdventureCTA = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed transform scale-110"></div>
            <div className="absolute inset-0 bg-[#1A3C40]/60"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-brand-primary/50 border-4 border-[#1A3C40]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-[70px] sm:text-[100px] md:text-[150px] font-accent text-white drop-shadow-2xl transform -rotate-3 leading-none">Adventure</h2>
                <p className="text-xl md:text-2xl font-serif text-white font-bold tracking-[0.4em] uppercase mt-4 drop-shadow-md bg-[#1A3C40]/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">Your dream travel</p>
                <Link to="/allPackages" className="mt-12 btn-primary rounded-full px-12 py-4 shadow-xl shadow-brand-primary/50 font-bold tracking-widest uppercase text-sm hover:scale-105 transition-transform inline-block">Book Now</Link>
            </div>
        </div>
    );
};

export default AdventureCTA;
