import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../data';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'AI Solutions', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#contact') {
      onOpenContact();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full flex justify-center py-4 px-4 sm:px-8 pointer-events-none">
      <div
        className={`w-full max-w-[1200px] flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled ? 'py-0' : 'py-1'
        }`}
      >
        {/* Logo container */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
          >
            <img
              src={LOGO_URL}
              alt="COSMOQ Logo"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation Links Pill */}
        <nav className="hidden md:flex items-center gap-7 px-6 py-3 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.08] shadow-[inset_-3px_-2px_8px_0px_rgba(255,255,255,0.07)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              onMouseEnter={() => setActiveLink(link.label)}
              onMouseLeave={() => setActiveLink(null)}
              className="relative text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-200 py-1"
            >
              <span>{link.label}</span>
              {/* Subtle underline line effect on hover */}
              <AnimatePresence>
                {activeLink === link.label && (
                  <motion.div
                    layoutId="nav-underline"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-blue-500 rounded-full"
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="relative group px-6 py-2.5 rounded-2xl bg-black text-white font-semibold text-sm cosmoq-btn-glow border border-white/40 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-20 left-4 right-4 bg-[#0c0f16]/95 backdrop-blur-xl border border-[#7da4ff29] rounded-3xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-base font-medium text-white/90 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gray-500 text-sm">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-black border border-white/40 text-white font-semibold text-sm cosmoq-btn-glow flex items-center justify-center cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
