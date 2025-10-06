'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SimpleLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function SimpleLoader({ onComplete, duration = 2000 }: SimpleLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Laptop Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Laptop Base */}
            <div className="relative w-96 h-56">
              {/* Laptop Screen */}
              <div className="relative w-full h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-lg shadow-2xl">
                {/* Screen Bezel */}
                <div className="absolute inset-2 bg-black rounded-md overflow-hidden">
                  {/* Screen Content */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div
                        className="text-white text-xl font-medium mb-3"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        Loading...
                      </motion.div>
                      
                      {/* Loading Dots */}
                      <div className="flex justify-center space-x-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-3 h-3 bg-teal-400 rounded-full"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Screen Hinge */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
              </div>
              
              {/* Laptop Base */}
              <div className="relative w-full h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-xl">
                {/* Trackpad */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gray-600 rounded-lg"></div>
                
                {/* Keyboard Area */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-sm">
                  {/* Keyboard Keys */}
                  <div className="grid grid-cols-12 gap-1 p-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-1 bg-gray-500 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Glow Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-2xl scale-110 rounded-lg"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Screen Glow */}
            <motion.div
              className="absolute top-2 left-2 right-2 h-40 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-xl rounded-md"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Ambient Glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
