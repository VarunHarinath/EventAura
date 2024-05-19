import { useState } from "react";
import logo from "../../assets/navLogo.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";

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
            <span className="text-xl tracking-tight ml-2 text-white font-semibold">
              Tesract
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="list-none">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </div>

          {/* Host Your Event Button */}
          <div className="hidden lg:flex">
            <a
              href=""
              className="py-2 px-3 rounded-md bg-indigo-600 text-white hover:scale-105"
            >
              Host Your event
            </a>
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
        <div className="absolute top-14 inset-x-0 z-40 bg-black bg-opacity-75 flex justify-center lg:hidden">
          <div className="bg-neutral-900 w-full max-w-sm p-8 rounded-lg">
            <ul className="space-y-6 text-center text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a
                  href=""
                  className="py-2 px-3 rounded-md bg-indigo-600 text-white   hover:scale-105"
                >
                  Host Your event
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
