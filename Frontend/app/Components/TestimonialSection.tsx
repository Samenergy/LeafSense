"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialSection = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  // Testimonial data
  const testimonials = [
    {
      name: "Maggie Ulrey",
      location: "Denpasar",
      quote:
        "Absolutely LOVE JosieFarms! Their organic veggies are so crisp and flavorful. Knowing they're grown naturally makes me feel great about what I eat. Five stars all the way!",
      avatar: "/maggie-ulrey.jpg",
    },
    {
      name: "Sarah Johnson",
      location: "Home Gardener",
      quote:
        "LeafSense helped me save my tomato plants! I was able to identify early blight quickly and treat it before it spread to the rest of my garden.",
      avatar: "/sarah-johnson.jpg",
    },
    {
      name: "Michael Chen",
      location: "Commercial Farmer",
      quote:
        "As a commercial farmer, early detection is crucial. LeafSense has become an essential tool for our operation, helping us reduce crop losses by over 30%.",
      avatar: "/michael-chen.jpg",
    },
    {
      name: "Emma Rodriguez",
      location: "Agricultural Consultant",
      quote:
        "I recommend LeafSense to all my clients. The accuracy and detailed treatment recommendations make it stand out from other plant disease detection tools.",
      avatar: "/emma-rodriguez.jpg",
    },
  ];

  return (
    <section className="py-20 px-5 bg-green-50 dark:bg-gray-900 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left Side - Images */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="/dd.webp"
              alt="Main Image"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-full h-[250px] object-cover"
              src="ss.webp"
              alt="Image 1"
            />
            <img
              className="w-full h-[250px] object-cover"
              src="ww.webp"
              alt="Image 2"
            />
        </div>
      </div>

      {/* Right Side - Testimonials */}
      <div className="w-full  lg:w-1/2">
        <div className="text-left mb-10">
          <h2></h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Trusted by gardeners, farmers, and agricultural professionals worldwide.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 flex justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative w-full max-w-[400px] h-[300px] mt-10">
                <div className="absolute bottom-10 right-20 text-green-500 text-4xl">
                <FaQuoteRight />
                </div>
                <p className="text-gray-600  dark:text-gray-300 -mt-0 pr-10 pt-2">{testimonial.quote}</p>
                <div className="flex items-center mt-10">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
