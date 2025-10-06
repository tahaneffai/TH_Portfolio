'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NetflixLoader from '@/components/NetflixLoader';

export default function LoaderDemo() {
  const [showLoader, setShowLoader] = useState(false);

  const triggerLoader = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-black dark:via-gray-900 dark:to-black flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Netflix-Style Loader Demo
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience the premium loading animation with animated rectangular bars
        </motion.p>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={triggerLoader}
            className="btn btn-primary btn-lg"
          >
            Trigger Netflix Loader
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-left">
                <li>• Responsive grid (6×8 to 10×14)</li>
                <li>• Staggered animations (40-80ms)</li>
                <li>• Teal gradient palette</li>
                <li>• Sweep sequences</li>
                <li>• Color bloom effects</li>
                <li>• Smooth compress & reveal</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Technical</h3>
              <ul className="space-y-2 text-left">
                <li>• Framer Motion animations</li>
                <li>• CSS Grid responsive layout</li>
                <li>• Hardware acceleration</li>
                <li>• 1.6-2.0s total duration</li>
                <li>• No layout shift</li>
                <li>• WCAG compliant</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {showLoader && (
        <NetflixLoader 
          onComplete={() => setShowLoader(false)}
          duration={2000}
        />
      )}
    </div>
  );
}
