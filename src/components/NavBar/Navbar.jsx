import { useState } from "react";
import logo from "../../assets/navLogo.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-8" src={logo} alt="Logo" />
            <RouterLink
              to="/"
              className="text-xl tracking-tight ml-2 text-white font-semibold"
            >
              EventAura
            </RouterLink>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="list-none">
                <RouterLink to={item.href} className="cursor-pointer">
                  {item.label}
                </RouterLink>
              </li>
            ))}
          </div>

          {/* Host Your Event Button */}
          <div className="hidden lg:flex">
            <RouterLink
              to="/secure/v3/Event-On-Boadring"
              className="py-2 px-3 rounded-md bg-indigo-600 text-white hover:scale-105"
            >
              Host Your event
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-x-0 z-40 flex justify-center items-center  bg-opacity-50 lg:hidden">
          <div className="bg-neutral-900 w-full max-w-md p-8 rounded-lg">
            <ul className="space-y-6 text-center text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <RouterLink
                    to={item.href}
                    onClick={toggleNavbar}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </RouterLink>
                </li>
              ))}
              <li>
                <RouterLink
                  to="/secure/v3/Event-On-Boadring"
                  className="py-2 px-3 rounded-md bg-indigo-600 text-white hover:scale-105"
                >
                  Host Your event
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
