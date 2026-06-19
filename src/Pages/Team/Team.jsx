import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Eleanor Pena",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Ralph Edwards",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Jane Cooper",
      role: "Lead Tour Guide",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Cameron Williamson",
      role: "Travel Consultant",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Our Team</title>
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Team</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Our Team</span>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Meet The Experts
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
              The People Behind The Magic
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our diverse team of travel enthusiasts, expert guides, and planners work tirelessly to make your dream vacations a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative overflow-hidden rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-500 bg-brand-light">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a href="#" className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <FaTwitter />
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-secondary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-secondary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                {/* Info block */}
                <div className="p-6 text-center border-t border-brand-primary/10">
                  <h3 className="text-xl font-bold font-serif text-brand-dark mb-1">{member.name}</h3>
                  <p className="text-brand-secondary text-sm font-medium uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
