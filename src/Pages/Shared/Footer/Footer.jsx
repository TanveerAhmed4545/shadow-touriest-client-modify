import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Array of gallery images for the bottom strip
    const galleryImages = [
        "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1542051812-bf2f9f514b87?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    ];

    return (
        <div className="bg-[#1A3C40] text-white overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <img className="w-10" src="/logo.png" alt="Shadow Tourist Logo" />
                            <span className="font-serif text-3xl font-extrabold tracking-wider text-white">Shadow<span className="text-brand-primary">.</span></span>
                        </Link>
                        <p className="font-light text-gray-300 text-sm leading-relaxed max-w-xs">
                            Discover the most beautiful destinations and experience unforgettable adventures with our expert guides around the globe.
                        </p>
                        <div className="flex gap-3 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-secondary hover:-translate-y-1 transition-all duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-secondary hover:-translate-y-1 transition-all duration-300">
                                <IoLogoTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-secondary hover:-translate-y-1 transition-all duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-secondary hover:-translate-y-1 transition-all duration-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* About Column */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-white border-l-4 border-brand-primary pl-3">About</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Contact Us</Link></li>
                            <li><Link to="/" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Terms & Conditions</Link></li>
                            <li><Link to="/" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Our Tours Column */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-white border-l-4 border-brand-primary pl-3">Our Tours</h4>
                        <ul className="space-y-4">
                            <li><Link to="/allPackages" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Mountain Treks</Link></li>
                            <li><Link to="/allPackages" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Jungle Safaris</Link></li>
                            <li><Link to="/allPackages" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Desert Camps</Link></li>
                            <li><Link to="/allPackages" className="text-gray-300 hover:text-brand-primary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">➤</span> Ocean Kayaking</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-white border-l-4 border-brand-primary pl-3">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0 hover:bg-brand-primary hover:text-white transition-colors cursor-pointer">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Phone</p>
                                    <p className="text-sm font-medium">+00 012 345 6789</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0 hover:bg-brand-primary hover:text-white transition-colors cursor-pointer">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Email</p>
                                    <p className="text-sm font-medium">info@shadowtourist.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0 hover:bg-brand-primary hover:text-white transition-colors cursor-pointer">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-medium">123 Adventure Lane,<br />NY 10001</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Shadow Tourist. All Rights Reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link to="/" className="hover:text-white transition-colors">Support</Link>
                        <span>|</span>
                        <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
                        <span>|</span>
                        <Link to="/" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>

            {/* Gallery Strip Bottom */}
            <div className="w-full flex h-24 md:h-32">
                {galleryImages.map((src, idx) => (
                    <div key={idx} className={`flex-1 h-full relative group cursor-pointer overflow-hidden ${idx >= 4 ? 'hidden md:block' : ''}`}>
                        <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <FaInstagram className="text-white text-2xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;