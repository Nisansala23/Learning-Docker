// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h4 className="text-lg font-bold mb-2">My Awesome Blog</h4>
          <p className="text-gray-400 text-sm">
            Your go-to source for all things IT, including programming, AI, networking, and software engineering. We aim to make complex topics simple and accessible.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-bold mb-2">Connect with Us</h4>
          <div className="social-icons flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} My Awesome Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;