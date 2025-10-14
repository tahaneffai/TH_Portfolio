'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { Home as HomeIcon, User, Wrench, Folder, Calendar, Trophy, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home', Icon: HomeIcon },
  { href: '#about', label: 'About', Icon: User },
  { href: '#skills', label: 'Skills', Icon: Wrench },
  { href: '#projects', label: 'Projects', Icon: Folder },
  { href: '#timeline', label: 'Timeline', Icon: Calendar },
  { href: '#achievements', label: 'Achievements', Icon: Trophy },
  { href: '#contact', label: 'Contact', Icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY < 80) setActive('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .filter((l) => l.href.startsWith('#') && l.href.length > 1)
      .map((l) => l.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px', threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'glass border-b border-white/10 py-3 shadow-xl backdrop-blur-xl' 
          : 'glass py-6 backdrop-blur-xl'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/" 
            className="text-3xl font-extrabold text-gradient-primary tracking-wide hover:scale-105 transition-transform duration-300"
          >
            TN.
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <ul className="flex items-center space-x-2 list-none">
            {navLinks.map((link, index) => {
              const sectionKey = link.href === '#' ? 'home': link.href.slice(1);
              const isActive = active === sectionKey;
              return (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'group inline-flex items-center gap-2 px-4 h-10 rounded-2xl text-sm font-medium tracking-wide transition-all duration-300',
                      isActive
                        ? 'text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/25'
                        : 'text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                    )}
                    aria-label={link.label}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setActive(sectionKey)}
                  >
                    <span className="inline-flex items-center gap-2">
                      {link.Icon && (
                        <link.Icon className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
                      )}
                      <span className="transition-all duration-300">{link.label}</span>
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-white/20 shadow-2xl"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-gradient-primary">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-white/20 transition-all duration-300"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </div>
                
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const sectionKey = link.href === '#' ? 'home': link.href.slice(1);
                    const isActive = active === sectionKey;
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            'flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300',
                            isActive
                              ? 'text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg'
                              : 'text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                          )}
                          onClick={() => {
                            setActive(sectionKey);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {link.Icon && <link.Icon className="h-5 w-5" />}
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}