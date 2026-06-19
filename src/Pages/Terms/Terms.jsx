import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFileContract } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Terms & Conditions</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Terms & Conditions</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
          
          <div className="mb-12 border-b border-gray-100 pb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <FaFileContract size={18} />
              <span className="text-sm">Last Updated: October 2024</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-dark">
              Agreement of Service
            </h2>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            
            <div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing and using the Shadow Tourist website and booking our tour services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-3">2. Booking and Payments</h3>
              <p>
                All bookings are subject to availability. A deposit or full payment is required to secure a reservation. Payments are securely processed via Stripe. Prices are subject to change without notice, but once a booking is confirmed, your price is locked in.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-3">3. Cancellations and Refunds</h3>
              <p>
                Cancellations made 14 days or more before the scheduled tour date will receive a full refund. Cancellations made within 14 days will be subject to a cancellation fee. Shadow Tourist reserves the right to cancel a tour due to extreme weather or unforeseen circumstances, in which case a full refund or alternative date will be offered.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-3">4. Traveler Responsibilities</h3>
              <p>
                Travelers are responsible for ensuring they have valid passports, visas, and necessary travel insurance. We highly recommend purchasing comprehensive travel insurance before your trip. Travelers are also expected to follow the instructions of their tour guides for safety reasons.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif text-brand-dark mb-3">5. Limitation of Liability</h3>
              <p>
                Shadow Tourist shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or any unforeseen events occurring during a tour.
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-6">
              If you have any questions regarding these Terms & Conditions, please contact us.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
