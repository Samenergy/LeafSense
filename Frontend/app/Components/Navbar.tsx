"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? ' backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl  flex  items-center p-4">
        <div className="text-white text-xl rounded-full border border-gray-600">
          <Link href="/" className="">
            <img
              src="/file.png"
              alt="Logo"
              className="max-w-60 h-auto -my-14 -mx-8"
            />
          </Link>
        </div>
        <div className="space-x-8 text-white rounded-full border border-gray-600 px-4 py-2 text-md">
          <Link href="/#services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
