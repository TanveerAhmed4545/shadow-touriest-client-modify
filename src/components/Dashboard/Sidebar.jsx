import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import MenuItem from "./Menu/MenuItem";
import TouristMenu from "./Menu/TouristMenu";
import AdminMenu from "./Menu/AdminMenu";
import GuideMenu from "./Menu/GuideMenu";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#1E1E2D] text-white flex justify-between md:hidden shadow-md fixed w-full z-50 top-0 border-b border-gray-800">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/" className="flex items-center gap-3">
              <img
                className="w-10 rounded-md"
                src="/logo.png"
                alt="logo"
              />
              <span className="font-serif tracking-wider text-xl font-bold">Shadow</span>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none hover:bg-gray-800 transition-colors"
        >
          <AiOutlineBars className="h-6 w-6 text-brand-primary" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-40 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#1E1E2D] w-[280px] space-y-6 px-6 py-8 absolute inset-y-0 left-0 transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl border-r border-gray-800 h-screen mt-[72px] md:mt-0`}
      >
        <div>
          <div className="w-full hidden md:flex px-2 py-2 justify-start items-center mx-auto mb-8">
            <Link to="/" className="flex items-center gap-4 hover:scale-105 transition-transform">
              <img
                className="w-12 h-12 rounded-xl shadow-lg drop-shadow-md border border-white/10"
                src="/logo.png"
                alt="logo"
              />
              <span className="font-serif text-white font-bold tracking-wide text-xl leading-tight">Shadow<br/><span className="text-brand-primary text-sm font-sans tracking-normal">Tourist</span></span>
            </Link>
          </div>

          <div className="w-full h-px bg-gray-800 mb-8 hidden md:block"></div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 text-gray-400">
            <nav className="space-y-1">
              <MenuItem label={'Dashboard Home'} address={'/dashboard'} icon={FaHome}></MenuItem>
              
              {role === 'tourist' && <TouristMenu></TouristMenu>}
              {role === 'guide' && <GuideMenu></GuideMenu>}
              {role === 'admin' && <AdminMenu></AdminMenu>}
            </nav>
          </div>
        </div>

        <div>
          <div className="w-full h-px bg-gray-800 mb-6"></div>

          <button
            onClick={() => logOut(navigate("/"))}
            className="flex w-full items-center px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all duration-300 transform group"
          >
            <GrLogout className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            <span className="mx-4 font-medium tracking-wide">Logout</span>
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isActive && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm mt-[72px]"
          onClick={handleToggle}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
