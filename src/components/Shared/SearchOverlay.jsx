import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaSuitcase, FaUserTie, FaBookOpen, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [allData, setAllData] = useState({ packages: [], guides: [], stories: [] });
    const [results, setResults] = useState({ packages: [], guides: [], stories: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const axiosPublic = useAxiosPublic();

    // Fetch all data once when the component mounts or when opened
    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            try {
                const [pkgRes, guideRes, storyRes] = await Promise.all([
                    axiosPublic.get('/package'),
                    axiosPublic.get('/guides'),
                    axiosPublic.get('/story')
                ]);
                setAllData({
                    packages: pkgRes.data,
                    guides: guideRes.data,
                    stories: storyRes.data
                });
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to sync search data. Check your connection.");
            } finally {
                setLoading(false);
            }
        };

        if (isOpen && allData.packages.length === 0) {
            fetchAllData();
        }
    }, [isOpen, axiosPublic, allData.packages.length]);

    // Local filtering
    useEffect(() => {
        if (query.length < 2) {
            setResults({ packages: [], guides: [], stories: [] });
            return;
        }

        const q = query.toLowerCase();
        
        const filteredPackages = allData.packages.filter(p => 
            p.tripTitle?.toLowerCase().includes(q) || 
            p.tourType?.toLowerCase().includes(q) ||
            p.description?.toLowerCase().includes(q)
        ).slice(0, 5);

        const filteredGuides = allData.guides.filter(g => 
            g.name?.toLowerCase().includes(q) || 
            g.specialization?.toLowerCase().includes(q)
        ).slice(0, 5);

        const filteredStories = allData.stories.filter(s => 
            s.title?.toLowerCase().includes(q) || 
            s.description?.toLowerCase().includes(q)
        ).slice(0, 5);

        setResults({
            packages: filteredPackages,
            guides: filteredGuides,
            stories: filteredStories
        });
    }, [query, allData]);

    // Handle Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl p-6 md:p-20 overflow-y-auto"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
                    >
                        <FaTimes size={32} />
                    </button>

                    <div className="max-w-4xl mx-auto mt-20">
                        {/* Search Input */}
                        <div className="relative mb-12">
                            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-secondary text-3xl" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search tours, guides, or stories..."
                                className="w-full bg-white/10 border-b-2 border-white/20 py-8 pl-20 pr-8 text-3xl md:text-5xl text-white font-serif focus:outline-none focus:border-brand-secondary transition-colors placeholder:text-white/20"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {loading && (
                                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-secondary"></div>
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20 mb-8 text-center">
                                {error}
                            </div>
                        )}

                        {/* Results Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Packages */}
                            <div className="space-y-6">
                                <h3 className="text-brand-secondary uppercase tracking-[0.3em] font-bold text-xs flex items-center gap-2">
                                    <FaSuitcase /> Packages
                                </h3>
                                <div className="space-y-4">
                                    {results.packages.length > 0 ? results.packages.map(pkg => (
                                        <Link 
                                            key={pkg._id} 
                                            to={`/package-details/${pkg._id}`} 
                                            onClick={onClose}
                                            className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 group transition-all"
                                        >
                                            <h4 className="text-white font-bold mb-1 group-hover:text-brand-secondary transition-colors">{pkg.tripTitle}</h4>
                                            <p className="text-white/40 text-xs line-clamp-1">{pkg.tourType}</p>
                                        </Link>
                                    )) : <p className="text-white/20 text-sm">No packages found</p>}
                                </div>
                            </div>

                            {/* Guides */}
                            <div className="space-y-6">
                                <h3 className="text-brand-secondary uppercase tracking-[0.3em] font-bold text-xs flex items-center gap-2">
                                    <FaUserTie /> Guides
                                </h3>
                                <div className="space-y-4">
                                    {results.guides.length > 0 ? results.guides.map(guide => (
                                        <Link 
                                            key={guide._id} 
                                            to={`/guide-Profile/${guide._id}`} 
                                            onClick={onClose}
                                            className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 group transition-all"
                                        >
                                            <h4 className="text-white font-bold mb-1 group-hover:text-brand-secondary transition-colors">{guide.name}</h4>
                                            <p className="text-white/40 text-xs">{guide.specialization}</p>
                                        </Link>
                                    )) : <p className="text-white/20 text-sm">No guides found</p>}
                                </div>
                            </div>

                            {/* Stories */}
                            <div className="space-y-6">
                                <h3 className="text-brand-secondary uppercase tracking-[0.3em] font-bold text-xs flex items-center gap-2">
                                    <FaBookOpen /> Stories
                                </h3>
                                <div className="space-y-4">
                                    {results.stories.length > 0 ? results.stories.map(story => (
                                        <Link 
                                            key={story._id} 
                                            to={`/storyDetails/${story._id}`} 
                                            onClick={onClose}
                                            className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 group transition-all"
                                        >
                                            <h4 className="text-white font-bold mb-1 group-hover:text-brand-secondary transition-colors">{story.title}</h4>
                                            <p className="text-white/40 text-xs line-clamp-1">{story.description}</p>
                                        </Link>
                                    )) : <p className="text-white/20 text-sm">No stories found</p>}
                                </div>
                            </div>
                        </div>

                        {/* View All */}
                        {query.length > 1 && (
                            <div className="mt-16 text-center">
                                <Link 
                                    to="/allPackages" 
                                    onClick={onClose}
                                    className="inline-flex items-center gap-3 text-white/50 hover:text-brand-secondary transition-all uppercase tracking-widest text-sm font-bold"
                                >
                                    View All Destinations <FaArrowRight />
                                </Link>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
