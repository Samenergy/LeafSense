import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="py-20 px-5 bg-green-50 dark:bg-gray-900 flex items-center justify-between gap-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Left side images */}
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

        {/* Right side testimonials */}
        <div className="w-full md:w-3/5">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="max-w-2xl text-left text-gray-600 dark:text-gray-300">
              Trusted by gardeners, farmers, and agricultural professionals
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image
                    src=""
                    alt="User"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Sarah Johnson
                  </h4>
                  <p className="text-sm text-gray-500">Home Gardener</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "LeafSense helped me save my tomato plants! I was able to
                identify early blight quickly and treat it before it spread to
                the rest of my garden."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image
                    src=""
                    alt="User"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Michael Chen
                  </h4>
                  <p className="text-sm text-gray-500">Commercial Farmer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "As a commercial farmer, early detection is crucial. LeafSense
                has become an essential tool for our operation, helping us
                reduce crop losses by over 30%."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image
                    src=""
                    alt="User"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Emma Rodriguez
                  </h4>
                  <p className="text-sm text-gray-500">
                    Agricultural Consultant
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "I recommend LeafSense to all my clients. The accuracy and
                detailed treatment recommendations make it stand out from
                other plant disease detection tools."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 