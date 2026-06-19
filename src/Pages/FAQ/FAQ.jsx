import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || FAQ&apos;s</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744626753-1fa28f67c9bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">FAQ&apos;s</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <FaQuestionCircle size={18} />
              <span className="text-sm">We&apos;ve got answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
              Everything You Need To Know
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Find quick answers to your questions. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our support team.
            </p>
          </div>

          {/* General Questions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-secondary rounded-full inline-block"></span>
              General Information
            </h3>
            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
                <input type="radio" name="accordion-general" defaultChecked /> 
                <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                  What is Shadow Tourist?
                </div>
                <div className="collapse-content text-gray-600"> 
                  <p>Shadow Tourist is a premier tour guide agency dedicated to providing authentic, immersive, and unforgettable travel experiences across the globe. We connect travelers with expert local guides.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
                <input type="radio" name="accordion-general" /> 
                <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                  Do you offer customized tours?
                </div>
                <div className="collapse-content text-gray-600"> 
                  <p>Yes, absolutely! While we offer a wide variety of pre-planned packages, our travel experts can tailor any itinerary to suit your specific preferences, schedule, and group size.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking & Payments */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-primary rounded-full inline-block"></span>
              Booking & Payments
            </h3>
            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
                <input type="radio" name="accordion-booking" /> 
                <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                  How secure is my payment?
                </div>
                <div className="collapse-content text-gray-600"> 
                  <p>We use Stripe, a world-class payment gateway, to ensure all transactions are encrypted and 100% secure. We do not store your credit card information directly on our servers.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
                <input type="radio" name="accordion-booking" /> 
                <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                  What is your cancellation policy?
                </div>
                <div className="collapse-content text-gray-600"> 
                  <p>You can receive a full refund if you cancel your booking at least 14 days prior to the scheduled tour. Cancellations within 14 days are subject to a partial fee. Please read our Terms & Conditions for full details.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support Banner */}
          <div className="mt-12 bg-brand-dark p-8 md:p-12 rounded-[30px] text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Still have questions?</h3>
            <p className="text-gray-300 mb-8 relative z-10 max-w-lg mx-auto">
              Our travel concierges are available 24/7 to assist you with booking issues, custom requests, or general inquiries.
            </p>
            <Link to="/contact" className="relative z-10 bg-brand-secondary hover:bg-brand-primary text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
