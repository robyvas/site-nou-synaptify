import React from 'react';
import { LOGO_URL } from '../data';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-20 sm:pt-28 pb-12 px-4 sm:px-8 flex flex-col items-center overflow-hidden border-t border-white/[0.08]">
      {/* Huge Atmospheric Glow & Backdrop Asset */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] pointer-events-none opacity-40 [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]">
        <img
          src="https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp?width=2334&height=1082"
          alt="Atmospheric Glow"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
        {/* Giant Footer Call to Action Header */}
        <div className="w-full max-w-[760px] flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            Step Into COSMOQ The Future of Intelligent Agents
          </h2>
          <p className="text-base sm:text-lg text-[#9ba9c4] max-w-lg font-normal">
            Everything your team needs, in one simple workspace. Stay focused, stay in sync.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-2xl bg-black text-white font-semibold text-base cosmoq-btn-glow border border-white/40 cursor-pointer hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </div>

        {/* Large Centered Logo Watermark */}
        <div className="w-full flex justify-center mb-16 opacity-30 select-none pointer-events-none">
          <img
            src={LOGO_URL}
            alt="COSMOQ"
            className="w-full max-w-[850px] h-auto object-contain filter contrast-125"
          />
        </div>

        {/* 4 Column Links Navigation */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-16">
          {/* Col 1: Navigation */}
          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-sm text-[#9ba9c4]">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Integration
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Documentation */}
          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase">
              Documentation
            </h5>
            <ul className="space-y-2.5 text-sm text-[#9ba9c4]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Other Pages */}
          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase">
              Other Pages
            </h5>
            <ul className="space-y-2.5 text-sm text-[#9ba9c4]">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Launchin Soon...
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  404
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Connect */}
          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase">
              Social Connect
            </h5>
            <ul className="space-y-2.5 text-sm text-[#9ba9c4]">
              <li>
                <a
                  href="https://www.instagram.com/jitu.ux/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/jituux"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X/twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jitendra-raut/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#9ba9c4]">
          <p>All rights reserved for @COSMOQ</p>
          <a
            href="https://fremix.design/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Designed by Jitu Raut @fremix.design
          </a>
        </div>
      </div>
    </footer>
  );
};
