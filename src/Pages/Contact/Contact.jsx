import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Contact Us</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Contact Us</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Contact Us</span>
          </div>
        </div>
      </div>

      {/* 2. Quick Contact Cards (Overlapping Hero slightly) */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone Card */}
          <div className="bg-white p-8 rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-primary text-center group">
            <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 mb-6">
              <FaPhoneAlt size={24} />
            </div>
            <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">Phone Number</h3>
            <p className="text-gray-500 mb-3">Call us anytime 24/7</p>
            <p className="text-lg font-bold text-brand-primary">(+62) 123-821-455</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-secondary text-center group">
            <div className="w-16 h-16 mx-auto bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300 mb-6">
              <MdEmail size={28} />
            </div>
            <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">Email Address</h3>
            <p className="text-gray-500 mb-3">Drop us a line</p>
            <p className="text-lg font-bold text-brand-secondary">support@shadowtourist.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-primary text-center group">
            <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 mb-6">
              <IoLocation size={28} />
            </div>
            <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">Our Location</h3>
            <p className="text-gray-500 mb-3">Visit our main office</p>
            <p className="text-lg font-bold text-brand-primary">1230 Uttara, Dhaka</p>
          </div>

        </div>
      </div>

      {/* 3. Main Split Layout: Form & Map */}
      <div className="container mx-auto px-5 lg:px-20 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
                Send Us A Message
              </h2>
              <p className="text-gray-500">
                Have a specific itinerary in mind or need help planning? Fill out the form below and our adventure experts will get back to you shortly.
              </p>
            </div>

            <form action="https://formsubmit.co/tanveer8507@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="w-full bg-brand-light p-4 rounded-[20px] outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Your Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required className="w-full bg-brand-light p-4 rounded-[20px] outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Subject</label>
                <input type="text" name="_subject" placeholder="Tour Inquiry" required className="w-full bg-brand-light p-4 rounded-[20px] outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                <textarea name="message" placeholder="Tell us about your dream adventure..." required rows="6" className="w-full bg-brand-light p-4 rounded-[20px] outline-none focus:ring-2 focus:ring-brand-primary transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full text-lg shadow-lg shadow-brand-primary/30">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Right: Map & Socials */}
          <div className="flex flex-col gap-8">
            {/* Map */}
            <div className="bg-white p-4 rounded-[40px] shadow-sm border border-gray-100 flex-grow relative overflow-hidden min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.9730352447!2d90.33728817435127!3d23.780840500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1717658933251!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '30px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 p-4"
              ></iframe>
            </div>

            {/* Social Media Connect */}
            <div className="bg-brand-dark p-10 rounded-[40px] text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-6 relative z-10">Follow Our Adventures</h3>
              <div className="flex justify-center gap-4 relative z-10">
                <a href="#" className="w-14 h-14 bg-white/10 hover:bg-brand-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="w-14 h-14 bg-white/10 hover:bg-brand-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="w-14 h-14 bg-white/10 hover:bg-brand-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. FAQ Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-5 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Support
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                How do I book a personalized tour?
              </div>
              <div className="collapse-content text-gray-600"> 
                <p>You can easily book a tour by navigating to our &quot;Packages&quot; page, selecting your desired adventure, and clicking the &quot;Book Now&quot; button. Alternatively, you can fill out the contact form above with your specific requests and we will create a custom itinerary for you.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
              <input type="radio" name="my-accordion-2" /> 
              <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                What is your cancellation policy?
              </div>
              <div className="collapse-content text-gray-600"> 
                <p>We offer a full refund for cancellations made at least 14 days prior to the scheduled tour date. Cancellations made within 14 days are subject to a 30% cancellation fee. Please contact our support team for emergency rescheduling.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-brand-light rounded-[20px] group border border-transparent hover:border-brand-primary/30 transition-colors">
              <input type="radio" name="my-accordion-2" /> 
              <div className="collapse-title text-xl font-bold font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                Are your tours suitable for children?
              </div>
              <div className="collapse-content text-gray-600"> 
                <p>Absolutely! We offer a variety of family-friendly packages. However, some extreme adventure tours have age restrictions for safety reasons. Please check the specific details on each package or contact us directly to find the perfect tour for your family.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;