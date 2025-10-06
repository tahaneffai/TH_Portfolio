'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { Home as HomeIcon, User, Wrench, Folder, Calendar, Trophy, Mail } from 'lucide-react';

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-white/10 py-2 shadow-md' : 'glass py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-gradient-primary tracking-wide">
          TN.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => {
              const sectionKey = link.href === '#' ? 'home': link.href.slice(1);
              const isActive = active === sectionKey;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'group inline-flex items-center gap-2 px-4 h-9 rounded-full text-sm font-medium tracking-wide text-base-content/80 transition-colors',
                      isActive
                        ? 'text-primary bg-primary/12 ring-1 ring-primary/20'
                        : 'hover:bg-primary/10 hover:text-primary'
                    )}
                    aria-label={link.label}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setActive(sectionKey)}
                  >
                    <span className="inline-flex items-center gap-2">
                      {link.Icon && (
                        <link.Icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                      )}
                      <span>{link.label}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation (no menu button as requested) */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
        </div>
      </div>

    </header>
  );
}