'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code, Database, Server, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const fullText = "HELLO I'M TAHA YASSINE NEFFAI";
  const loopTexts = ["Software Engineer.", "Digital Creator.", "Problem Solver."];
  
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
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-soft-gradient">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 min-h-[40px] md:min-h-[60px] text-gradient-primary">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <h1 className="text-2xl md:text-3xl font-medium mb-4 min-h-[30px] md:min-h-[40px] text-primary">
          {loopTexts[loopIndex]}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          My mission is to turn ideas into reality by developing high-quality software solutions to solve real-world problems. I believe in clean programming, elegant design, and continuous learning to stay ahead in the tech industry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/cv.pdf"
            className="btn btn-secondary btn-lg"
          >
            Download CV
            <Download size={18} />
          </a>
          <a
            href="#contact"
            className="btn btn-accent btn-lg"
          >
            Get in Touch
            <ArrowDown size={18} />
          </a>
          <a
            href="#projects"
            className="btn btn-secondary btn-lg"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}