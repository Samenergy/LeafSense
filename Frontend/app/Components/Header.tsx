"use client";

import { FaChevronRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/banner-bg-2.webp',
  '/banner-bg.webp'
];

const Header: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 1000); // Duration of fade out
    }, 6000); // Total duration including fade
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="bg-gradient-to-bl from-black to-green-800 text-white text-center px-8 py-24 transition-opacity duration-1000"
      style={{ 
        backgroundImage: `linear-gradient(to bottom left, rgba(0, 0, 0, 0.8), rgba(0, 128, 0, 0.7)), url(${images[currentImage]})`,
        backgroundBlendMode: 'normal',
        opacity: fade ? 1 : 0
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-7xl text-left font-bold mt-20">Design, <br /> Develop and <br /> <i className="font-light">Deploy</i>
        </h1>
        <div>
          <p className="text-md text-gray-300 text-left max-w-lg mt-8">Based in Kigali, we are a software development company dedicated to creating innovative, scalable, and impactful digital solutions. Our passion lies in building high-performance applications and seamless digital experiences that drive business success.</p>
          <button className="rounded-full border border-gray-500 mt-8 text-left px-4 py-2 flex items-center space-x-5">
            Learn more <FaChevronRight />
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="space-x-5 flex items-center mt-36 text-2xl">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full bg-white text-black hover:bg-[#145b2f] hover:text-white hover:shadow-md transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full bg-white text-black hover:bg-[#145b2f] hover:text-white hover:shadow-md transition"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full bg-white text-black hover:bg-[#145b2f] hover:text-white hover:shadow-md transition"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="space-x-20 flex items-center mt-36 justify-between">
            <div>
              <p className="text-8xl">98%</p>
              <p className="uppercase">Clients satisfied and
              repeating</p>
            </div>
            <div>
              <p className="text-8xl">50+</p>
              <p className="uppercase">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;