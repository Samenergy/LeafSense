import React from 'react';
import {
  FaMicroscope,
  FaMobileAlt,
  FaDatabase,
} from 'react-icons/fa';

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection; 