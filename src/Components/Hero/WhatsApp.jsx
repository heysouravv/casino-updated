import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = "+919960006806"; // Replace with your phone number in international format
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // WhatsApp SVG icon
  const WhatsAppIcon = () => (
    <img
      src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png"
      alt="WhatsApp"
      className="w-full h-full"
    />
  );

  const CrossIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
    >
      <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59l-4.9-4.88a1 1 0 0 0-1.4 1.41L10.59 12l-4.88 4.9a1 1 0 0 0 1.4 1.41L12 13.41l4.9 4.88a1 1 0 0 0 1.41-1.41L13.41 12l4.88-4.9a1 1 0 0 0 0-1.4z" />
    </svg>
  );

  return (
    <div className={`fixed z-50 ${isMobile ? 'bottom-20 right-5' : 'bottom-10 right-10'}`}>
      {/* WhatsApp Icon */}
      <motion.div
        className={`flex items-center justify-center text-white transition-colors bg-green-600 rounded-full shadow-lg cursor-pointer hover:bg-green-700 ${
          isMobile ? 'w-12 h-12' : 'w-16 h-16'
        }`}
        onClick={() => setShowPopup(!showPopup)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={isMobile ? 'w-6 h-6' : 'w-8 h-8'}>
          <WhatsAppIcon />
        </div>
      </motion.div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`absolute p-6 mt-3 overflow-hidden bg-black rounded-lg shadow-lg ${
            isMobile ? 'right-0 w-64' : 'right-0 w-80'
          } ${isMobile ? 'bottom-16' : 'bottom-20'}`}
        >
          <p className={`font-medium text-white ${isMobile ? 'text-sm' : 'text-base'}`}>
            Chat with us on WhatsApp!
          </p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block px-4 py-2 mt-4 text-center text-white transition-all duration-200 bg-green-600 rounded hover:bg-green-700 ${
              isMobile ? 'text-sm' : 'text-base'
            }`}
          >
            Open Chat
          </motion.a>
          <motion.button
            className="absolute flex items-center justify-center w-6 h-6 mt-2 text-center text-white transition-colors rounded top-2 right-2 hover:bg-gray-700"
            onClick={() => setShowPopup(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CrossIcon />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default WhatsAppPopup;