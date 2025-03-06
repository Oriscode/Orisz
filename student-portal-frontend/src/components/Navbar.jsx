import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo or Brand Name */}
            <Link to="/" className="text-xl font-bold">
              Orisz Group
            </Link>

            {/* Navigation Links for Medium and Larger Screens */}
            <div className="hidden md:flex space-x-4">
              <Link 
                to="/about" 
                className={`hover:underline ${location.pathname ==="/about" ? "font-bold" : ""}`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`hover:underline ${location.pathname ==="/services" ? "font-bold" : ""}`}
              >
                Services
              </Link>
              <Link 
                to="/contact"
                className={`hover:underline ${location.pathname ==="/contact" ? "font-bold" : ""}`}
              >
                Contact
              </Link>
              <Link 
                to="/blog"
                className={`hover:underline ${location.pathname ==="/blog" ? "font-bold" : ""}`}
              >
                Blog
              </Link>
              <Link 
                to="/login"
                className={`hover:underline ${location.pathname ==="/login" ? "font-bold" : ""}`}
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              className={`${ 
                isMenuOpen ? "block" : "hidden" 
              } md:hidden absolute top-14 left-0 bg-blue-700 w-full py-2 z-50`}
            >
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-2 hover:bg-blue-800"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Contact
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Blog
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;