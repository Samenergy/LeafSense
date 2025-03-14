'use client';
import { FaChevronRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';


const images = [
  '/banner.webp',
  '/banner-bg.webp',  // Add your other image paths here
  '/banner-bg-2.webp'   // Add your other image paths here
];

// Animation settings - adjust these to control the loop behavior
const TRANSITION_DURATION = 1000; // in ms
const IMAGE_DISPLAY_DURATION = 5000; // in ms

const Header: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [isFading, setIsFading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    
    // Function to move to the next image in the loop
    const advanceImage = useCallback(() => {
        setIsFading(true);
        
        // Wait for fade-out then change images
        setTimeout(() => {
            setCurrentImageIndex(nextImageIndex);
            setNextImageIndex((nextImageIndex + 1) % images.length);
            setIsFading(false);
        }, TRANSITION_DURATION);
    }, [nextImageIndex]);
    
    // Effect to cycle through images
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            advanceImage();
        }, IMAGE_DISPLAY_DURATION);
        
        // Cleanup interval on component unmount or dependency changes
        return () => clearInterval(interval);
    }, [nextImageIndex, isPaused, advanceImage]);
    
    // Preload all images on component mount
    useEffect(() => {
        images.forEach(imgSrc => {
            const img = new Image();
            img.src = imgSrc;
        });
    }, []);
    
    return (
      <header
        className="bg-gradient-to-bl from-black to-green-700 text-white text-center px-8 py-24 relative"
        style={{
          backgroundBlendMode: 'overlay',
        }}
        // Optional: pause/resume animation on hover
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Loop through all images and render them with different z-indices */}
        {images.map((imgSrc, index) => (
          <div 
            key={imgSrc}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // Show current image or next image during transition
              opacity: index === currentImageIndex 
                ? (isFading ? 0 : 1) 
                : (index === nextImageIndex && isFading ? 1 : 0),
              zIndex: 0,
              mixBlendMode: 'overlay'
            }}
          />
        ))}
        
        {/* Image navigation dots (optional) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => {
                setNextImageIndex(index);
                advanceImage();
              }}
              aria-label={`View background image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content with relative positioning to appear above the background */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-7xl text-left font-bold mt-20">Detect, <br /> Diagnose and <br /> <i className="font-light">Defend</i>
            </h1>
            <div>
              <p className="text-md text-gray-300 text-left max-w-lg mt-8">LeafSense uses advanced AI technology to instantly identify plant diseases from simple leaf photos. Our cutting-edge system helps farmers, gardeners, and agricultural professionals detect problems early, reduce crop losses, and implement targeted treatments for healthier plants.</p>
              <button className="rounded-full border border-gray-500 mt-8 text-left px-4 py-2 flex items-center space-x-5">
                Start scanning <FaChevronRight />
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
                  <p className="text-8xl">95%</p>
                  <p className="uppercase">Detection accuracy rate</p>
                </div>
                <div>
                  <p className="text-8xl">10+</p>
                  <p className="uppercase">Plant diseases identified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
   };
   
   export default Header;