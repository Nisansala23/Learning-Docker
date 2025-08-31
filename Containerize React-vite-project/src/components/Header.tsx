// src/components/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors duration-300">
          My Awesome Blog
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `hover:text-gray-300 transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''}`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `hover:text-gray-300 transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''}`
                }>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  `hover:text-gray-300 transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''}`
                }>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `hover:text-gray-300 transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''}`
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;