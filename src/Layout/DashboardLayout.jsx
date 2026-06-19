import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
    const { user } = useAuth();
    return (
        <div className="relative min-h-screen bg-[#F8FAFC] md:flex text-brand-dark font-sans pt-[72px] md:pt-0">
            {/* sidebar */}
            <Sidebar></Sidebar>
          
            {/* outlet */}
          <div className="flex-1 md:ml-[280px] transition-all duration-300">
            {/* Top Header / Nav */}
            <div className="hidden md:flex h-[80px] bg-white/80 backdrop-blur-md items-center justify-between px-10 border-b border-gray-100 sticky top-0 z-30">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-brand-dark font-serif leading-none mb-1">Welcome back,</h1>
                  <p className="text-gray-400 text-sm font-medium">{user?.displayName || 'Traveler'}</p>
                </div>
                <div className="flex items-center gap-6">
                  <button className="relative p-2 text-gray-400 hover:text-brand-primary transition-colors">
                    <span className="absolute top-2 right-2 w-2 h-2 bg-brand-secondary rounded-full border-2 border-white"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-secondary p-[2px] shadow-lg overflow-hidden transform hover:rotate-3 transition-transform cursor-pointer">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden">
                      {user?.photoURL ? (
                          <img src={user.photoURL} alt="User" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random` }} />
                      ) : (
                          <span className="font-bold text-brand-primary">{user?.displayName?.charAt(0) || "U"}</span>
                      )}
                    </div>
                  </div>
                </div>
            </div>

            <div className="p-8 md:p-12 max-w-7xl mx-auto">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
    );
};

export default DashboardLayout;