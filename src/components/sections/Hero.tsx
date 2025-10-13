'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const fullText = "HI, I'M TAHA YASSINE NEFFAI";
  const loopTexts = ["Software Engineer.", "Digital Creator.", "Problem Solver."];
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  
  useEffect(() => {
    const loopInterval = setInterval(() => {
      setLoopIndex((prevIndex) => (prevIndex + 1) % loopTexts.length);
    }, 3000);
    
    return () => clearInterval(loopInterval);
  }, [loopTexts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };


  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:bg-black dark:from-gray-900 dark:via-black dark:to-gray-800">
      {/* Modern neumorphism background */}
      <div className="absolute inset-0">
        {/* Soft gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ y: y1, opacity }}
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 dark:from-teal-500/40 dark:to-cyan-500/40 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            style={{ y: y2, opacity }}
            className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-400/15 dark:from-cyan-500/35 dark:to-blue-500/35 blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading with typing animation */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-primary tracking-tight"
              variants={itemVariants}
            >
              {displayText}
              <motion.span 
                className="text-teal-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h1>

            {/* Animated role text */}
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-slate-600 dark:text-white"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={loopIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {loopTexts[loopIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-slate-600 dark:text-gray-200 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              My mission is to turn ideas into reality by developing high-quality software solutions to solve real-world problems. I believe in clean programming, elegant design, and continuous learning to stay ahead in the tech industry.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="/cv-fr.pdf"
                className="btn btn-primary btn-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Download CV
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-ghost btn-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              {/* Neumorphism glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 dark:from-teal-500/30 dark:to-cyan-500/30 blur-2xl scale-110" />
              
              {/* Avatar image */}
              <motion.div
                className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]"
                whileHover={{ 
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/projects/face.png"
                  alt="Taha Yassine Neffai"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                />
              </motion.div>

              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  style={{
                    top: `${20 + (i * 20)}%`,
                    left: `${15 + (i * 15)}%`,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    x: [-8, 8, -8],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={20} className="text-teal-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}