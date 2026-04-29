import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaCalendarAlt, FaUser, FaComments, FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaSearch, FaCheckCircle, FaChevronRight } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  
  const { data: allBlogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs`);
      return res.data;
    },
  });

  const blog = allBlogs.find(b => b._id === id) || {};
  const recentBlogs = allBlogs.filter(b => b._id !== id).slice(0, 3);

  if (isLoading) return <Loader />;

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light pb-24">
      <Helmet>
        <title>Shadow Tourist || {blog?.title || "Blog Details"}</title>
      </Helmet>

      {/* Hero Header Banner */}
      <div 
        className="relative bg-cover bg-center h-[350px] flex flex-col items-center justify-center mt-16"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-brand-dark mb-4 drop-shadow-md">Blog Detail</h1>
          <div className="flex items-center justify-center space-x-2 text-sm font-bold tracking-widest uppercase text-brand-dark">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="text-brand-primary">-</span>
            <span className="text-brand-primary">Blog Detail</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Area (Left Column) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[30px] p-6 md:p-10 shadow-sm border border-gray-100">
              
              {/* Featured Image */}
              <div className="w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden mb-8 shadow-md">
                <img 
                  src={blog?.img || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"} 
                  alt={blog?.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-100 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                  <FaUser className="text-brand-primary" />
                  <span>By <span className="font-bold text-brand-dark">Admin</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-brand-secondary" />
                  <span>{blog?.date || "October 20, 2024"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments className="text-brand-primary" />
                  <span>2 Comments</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                {blog?.title || "Tour guide who gives you proper information about every destination"}
              </h2>

              {/* Body Content */}
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p className="whitespace-pre-wrap">{blog?.blog}</p>
                
                {/* Blockquote feature (Static for visual immersion) */}
                <div className="bg-brand-primary/5 rounded-[20px] p-8 md:p-10 relative mt-8 mb-8 border-l-4 border-brand-primary">
                  <FaQuoteLeft className="absolute top-6 left-6 text-brand-primary/20 text-6xl" />
                  <p className="relative z-10 text-xl font-serif italic font-medium text-brand-dark leading-relaxed pl-8">
                    "It is necessary for there to be adventure. You cannot explore the globe via a screen! We will equip you with travel ideas and the people there are glad. However, there are things to consider when you travel towards the same recommendations."
                  </p>
                  <p className="relative z-10 font-bold text-brand-secondary mt-4 pl-8 tracking-widest uppercase text-xs">— Lucy Walker</p>
                </div>

                <p>
                  Exploring the world requires preparation and a deep understanding of the cultures you are visiting. The most seasoned travelers know that stepping off the beaten path is where the true magic lies. Below are some essential precautions to take while traveling internationally to ensure your safety and enjoyment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Travel 1" className="rounded-2xl h-64 w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Travel 2" className="rounded-2xl h-64 w-full object-cover" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">What precautions should we take while traveling?</h3>
                <ul className="space-y-3 mt-4">
                  {[
                    "Always carry a local map and a compass.",
                    "Keep your travel documents secure.",
                    "Stay hydrated and eat safely.",
                    "Download offline maps and translation apps."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <FaCheckCircle className="text-brand-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Tags & Share */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-brand-dark mr-2">Tags:</span>
                  {["Travel", "Tour", "Guide"].map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-full hover:bg-brand-primary hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-brand-dark mr-2">Share:</span>
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map((Icon, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-colors cursor-pointer">
                      <Icon size={14} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Post Navigation */}
            <div className="flex justify-between items-center mt-10 bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col">
                    <span className="text-xs text-brand-secondary font-bold tracking-widest uppercase mb-1">Previous Post</span>
                    <a href="#" className="font-serif font-bold text-brand-dark hover:text-brand-primary transition-colors text-sm md:text-base line-clamp-1">Discovering the hidden gems of Europe</a>
                </div>
                <div className="w-[1px] h-12 bg-gray-200 mx-4 hidden md:block"></div>
                <div className="flex flex-col text-right">
                    <span className="text-xs text-brand-primary font-bold tracking-widest uppercase mb-1">Next Post</span>
                    <a href="#" className="font-serif font-bold text-brand-dark hover:text-brand-primary transition-colors text-sm md:text-base line-clamp-1">A comprehensive guide to backpacking</a>
                </div>
            </div>

            {/* Customer Reviews (Static) */}
            <div className="mt-10">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 flex items-center border-l-4 border-brand-primary pl-4">Customer Reviews</h3>
              <div className="space-y-6">
                
                {/* Review 1 */}
                <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100 flex gap-4">
                  <img src="https://i.ibb.co/v3n5428/placeholder-avatar.jpg" alt="User" className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-brand-dark font-serif">Stephen</h4>
                        <p className="text-xs text-gray-400">22 Jan 2024</p>
                      </div>
                      <button className="text-xs font-bold px-4 py-1.5 rounded-full bg-brand-primary text-white hover:bg-brand-dark transition-colors">Reply</button>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Absolutely stunning article! The imagery and the detailed guides are perfectly written. I will definitely use this as a reference for my next trip. Thank you so much!</p>
                  </div>
                </div>

                {/* Review 2 (Reply) */}
                <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100 flex gap-4 ml-10 border-l-4 border-l-brand-secondary">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-14 h-14 rounded-full object-cover border-2 border-brand-secondary" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-brand-dark font-serif">George</h4>
                        <p className="text-xs text-gray-400">23 Jan 2024</p>
                      </div>
                      <button className="text-xs font-bold px-4 py-1.5 rounded-full bg-brand-primary text-white hover:bg-brand-dark transition-colors">Reply</button>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">I completely agree! The level of detail here is unmatched. It really makes you feel like you are already there.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Leave a Reply Form */}
            <div className="mt-10 bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">Comment <span className="text-brand-primary">Section</span></h3>
                <p className="text-gray-500 text-sm mb-8">Write a reply. Your email address will not be published.</p>

                <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-sm" />
                        <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-sm" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-sm" />
                    <textarea placeholder="Write Comment" rows="5" className="w-full px-6 py-4 rounded-[20px] border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-sm resize-none"></textarea>
                    
                    <button type="submit" className="px-8 py-4 bg-brand-primary text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/30">
                        Send Message
                    </button>
                </form>
            </div>

          </div>

          {/* Sidebar Area (Right Column) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white rounded-full p-2 shadow-sm border border-gray-100 flex items-center">
                <input type="text" placeholder="Search..." className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-gray-700" />
                <button className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                    <FaSearch size={14} />
                </button>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-3 bg-gray-50 py-2">Recent Posts</h3>
                <div className="space-y-4">
                    {recentBlogs.map((b) => (
                        <div key={b._id} className="flex gap-4 items-center group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                            <div className="w-20 h-20 rounded-[15px] overflow-hidden flex-shrink-0">
                                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <p className="text-xs text-brand-secondary font-bold mb-1 flex items-center gap-1"><FaCalendarAlt /> {b.date || "Oct 20, 2024"}</p>
                                <h4 className="font-serif font-bold text-brand-dark text-sm leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">{b.title}</h4>
                            </div>
                        </div>
                    ))}
                    {recentBlogs.length === 0 && <p className="text-gray-500 text-sm">No recent posts found.</p>}
                </div>
            </div>

            {/* Top Destinations */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-3 bg-gray-50 py-2">Top Destinations</h3>
                <ul className="space-y-3">
                    {[
                        { name: "Thailand", count: "145 Listings" },
                        { name: "Maldives", count: "127 Listings" },
                        { name: "Senegal", count: "115 Listings" },
                        { name: "Paris", count: "109 Listings" },
                    ].map((dest, i) => (
                        <li key={i} className="flex items-center justify-between text-sm group cursor-pointer">
                            <span className="text-gray-600 font-medium group-hover:text-brand-primary transition-colors flex items-center gap-2">
                                <FaChevronRight className="text-gray-300 text-[10px] group-hover:text-brand-primary" /> {dest.name}
                            </span>
                            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{dest.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-3 bg-gray-50 py-2">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {["Travel", "Tour", "Guide", "Nature", "Explore", "Adventure", "Safari", "Beach"].map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-brand-primary/5 text-gray-600 text-xs font-bold rounded-full hover:bg-brand-primary hover:text-white transition-colors cursor-pointer border border-brand-primary/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-3 bg-gray-50 py-2">Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                    {[
                        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                    ].map((img, i) => (
                        <div key={i} className="w-full h-20 rounded-[10px] overflow-hidden cursor-pointer group">
                            <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
