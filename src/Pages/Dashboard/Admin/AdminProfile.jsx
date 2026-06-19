import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {  
    const {user} = useAuth();
    return (
        <div className="max-w-3xl mx-auto w-full">
            <Helmet>
                <title>Shadow Tourist || Admin Profile</title>
            </Helmet>
            
            <div className="mb-8 text-center md:text-left">
                <h1 className="text-3xl font-serif font-bold text-brand-dark">Admin Profile</h1>
                <p className="text-gray-500 mt-2">Manage your platform identity and settings.</p>
            </div>

            <div className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-100">
                <div className="h-40 bg-brand-dark w-full relative">
                    <img 
                        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Cover" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                </div>
                
                <div className="px-6 pb-8 relative">
                    <div className="flex justify-center -mt-16 mb-4">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white relative z-10">
                            <img
                                alt="profile"
                                src={user?.photoURL || "https://ui-avatars.com/api/?name=User&background=random"}
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random` }}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center mb-6 mt-2">
                        <span className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold text-xs tracking-widest uppercase rounded-full">
                            Admin
                        </span>
                        <h2 className="mt-4 text-2xl font-serif font-bold text-brand-dark">{user?.displayName}</h2>
                        <p className="text-gray-500 font-medium text-sm mt-1">{user?.email}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-5 mt-5">
                        <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-1 text-center">User ID</p>
                        <p className="text-sm font-mono text-gray-500 truncate bg-gray-50 p-2 rounded-lg text-center max-w-xs mx-auto">{user?.uid}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
