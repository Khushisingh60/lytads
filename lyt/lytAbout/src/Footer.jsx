import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-300 text-center">
      
      <div className="mb-4">
        <Link to="/" className="text-black mx-4 hover:underline">Home</Link>
        <Link to="/about-us" className="text-black mx-4 hover:underline">About Us</Link>
        <Link to="/terms-and-conditions" className="text-black mx-4 hover:underline">T&C's</Link>
        <Link to="/faq" className="text-black mx-4 hover:underline">FAQ's</Link>
        <Link to="/privacy-policy" className="text-black mx-4 hover:underline">Privacy Policy</Link>
        <Link to="/blog" className="text-black mx-4 hover:underline">Blog</Link>
        <Link to="/case-study" className="text-black mx-4 hover:underline">Case Study</Link>
      </div>

      
      <div className="flex justify-center mb-4 space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
      </div>

      
      <div className="text-black text-sm">
        <p>
          Copyright © 2024 Taxi-top <br />
          Taxi-top is a brand of WRAP2EARN TECHNOLOGIES PRIVATE LIMITED
        </p>
      </div>
    </footer>
  );
};

export default Footer;

