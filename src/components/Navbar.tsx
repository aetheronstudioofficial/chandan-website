'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let rafId = 0;
    let lastScrolled = isScrolled;
    let lastActive = activeSection;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const scrolled = window.scrollY > 20;
        if (scrolled !== lastScrolled) {
          lastScrolled = scrolled;
          setIsScrolled(scrolled);
        }

        // Determine active section based on scroll position
        const scrollPosition = window.scrollY + 100;
        for (const item of navItems) {
          const targetId = item.href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              if (targetId !== lastActive) {
                lastActive = targetId;
                setActiveSection(targetId);
              }
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
          isScrolled
            ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-black tracking-wider text-white hover:opacity-95 transition-opacity"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <Dumbbell className="h-6 w-6 text-brand-red animate-pulse" />
            <span className="font-heading text-3xl">
              JFC<span className="text-brand-orange">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-red relative py-1',
                      activeSection === item.href.substring(1)
                        ? 'text-brand-red'
                        : 'text-gray-300'
                    )}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-brand"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#membership"
              onClick={(e) => handleNavClick(e, '#membership')}
              className="bg-gradient-brand text-white font-semibold uppercase text-sm px-6 py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-md shadow-brand-red/20 active:scale-95"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-brand-red transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-brand-black/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center p-6 border-t border-white/5"
          >
            <ul className="flex flex-col items-center gap-6 mb-8 w-full">
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'text-2xl font-heading tracking-wide uppercase transition-colors',
                      activeSection === item.href.substring(1)
                        ? 'text-brand-red text-gradient font-bold'
                        : 'text-white hover:text-brand-red'
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#membership"
              onClick={(e) => handleNavClick(e, '#membership')}
              className="bg-gradient-brand text-white font-bold uppercase text-lg px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 w-64 text-center shadow-lg shadow-brand-red/20"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
