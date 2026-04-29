import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useBooking from "../../../hooks/useBooking";
import usePackage from "../../../hooks/usePackage";
import { Link } from "react-router-dom";
import { FaSuitcase, FaHeart, FaPlaneDeparture, FaStar, FaUsers, FaChartLine, FaArrowRight } from "react-icons/fa";

const Statistics = () => {
    const { user } = useAuth();
    const [role, isRoleLoading] = useRole();
    const { booking, isLoading: isBookingLoading } = useBooking();
    const [packages, isPackagesLoading] = usePackage();

    if (isRoleLoading || isBookingLoading || isPackagesLoading) {
        return (
            <div className="flex justify-center items-center h-full min-h-[60vh]">
                <span className="loading loading-spinner text-brand-primary loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Shadow Tourist || Dashboard Overview</title>
            </Helmet>

            {/* Greeting Section */}
            <div className="bg-gradient-to-r from-brand-primary to-[#4A8B33] rounded-[30px] p-8 md:p-12 mb-10 shadow-xl relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                            Welcome back, <span className="text-brand-secondary">{user?.displayName?.split(" ")[0] || 'Explorer'}</span>!
                        </h1>
                        <p className="text-white/80 text-lg font-medium">
                            {role === 'tourist' && "Ready for your next great adventure?"}
                            {role === 'admin' && "Here's an overview of your platform today."}
                            {role === 'guide' && "Here are your upcoming assigned tours."}
                        </p>
                    </div>
                    {role === 'tourist' && (
                        <Link to="/allPackages" className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-secondary hover:text-white transition-all duration-300 flex items-center gap-2 group">
                            Explore Tours <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {role === 'tourist' ? (
                    <>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl">
                                <FaSuitcase />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">My Bookings</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">{booking?.length || 0}</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-2xl">
                                <FaHeart />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Wishlist</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">0</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center text-2xl">
                                <FaPlaneDeparture />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Available Tours</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">{packages?.length || 0}</h3>
                            </div>
                        </div>
                    </>
                ) : role === 'admin' ? (
                    <>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center text-2xl">
                                <FaChartLine />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Total Bookings</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">24</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center text-2xl">
                                <FaUsers />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Tour Guides</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">12</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center text-2xl">
                                <FaPlaneDeparture />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Packages</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">{packages?.length || 0}</h3>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                         <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl">
                                <FaSuitcase />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Assigned Tours</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">5</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center text-2xl">
                                <FaStar />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">My Reviews</p>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">18</h3>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Recent Activity / Popular Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-serif font-bold text-brand-dark">Recent Activity</h2>
                        {role === 'tourist' && <Link to="/dashboard/my-booking" className="text-brand-primary font-bold hover:underline">View All</Link>}
                    </div>
                    
                    {role === 'tourist' ? (
                        <div className="space-y-4">
                            {booking && booking.length > 0 ? (
                                booking.slice(0, 3).map((b, index) => (
                                    <div key={b._id || index} className="flex items-center justify-between p-4 bg-brand-light rounded-2xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                                <FaPlaneDeparture />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-dark">{b.packageName || 'Adventure Tour'}</h4>
                                                <p className="text-sm text-gray-500">{b.date || 'Upcoming'}</p>
                                            </div>
                                        </div>
                                        <span className={`px-4 py-1 rounded-full text-xs font-bold ${b.status === 'In Review' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                            {b.status || 'Confirmed'}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10 bg-brand-light rounded-2xl">
                                    <p className="text-gray-500 font-medium">You haven't booked any tours yet.</p>
                                    <Link to="/allPackages" className="inline-block mt-4 btn-primary py-2 px-6">Find a Tour</Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-brand-light rounded-2xl border border-dashed border-gray-300">
                            <p className="text-gray-500 font-medium">Recent activity overview will appear here.</p>
                        </div>
                    )}
                </div>

                {/* Popular Destinations / Recommendations */}
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-serif font-bold text-brand-dark mb-6">Explore Packages</h2>
                    <div className="space-y-4">
                        {packages && packages.slice(0, 4).map(pkg => (
                            <Link to={`/package-details/${pkg._id}`} key={pkg._id} className="flex items-center gap-4 group">
                                <img src={pkg.image} alt={pkg.tripTitle} className="w-16 h-16 rounded-xl object-cover" />
                                <div>
                                    <h4 className="font-bold text-brand-dark text-sm group-hover:text-brand-primary transition-colors line-clamp-1">{pkg.tripTitle}</h4>
                                    <p className="text-brand-secondary text-sm font-bold">${pkg.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;