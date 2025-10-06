'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-2xl bg-muted animate-pulse" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        'btn-icon relative overflow-hidden',
        'hover:scale-105 active:scale-95'
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
      >
        {isDarkMode ? (
          <Moon className="h-5 w-5 text-teal-500" />
        ) : (
          <Sun className="h-5 w-5 text-amber-500" />
        )}
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0"
        animate={{ opacity: isDarkMode ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}