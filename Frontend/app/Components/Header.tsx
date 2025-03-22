"use client";
import { FaChevronRight } from "react-icons/fa6";
import { useState, useEffect, useCallback } from "react";
import ScanModal from "./Scan";
import CountUp from "react-countup";

const images = [
  "/banner.webp",
  "/banner-bg.webp",
  "/banner-bg-2.webp",
];

// Animation settings
const TRANSITION_DURATION = 1000; 
const IMAGE_DISPLAY_DURATION = 5000; 

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  const advanceImage = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((nextImageIndex + 1) % images.length);
      setIsFading(false);
    }, TRANSITION_DURATION);
  }, [nextImageIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      advanceImage();
    }, IMAGE_DISPLAY_DURATION);
    return () => clearInterval(interval);
  }, [nextImageIndex, isPaused, advanceImage]);

  useEffect(() => {
    images.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

  return (
    <header
      className="relative text-center px-8 py-24 bg-gray-100 dark:bg-gradient-to-bl dark:text-white transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images */}
      {images.map((imgSrc, index) => (
        <div
          key={imgSrc}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity:
              index === currentImageIndex
                ? isFading
                  ? 0
                  : 1
                : index === nextImageIndex && isFading
                ? 1
                : 0,
            zIndex: 0,
            mixBlendMode: "overlay",
          }}
        />
      ))}

      {/* Light mode overlay removed, dark mode overlay still applies */}
      <div className="absolute inset-0 bg-white opacity-50 dark:opacity-0 transition-opacity"></div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex
                ? "bg-black dark:bg-white"
                : "bg-gray-300 dark:bg-gray-400"
            }`}
            onClick={() => {
              setNextImageIndex(index);
              advanceImage();
            }}
            aria-label={`View background image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-72">
          <h1 className="text-7xl text-left font-bold mt-20 text-gray-900 dark:text-white">
            Detect, <br /> Diagnose and <br />{" "}
            <i className="font-light text-[#25c656] dark:text-white">Defend</i>
          </h1>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-left max-w-lg mt-8">
              LeafSense uses advanced AI technology to instantly identify plant
              diseases from simple leaf photos. Our cutting-edge system helps
              farmers, gardeners, and agricultural professionals detect problems
              early, reduce crop losses, and implement targeted treatments for
              healthier plants.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsScanModalOpen(true)}
              className="rounded-md bg-[#25c656] -mt-10 text-left px-6 py-4 flex items-center space-x-5 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            >
              Start scanning
            </button>
            <div className="space-x-20 flex items-center mt-36 justify-between">
              <div>
                <p className="text-8xl text-gray-900 dark:text-white">
                  <CountUp start={0} end={95} duration={5} />
                  <span>%</span>
                </p>
                <p className="uppercase text-gray-700 dark:text-gray-300">Detection accuracy rate</p>
              </div>
              <div>
                <p className="text-8xl text-gray-900 dark:text-white">
                  <CountUp start={0} end={10} duration={5} />
                  <span>+</span>
                </p>
                <p className="uppercase text-gray-700 dark:text-gray-300">Plant diseases identified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScanModal
        isOpen={isScanModalOpen}
        onClose={() => setIsScanModalOpen(false)}
      />
    </header>
  );
};

export default Header;
