import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { destinationData } from "./destinationData";
import { FaCalendarAlt, FaMoneyBillWave, FaLanguage, FaBus, FaCompass } from "react-icons/fa";

const Destination = () => {
  const { name } = useParams();
  const destination = destinationData[name?.toLowerCase()];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Destination Not Found</h2>
          <Link to="/" className="btn-primary px-8 py-3 rounded-full text-white">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || {destination.name}</title>
      </Helmet>

      {/* 1. Ultra Premium Hero Section (4K Support) */}
      <div 
        className="relative bg-cover bg-center h-[500px] md:h-[700px] flex items-center justify-center"
        style={{
          backgroundImage: `url('${destination.heroImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 to-brand-dark/40"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4 w-full max-w-5xl mx-auto">
          <span className="inline-block px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 uppercase tracking-widest text-sm font-bold mb-6">
            {destination.country}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 drop-shadow-2xl">{destination.name}</h1>
          <p className="text-2xl md:text-3xl font-light italic text-white/90 drop-shadow-md">&quot;{destination.tagline}&quot;</p>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-20 -mt-24 relative z-20 mb-24">
        
        {/* 2. Overview & Culture Card */}
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-6">
                <FaCompass size={18} />
                <span className="text-sm">The Experience</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
                Discover {destination.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {destination.overview}
              </p>
            </div>
            <div className="bg-brand-light p-8 md:p-12 rounded-[30px] border-l-4 border-brand-secondary">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Culture & Vibe</h3>
              <p className="text-gray-600 leading-relaxed italic">
                {destination.culture}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Top Attractions Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Must-Visit Attractions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The iconic landmarks you simply cannot miss when visiting {destination.name}.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[30px] shadow-lg h-[400px]">
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold font-serif text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Travel Tips & Practical Info */}
        <div className="bg-brand-dark text-white rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center">Essential Travel Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:bg-white/20 transition-colors">
                <FaCalendarAlt className="text-brand-secondary text-4xl mb-4" />
                <h4 className="text-xl font-bold mb-2">Best Time to Visit</h4>
                <p className="text-gray-300 text-sm">{destination.tips.bestTime}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:bg-white/20 transition-colors">
                <FaMoneyBillWave className="text-brand-primary text-4xl mb-4" />
                <h4 className="text-xl font-bold mb-2">Currency</h4>
                <p className="text-gray-300 text-sm">{destination.tips.currency}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:bg-white/20 transition-colors">
                <FaLanguage className="text-brand-secondary text-4xl mb-4" />
                <h4 className="text-xl font-bold mb-2">Language</h4>
                <p className="text-gray-300 text-sm">{destination.tips.language}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:bg-white/20 transition-colors">
                <FaBus className="text-brand-primary text-4xl mb-4" />
                <h4 className="text-xl font-bold mb-2">Transportation</h4>
                <p className="text-gray-300 text-sm">{destination.tips.transport}</p>
              </div>

            </div>
          </div>
        </div>

        {/* 5. Call To Action */}
        <div className="text-center bg-brand-light p-12 md:p-20 rounded-[40px] border-2 border-brand-primary/20 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Ready to explore {destination.name}?</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            We have carefully curated tour packages that will show you the very best of {destination.name}. Let us handle the details while you enjoy the journey.
          </p>
          <Link to="/allPackages" className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            View Tour Packages
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Destination;
