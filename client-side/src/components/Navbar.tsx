import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Shop" },
    { to: "/ebooks", label: "Ebooks" },
    { to: "/membership", label: "Membership" },
    { to: "/books/add", label: "Add Book" },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* logo */}
        <NavLink
          to="/"
          className="text-xl font-bold uppercase tracking-wider"
        >
          Book <span className="text-green-500">Hub</span>
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-semibold"
                  : "text-gray-700 hover:text-green-500 transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/cart"
            className="text-gray-700 hover:text-green-500 text-2xl"
          >
            <FaShoppingCart />
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-green-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "block text-green-500 font-semibold"
                  : "block text-gray-700 hover:text-green-500 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)} // menu বন্ধ হবে
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
