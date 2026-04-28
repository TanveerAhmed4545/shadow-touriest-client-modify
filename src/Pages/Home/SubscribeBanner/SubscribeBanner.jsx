import { FaPaperPlane } from "react-icons/fa";

const SubscribeBanner = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if(email) {
            import("react-hot-toast").then(module => {
                module.default.success("Successfully subscribed to the newsletter!");
            });
            e.target.reset();
        }
    };

    return (
        <div className="bg-[#1A3C40] py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-secondary rounded-[40px] lg:rounded-full p-8 md:p-10 shadow-2xl transform translate-y-24 mb-[-96px] flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border-4 border-white">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    
                    <div className="relative z-10 flex-1 text-center lg:text-left pl-8">
                        <h2 className="text-5xl md:text-6xl font-accent text-white drop-shadow-md transform -rotate-2">Subscribe Now!</h2>
                    </div>
                    
                    <form onSubmit={handleSubscribe} className="relative z-10 w-full lg:w-1/2 pr-2">
                        <div className="bg-white p-2 rounded-full flex shadow-xl border-4 border-brand-secondary/50">
                            <input name="email" type="email" required placeholder="Email address" className="flex-1 bg-transparent outline-none px-4 md:px-6 text-brand-dark font-medium placeholder-gray-400 w-full" />
                            <button type="submit" className="bg-[#1A3C40] text-white p-3 md:p-4 rounded-full hover:bg-brand-primary transition-colors flex items-center justify-center min-w-[48px]">
                                <FaPaperPlane />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeBanner;
