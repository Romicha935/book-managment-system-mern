import React, { useState } from 'react'

import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/books', label: 'Shop' },
    { to: '/ebooks', label: 'Ebooks' },
    { to: '/membership', label: 'Membership' },
    { to: '/books/add', label: 'Add Book' },
  ]

  return (
    <div className='bg-white fixed top-0 w-full z-50 py-4 px-4 shadow'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <NavLink 
            to='/' 
            className="text-xl font-bold uppercase tracking-wider"
          >
            Book <span className='text-amber-500'>Club</span>
          </NavLink>

          {/* navigation */}
          <div className="flex gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink 
                key={to} 
                to={to} 
                className={({ isActive }) =>
                  isActive 
                    ? "text-amber-500 font-semibold" 
                    : "text-gray-700 hover:text-amber-500"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          {/* right side item */}
          <div className='flex items-center space-x-4'>
            <NavLink to='/cart' className="text-gray-700 hover:text-amber-500 text-2xl">
            <FaShoppingCart/>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
