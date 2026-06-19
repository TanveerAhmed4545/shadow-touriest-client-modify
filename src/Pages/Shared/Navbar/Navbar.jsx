import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import demoUserPic from "../../../assets/demoUser.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import SearchOverlay from "../../../components/Shared/SearchOverlay";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-brand-secondary font-medium transition-colors duration-300"
      : "text-white font-medium hover:text-brand-secondary transition-colors duration-300";

  const links = (
    <>
      <li><NavLink to='/' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
      <li><NavLink to='/blogs' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Blogs</NavLink></li>
      <li><NavLink to='/about' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink></li>
      <li><NavLink to='/contact' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink></li>
      <li><NavLink to='/community' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Community</NavLink></li>
      {!user && (
        <>
          <li><NavLink to='/login' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink></li>
          <li><NavLink to='/register' className={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Register</NavLink></li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success('Logout Completed');
      })
      .catch(() => {
        toast.warn("Error");
      });
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Navbar Container */}
      <div className={`rounded-b-[40px] px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-brand-dark shadow-xl' : 'bg-transparent'}`}>
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to='/' className='flex items-center gap-3 hover:scale-105 transition-transform duration-300'>
            <img className='w-auto h-10' src="/logo.png" alt="Logo" />
            <span className="font-serif text-2xl font-extrabold tracking-wide text-white">Shadow Tourist</span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <ul className="flex items-center gap-8 text-lg">
            {links}
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-5">
          
          {/* Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-white hover:text-brand-secondary transition-colors duration-300 p-2 block cursor-pointer"
          >
            <FaSearch size={20} />
          </button>

          {/* User Auth Dropdown */}
          {user && (
            <div className="dropdown dropdown-end hidden sm:block">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-transparent hover:border-brand-secondary transition-colors duration-300">
                <div className="w-10 rounded-full">
                  <img alt="User avatar" src={user?.photoURL || demoUserPic} onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random` }} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white rounded-2xl w-52 text-brand-dark">
                <li className="font-semibold px-4 py-2 border-b border-gray-100">{user?.displayName}</li>
                <li className="text-xs text-gray-500 px-4 py-1 pb-2">{user?.email}</li>
                <Link to={'/dashboard'}>
                  <li><p className="hover:text-brand-secondary hover:bg-gray-50 font-medium">Dashboard</p></li>
                </Link>
                <li><button className="text-red-500 hover:bg-red-50 hover:text-red-600 font-medium mt-1" onClick={handleSignOut}>Logout</button></li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden bg-white/10 p-3 rounded-xl text-white hover:bg-brand-secondary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-[90px] left-4 right-4 bg-brand-dark rounded-[30px] p-8 shadow-2xl lg:hidden transform transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col gap-6 text-center text-lg">
          {links}
          {user && (
            <>
              <li className="border-t border-white/10 pt-4"><Link to={'/dashboard'} className="text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link></li>
              <li><button className="text-brand-secondary font-bold" onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }}>Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;