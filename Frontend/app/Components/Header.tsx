import { FaChevronRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const images = [
  '/banner.webp',
  '/background2.webp',  // Add your other image paths here
  '/background3.webp'   // Add your other image paths here
];

const Header: React.FC = () => {
    return (
      <header
        className="bg-gradient-to-bl from-black to-green-800 text-white text-center px-8 py-24 relative"
        style={{
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Background images with opacity */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `${images.map(img => `url(${img})`).join(', ')}`,
            backgroundSize: 'cover, cover, cover',
            backgroundPosition: 'center, center, center',
            opacity: 0.4,  // Control opacity of all images here
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Content with relative positioning to appear above the background */}
        <div className="relative z-10">
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
      <div className=" space-x-20 flex items-center mt-36 justify-between">
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

        
      </div>

        
      </header>
    );
   };
   
   export default Header;