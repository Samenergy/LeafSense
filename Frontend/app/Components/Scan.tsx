"use client";
import { useState } from "react";
import { FaTimes, FaUpload, FaSpinner } from "react-icons/fa";

interface ScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScanModal: React.FC<ScanModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleScan = async () => {
    if (!selectedFile) return;
    
    setIsScanning(true);
    // TODO: Implement actual scanning logic here
    // This is where you'll integrate with your backend API
    
    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false);
      // Handle scan results here
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative shadow-2xl transform transition-all duration-300 ease-in-out animate-slideUp">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#145b2f] to-[#2e7d32] bg-clip-text text-transparent">
          Scan Plant Leaf
        </h2>

        {/* Upload area */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-8 transition-all duration-300 hover:border-[#145b2f] hover:bg-gray-50">
          {previewUrl ? (
            <div className="relative group">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200"
              >
                <FaTimes size={16} />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <FaUpload size={48} className="mx-auto text-gray-400 animate-bounce" />
                <div className="absolute inset-0 bg-[#145b2f] opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-600 text-lg">
                Drag and drop your leaf image here, or click to select
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block bg-[#145b2f] text-white px-8 py-3 rounded-full cursor-pointer hover:bg-[#0f4423] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
              >
                Select Image
              </label>
            </div>
          )}
        </div>

        {/* Scanning status */}
        {isScanning && (
          <div className="text-center space-y-4 animate-fadeIn">
            <div className="relative">
              <FaSpinner className="animate-spin mx-auto text-[#145b2f]" size={32} />
              <div className="absolute inset-0 bg-[#145b2f] opacity-20 blur-lg"></div>
            </div>
            <p className="text-gray-600 font-medium">Analyzing leaf image...</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={onClose}
            className="px-8 text-[#145b2f] py-3 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium hover:border-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleScan}
            disabled={!selectedFile || isScanning}
            className={`px-8 py-3 rounded-full text-white transition-all duration-300 font-medium shadow-lg ${
              !selectedFile || isScanning
                ? "bg-[#145b2f] cursor-not-allowed shadow-none"
                : "bg-[#145b2f] hover:bg-[#0f4423] hover:shadow-xl hover:scale-105"
            }`}
          >
            Start Scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanModal; 