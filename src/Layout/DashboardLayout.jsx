import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
    const { user } = useAuth();
    return (
        <div className="relative min-h-screen bg-brand-light md:flex text-brand-dark font-sans pt-[72px] md:pt-0">
            {/* sidebar */}
            <Sidebar></Sidebar>
          
            {/* outlet */}
          <div className="flex-1 md:ml-[280px] transition-all duration-300">
            {/* Top Header / Nav */}
            <div className="hidden md:flex h-[80px] bg-white items-center justify-between px-8 border-b border-gray-200 shadow-sm sticky top-0 z-30">
                <div className="text-xl font-bold text-brand-dark font-serif">Dashboard Overview</div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary shadow-inner border border-brand-primary/30 overflow-hidden">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                    ) : (
                        <span className="font-bold">{user?.displayName?.charAt(0) || "U"}</span>
                    )}
                  </div>
                </div>
            </div>

            <div className="p-6 md:p-10">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
    );
};

export default DashboardLayout;