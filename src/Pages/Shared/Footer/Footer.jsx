import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Array of gallery images for the Instagram section
    const galleryImages = [
        "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    ];

    return (
        <div className="bg-[#145d5e] text-white relative overflow-hidden pt-20 pb-8 mt-10">
            {/* Background Illustration Overlay */}
            <div 
                className="absolute inset-0 opacity-40 pointer-events-none bg-bottom bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/footer-image.png')" }}
            ></div>
            
            <div className="container mx-auto px-5 lg:px-10 relative z-10">
                
                {/* Top Links & Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
                    
                    {/* Brand Info (Col span 3) */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img className="w-10" src="/logo.png" alt="Shadow Tourist Logo" />
                            <span className="font-serif text-4xl font-extrabold tracking-wider text-brand-primary">Shadow<span className="text-white">.</span></span>
                        </Link>
                        <p className="text-sm text-gray-200 leading-relaxed mb-8 pr-4">
                            Shadow Tourist is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-brand-secondary flex items-center justify-center text-white hover:bg-brand-secondary hover:text-white transition-all duration-300">
                                <FaFacebookF size={14} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-brand-secondary flex items-center justify-center text-white hover:bg-brand-secondary hover:text-white transition-all duration-300">
                                <IoLogoTwitter size={14} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-brand-secondary flex items-center justify-center text-white hover:bg-brand-secondary hover:text-white transition-all duration-300">
                                <FaInstagram size={14} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-brand-secondary flex items-center justify-center text-white hover:bg-brand-secondary hover:text-white transition-all duration-300">
                                <FaPinterestP size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns (Col span 5 total) */}
                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Explore</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">About us</Link></li>
                                <li><Link to="/faq" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">FAQ's</Link></li>
                                <li><Link to="/services" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Services</Link></li>
                                <li><Link to="/team" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Team</Link></li>
                                <li><Link to="/blogs" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">News & Articles</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Destinations</h4>
                            <ul className="space-y-4">
                                <li><Link to="/allPackages" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Tokyo</Link></li>
                                <li><Link to="/allPackages" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">France</Link></li>
                                <li><Link to="/allPackages" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Dubai</Link></li>
                                <li><Link to="/allPackages" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Kenya</Link></li>
                                <li><Link to="/allPackages" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Vietnam</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
                            <ul className="space-y-4">
                                <li><Link to="/terms" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Terms & Condition</Link></li>
                                <li><Link to="/privacy" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Privacy Policy</Link></li>
                                <li><Link to="/contact" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Contact</Link></li>
                                <li><Link to="/careers" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Careers</Link></li>
                                <li><Link to="/help" className="text-gray-200 hover:text-brand-secondary transition-colors text-sm font-medium">Help</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info (Col span 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-sm backdrop-blur-sm">
                                <FaPhoneAlt />
                            </div>
                            <p className="text-2xl font-serif font-bold text-brand-secondary italic">123 654 0214</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-sm backdrop-blur-sm">
                                <FaEnvelope />
                            </div>
                            <p className="text-sm font-medium text-white">info@shadowtourist.com</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-sm backdrop-blur-sm">
                                <FaHome size={18} />
                            </div>
                            <p className="text-sm font-medium text-white pt-2 leading-relaxed">
                                55/11 ronin tower New York
                            </p>
                        </div>
                    </div>
                </div>

                {/* Instagram Gallery Section */}
                <div className="flex flex-col lg:flex-row items-center gap-6 mb-16">
                    <h3 className="text-xl font-bold text-white whitespace-nowrap">Follow Instagram</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-[20px] aspect-square shadow-lg border-2 border-transparent hover:border-brand-secondary transition-colors">
                                <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <FaInstagram className="text-white text-2xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        © {new Date().getFullYear()} <span className="text-brand-secondary">SHADOW TOURIST</span> All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;