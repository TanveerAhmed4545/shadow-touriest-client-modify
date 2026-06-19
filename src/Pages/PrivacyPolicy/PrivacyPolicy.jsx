import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FiShield } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsShieldLock } from "react-icons/bs";

const PrivacyPolicy = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Privacy Policy</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Privacy Policy</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <MdOutlinePrivacyTip size={20} />
              <span className="text-sm">Effective Date: October 2024</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
              Your Privacy Matters To Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              At Shadow Tourist, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website or services.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <IoIosInformationCircleOutline size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-3">1. Information We Collect</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We collect information that you provide directly to us when you create an account, book a tour, or contact us. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
                  <li>Name, email address, phone number, and physical address.</li>
                  <li>Payment information and billing details (processed securely via Stripe).</li>
                  <li>Passport or identification details required for international travel packages.</li>
                  <li>Health or dietary requirements relevant to ensuring your safety during tours.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <FiShield size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-3">2. How We Use Your Information</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
                  <li>Process your bookings and send booking confirmations.</li>
                  <li>Communicate with you regarding your tours, inquiries, or support requests.</li>
                  <li>Personalize your experience and recommend tours matching your interests.</li>
                  <li>Comply with legal and regulatory requirements.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <BsShieldLock size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-3">3. Data Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement reasonable security measures to protect the confidentiality and integrity of your personal data. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <MdOutlinePrivacyTip size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-3">4. Sharing Your Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell your personal information to third parties. We may share your information with trusted third-party vendors (like local tour operators, hotels, and payment processors) strictly for the purpose of fulfilling your tour itinerary and providing our services to you.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <h4 className="text-xl font-bold font-serif text-brand-dark mb-4">Have Questions?</h4>
            <p className="text-gray-500 mb-6">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all">
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
