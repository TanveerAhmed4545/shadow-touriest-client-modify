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
      <div className="bg-white text-brand-dark flex justify-between md:hidden shadow-md fixed w-full z-50 top-0 border-b border-gray-200">
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
        className={`z-40 md:fixed flex flex-col justify-between overflow-x-hidden bg-brand-dark w-[280px] space-y-6 px-6 py-10 absolute inset-y-0 left-0 transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl h-screen mt-[72px] md:mt-0`}
      >
        <div>
          <div className="w-full hidden md:flex px-2 py-2 justify-start items-center mx-auto mb-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-brand-primary transition-colors duration-500">
                <img
                  className="w-8 h-8 object-contain"
                  src="/logo.png"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-white font-bold tracking-widest text-xl leading-none">SHADOW</span>
                <span className="text-brand-secondary text-[10px] tracking-[0.2em] font-bold uppercase">Tourist</span>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1">
            <nav className="space-y-2">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] px-4 mb-4">Main Menu</div>
              <MenuItem label={'Dashboard Home'} address={'/dashboard'} icon={FaHome}></MenuItem>
              
              <div className="pt-4 space-y-2">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] px-4 mb-4">Account Role: {role}</div>
                {role === 'tourist' && <TouristMenu></TouristMenu>}
                {role === 'guide' && <GuideMenu></GuideMenu>}
                {role === 'admin' && <AdminMenu></AdminMenu>}
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-8">
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Need help?</p>
            <Link to="/contact" className="text-white text-xs font-bold hover:text-brand-secondary transition-colors underline decoration-brand-secondary/40 underline-offset-4">Contact Support</Link>
          </div>

          <button
            onClick={() => logOut(navigate("/"))}
            className="flex w-full items-center px-4 py-4 text-white/60 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-500 transform group active:scale-95"
          >
            <GrLogout className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="mx-4 font-bold text-sm tracking-widest uppercase">Logout</span>
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isActive && (
        <div 
          className="fixed inset-0 bg-brand-dark/80 z-30 md:hidden backdrop-blur-md mt-[72px]"
          onClick={handleToggle}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
