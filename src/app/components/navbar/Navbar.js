"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.webp" 
          alt="Logo"
          width={80}
          height={24.5}
        />
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden md:flex space-x-8">
        <Link href="/products" className="relative text-black hover:text-gray-900 group">
          Product
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/solutions" className="relative text-black hover:text-gray-900 group">
          Solutions
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/resources" className="relative text-black hover:text-gray-900 group">
          Resources
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/company" className="relative text-black hover:text-gray-900 group">
          Company
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/enterprise" className="relative text-black hover:text-gray-900 group">
          Enterprise
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/pricing" className="relative text-black hover:text-gray-900 group">
          Pricing
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Login and Sign Up Buttons (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <button className="relative text-black hover:text-gray-900 group">
          Login
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="bg-black text-white px-7 py-2 rounded-xl hover:bg-gray-700">Sign Up</button>
      </div>

      {/* Hamburger Menu Icon and Sign Up Button (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-black">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <button className="text-medium ml-2 bg-black text-white px-5 py-1 rounded-xl hover:bg-gray-700">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center space-y-6 pt-20">
          {/* Close button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-2xl text-black">
            <FiX />
          </button>

          {/* Menu items */}
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-lg text-black">
            Product
          </Link>
          <Link href="/solutions" onClick={() => setIsOpen(false)} className="text-lg text-black">
            Solutions
          </Link>
          <Link href="/resources" onClick={() => setIsOpen(false)} className="text-lg text-black">
            Resources
          </Link>
          <Link href="/company" onClick={() => setIsOpen(false)} className="text-lg text-black">
            Company
          </Link>
          <Link href="/enterprise" onClick={() => setIsOpen(false)} className="text-lg text-black">
            Enterprise
          </Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-lg text-black">
            Pricing
          </Link>

          {/* Login button for mobile */}
          <button onClick={() => setIsOpen(false)} className="text-lg text-black">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
