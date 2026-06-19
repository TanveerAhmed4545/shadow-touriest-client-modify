import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

const Careers = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Careers</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Join Our Team</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Careers</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <FaBriefcase size={18} />
              <span className="text-sm">Careers at Shadow Tourist</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
              Build Your Career With Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We are always on the lookout for passionate travelers, skilled guides, and tech enthusiasts to join our mission of delivering unforgettable tour experiences worldwide.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-brand-light p-8 rounded-[20px] mb-12">
            <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6 text-center">Why Work With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-brand-secondary mt-1" />
                <p className="text-gray-600">Competitive salary and performance bonuses.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-brand-secondary mt-1" />
                <p className="text-gray-600">Travel discounts and free annual trips.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-brand-secondary mt-1" />
                <p className="text-gray-600">Flexible working hours & remote opportunities.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-brand-secondary mt-1" />
                <p className="text-gray-600">Inclusive, diverse, and vibrant work culture.</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6">Open Positions</h3>
          <div className="space-y-4">
            
            {/* Job 1 */}
            <div className="border border-gray-100 p-6 rounded-[20px] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-xl font-bold font-serif text-brand-dark mb-1">Senior Tour Guide</h4>
                <p className="text-gray-500 text-sm">Full-time • Dhaka, Bangladesh (On-site)</p>
              </div>
              <Link to="/contact" className="btn-primary px-6 py-2 rounded-full text-white font-medium text-sm text-center">
                Apply Now
              </Link>
            </div>

            {/* Job 2 */}
            <div className="border border-gray-100 p-6 rounded-[20px] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-xl font-bold font-serif text-brand-dark mb-1">Customer Support Representative</h4>
                <p className="text-gray-500 text-sm">Full-time • Remote</p>
              </div>
              <Link to="/contact" className="btn-primary px-6 py-2 rounded-full text-white font-medium text-sm text-center">
                Apply Now
              </Link>
            </div>

            {/* Job 3 */}
            <div className="border border-gray-100 p-6 rounded-[20px] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-xl font-bold font-serif text-brand-dark mb-1">Marketing Specialist</h4>
                <p className="text-gray-500 text-sm">Part-time • Hybrid</p>
              </div>
              <Link to="/contact" className="btn-primary px-6 py-2 rounded-full text-white font-medium text-sm text-center">
                Apply Now
              </Link>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-6">
              Don&apos;t see a role that fits? Send us your resume anyway! We are always open to meeting talented people.
            </p>
            <Link to="/contact" className="text-brand-primary font-bold hover:underline">
              Email us your resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;
