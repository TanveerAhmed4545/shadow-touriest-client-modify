import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaLifeRing, FaQuestionCircle, FaHeadset } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Help = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Help Center</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Help Center</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Help Center</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <FaLifeRing size={18} />
              <span className="text-sm">We are here to help you</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
              How Can We Assist You Today?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Welcome to the Shadow Tourist Help Center. Find answers to your questions and resources to help you manage your tour bookings smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Box 1 */}
            <div className="border border-gray-100 p-8 rounded-[20px] hover:border-brand-primary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <FaQuestionCircle size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">FAQ&apos;s</h3>
              <p className="text-gray-600 mb-4">Find quick answers to common questions about our tours, bookings, and cancellation policies.</p>
              <Link to="/contact" className="text-brand-primary font-medium hover:underline">View FAQ&apos;s &rarr;</Link>
            </div>

            {/* Box 2 */}
            <div className="border border-gray-100 p-8 rounded-[20px] hover:border-brand-secondary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4 group-hover:bg-brand-secondary group-hover:text-white transition-all">
                <FaHeadset size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">Customer Support</h3>
              <p className="text-gray-600 mb-4">Need personalized assistance? Our dedicated support team is available 24/7 to help you with anything.</p>
              <Link to="/contact" className="text-brand-secondary font-medium hover:underline">Contact Support &rarr;</Link>
            </div>

            {/* Box 3 */}
            <div className="border border-gray-100 p-8 rounded-[20px] hover:border-brand-primary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <IoIosInformationCircleOutline size={28} />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">Booking Guide</h3>
              <p className="text-gray-600 mb-4">Learn step-by-step how to navigate our platform, choose the right tour package, and complete your booking.</p>
              <Link to="/allPackages" className="text-brand-primary font-medium hover:underline">Browse Packages &rarr;</Link>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center bg-brand-light p-8 rounded-[20px]">
            <h4 className="text-xl font-bold font-serif text-brand-dark mb-4">Still need help?</h4>
            <p className="text-gray-500 mb-6">
              If you couldn&apos;t find the answer to your question, please don&apos;t hesitate to reach out to us directly.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all">
              Send us a message
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Help;
