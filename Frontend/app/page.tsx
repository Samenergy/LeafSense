import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

import {
  FaLeaf,
  FaMobileAlt,
  FaDatabase,
  FaCloudUploadAlt,
  FaMicroscope,
  FaRegLightbulb,
} from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <Header />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Why Choose LeafSense?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Our advanced AI technology provides accurate plant disease
              detection to help you maintain healthy crops and gardens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-green-500 mb-4">
                <FaMicroscope className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Accurate Diagnosis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI model is trained on thousands of images to provide highly
                accurate plant disease identification.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-green-500 mb-4">
                <FaMobileAlt className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Easy to Use
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply upload a photo of your plant leaf and get instant disease
                detection results with treatment recommendations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-green-500 mb-4">
                <FaDatabase className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Comprehensive Database
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access our extensive library of plant diseases, symptoms, and
                treatment methods to better understand your plants' health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-green-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Detect plant diseases in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="text-green-500 mb-4">
                <FaCloudUploadAlt className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Upload Photo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Take a clear photo of the affected plant leaf and upload it to
                our system.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="text-green-500 mb-4">
                <FaLeaf className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                AI Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced AI analyzes the image to identify the plant and
                detect any diseases.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="text-green-500 mb-4">
                <FaRegLightbulb className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Get Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive detailed information about the disease and personalized
                treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 px-4 bg-[url('/back.webp')] bg-cover bg-center">
        {/* Overlay for reduced opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">98%</h3>
              <p className="text-gray-300">Detection Accuracy</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">10+</h3>
              <p className="text-gray-300">Plant Diseases in Database</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">
                50,000+
              </h3>
              <p className="text-gray-300">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-5 bg-green-50 dark:bg-gray-900 flex items-center justify-between gap-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Left side images */}
          <div className="w-full md:w-1/2 flex  items-center justify-center">
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to diagnose your plant's health?
          </h2>
          <p className="text-xl mb-8">
            Start using our plant disease detection tool today and keep your
            plants healthy.
          </p>
          <Link
            href="/detect"
            className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Detect Disease Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LeafSense</h3>
              <p className="text-gray-400">
                Advanced plant disease detection powered by AI to help you
                maintain healthy plants and crops.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/detect"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Detect Disease
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diseases"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Disease Database
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-2">Have questions or feedback?</p>
              <Link
                href="/contact"
                className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LeafSense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
