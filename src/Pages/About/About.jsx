import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaStar, FaQuoteLeft, FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaGlobeAmericas, FaUserTie } from "react-icons/fa";

const About = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || About Us</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">About Us</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. Introduction Section (Two Column with overlapping images) */}
      <div className="container mx-auto px-5 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main large image (Pill shape) */}
            <div className="absolute left-0 top-0 w-[70%] h-[80%] rounded-full overflow-hidden border-8 border-white shadow-xl z-10">
              <img src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&auto=format&fit=crop" alt="Traveler" className="w-full h-full object-cover" />
            </div>
            {/* Secondary smaller image overlapping (Circle) */}
            <div className="absolute right-0 bottom-[10%] w-[55%] h-[45%] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop" alt="Camping" className="w-full h-full object-cover" />
            </div>
            {/* Experience Badge (Circle) */}
            <div className="absolute left-[10%] bottom-0 w-32 h-32 bg-brand-secondary rounded-full flex flex-col items-center justify-center text-white shadow-xl z-30 transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold font-serif">15+</span>
              <span className="text-sm font-medium text-center leading-tight">Years<br/>Experience</span>
            </div>
          </div>
          
          {/* Mobile Image Stack (Simplified for smaller screens) */}
          <div className="lg:hidden relative h-[400px] w-full max-w-md mx-auto mb-10">
             <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-[40px] overflow-hidden border-4 border-white shadow-lg z-10">
               <img src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&auto=format&fit=crop" alt="Travel" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
               <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop" alt="Adventure" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Get To Know Us
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Explore All Corners of The World With Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are passionate about creating unforgettable adventures. Whether you're seeking a serene escape into nature or a thrilling journey across rugged terrains, we bring your travel dreams to life with expertly crafted itineraries and unparalleled service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="text-brand-secondary mt-1"><FaCheckCircle size={24} /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Expert Guides</h4>
                  <p className="text-gray-500 text-sm mt-1">Highly trained professionals leading the way.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-brand-secondary mt-1"><FaCheckCircle size={24} /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Affordable Prices</h4>
                  <p className="text-gray-500 text-sm mt-1">Premium experiences that fit your budget.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="btn-primary group">
                Discover More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Highlights / Why Choose Us Section */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-5 lg:px-20">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              Our Core Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-brand-light p-10 rounded-[30px] hover:bg-brand-primary group transition-colors duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-brand-primary group-hover:text-brand-secondary shadow-md mb-6 transition-colors duration-300">
                <FaGlobeAmericas size={40} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark group-hover:text-white mb-4 transition-colors">Worldwide Coverage</h3>
              <p className="text-gray-600 group-hover:text-white/80 transition-colors">We offer adventures across diverse continents, ensuring you can explore any corner of the globe.</p>
            </div>
             {/* Feature 2 */}
             <div className="bg-brand-light p-10 rounded-[30px] hover:bg-brand-primary group transition-colors duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-brand-primary group-hover:text-brand-secondary shadow-md mb-6 transition-colors duration-300">
                <FaUserTie size={40} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark group-hover:text-white mb-4 transition-colors">Expert Tour Guides</h3>
              <p className="text-gray-600 group-hover:text-white/80 transition-colors">Our seasoned guides are passionate locals and adventure experts dedicated to your safety and fun.</p>
            </div>
             {/* Feature 3 */}
             <div className="bg-brand-light p-10 rounded-[30px] hover:bg-brand-primary group transition-colors duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-brand-primary group-hover:text-brand-secondary shadow-md mb-6 transition-colors duration-300">
                <FaMapMarkerAlt size={40} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark group-hover:text-white mb-4 transition-colors">Custom Destinations</h3>
              <p className="text-gray-600 group-hover:text-white/80 transition-colors">Personalize your journey. We tailor itineraries to match your specific adventurous desires.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Team Section */}
      <div className="py-24 bg-brand-light">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Team Members
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              Meet Our Expert Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "John Doe",
                role: "Lead Adventurer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Jane Smith",
                role: "Wilderness Expert",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Michael Johnson",
                role: "Cultural Guide",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative inline-block w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={member.image}
                    alt={member.name}
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-colors"><FaFacebookF /></a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-colors"><FaTwitter /></a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-colors"><FaInstagram /></a>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-1 hover:text-brand-primary transition-colors cursor-pointer">
                  {member.name}
                </h3>
                <p className="text-brand-secondary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Testimonials Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-5 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              What They Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-brand-light p-10 rounded-[30px] relative">
              <div className="absolute top-10 right-10 text-brand-primary/20">
                <FaQuoteLeft size={60} />
              </div>
              <div className="flex text-brand-secondary mb-6">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>
              <p className="text-gray-600 text-lg italic mb-8 relative z-10">
                "An absolutely breathtaking experience! The guides were phenomenal and every detail was perfectly planned. I've never felt so connected to nature."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Sarah J." className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-brand-dark">Sarah Jenkins</h4>
                  <p className="text-sm text-gray-500">Avid Explorer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-brand-light p-10 rounded-[30px] relative">
              <div className="absolute top-10 right-10 text-brand-primary/20">
                <FaQuoteLeft size={60} />
              </div>
              <div className="flex text-brand-secondary mb-6">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>
              <p className="text-gray-600 text-lg italic mb-8 relative z-10">
                "Shadow Tourist exceeded all my expectations. The wilderness trek was challenging but extremely rewarding. Highly recommend to any adventure seeker!"
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Mark T." className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-brand-dark">Mark Thompson</h4>
                  <p className="text-sm text-gray-500">Nature Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;