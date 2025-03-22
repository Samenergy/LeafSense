"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl flex items-center p-4 gap-5">
        <div className="text-gray-900 dark:text-white text-xl rounded-full border border-gray-500">
          <Link href="/" className="">
            <img
              src="/logo.png"
              alt="LeafSense Logo"
              className="max-w-60 h-auto -my-6"
            />
          </Link>
        </div>
        <div className="space-x-8 text-gray-900 dark:text-white rounded-full border border-gray-500 px-4 py-2 text-md">
          <Link href="/">Home</Link>
          <Link href="/detect">Detect Disease</Link>
          <Link href="/diseases">Disease Database</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;