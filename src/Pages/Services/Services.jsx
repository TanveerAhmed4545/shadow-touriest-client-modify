import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaMapMarkedAlt, FaPassport, FaConciergeBell, FaBus, FaHotel } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Custom Itineraries",
      description: "Tailor-made travel plans designed specifically around your preferences, budget, and travel style.",
      icon: <FaMapMarkedAlt size={32} />,
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      id: 2,
      title: "Group Tours",
      description: "Join small, intimate group tours led by expert local guides to discover hidden gems together.",
      icon: <FaGlobeAmericas size={32} />,
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10"
    },
    {
      id: 3,
      title: "Visa Assistance",
      description: "Stress-free visa processing with our dedicated team helping you prepare and submit all necessary documents.",
      icon: <FaPassport size={32} />,
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      id: 4,
      title: "24/7 Concierge",
      description: "Round-the-clock support during your trip. From restaurant reservations to emergency assistance.",
      icon: <FaConciergeBell size={32} />,
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10"
    },
    {
      id: 5,
      title: "Luxury Transport",
      description: "Comfortable, safe, and premium transportation arrangements from airport pickups to inter-city travel.",
      icon: <FaBus size={32} />,
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      id: 6,
      title: "Premium Accommodation",
      description: "Exclusive partnerships with luxury resorts, boutique hotels, and authentic local stays.",
      icon: <FaHotel size={32} />,
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10"
    }
  ];

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || Our Services</title>
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-16 relative z-20 mb-24">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              What We Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
              Premium Travel Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide end-to-end travel solutions to ensure your journey is seamless, comfortable, and absolutely unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-brand-light p-8 rounded-[30px] border border-transparent hover:border-brand-primary/30 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl">
                <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  Learn More <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
