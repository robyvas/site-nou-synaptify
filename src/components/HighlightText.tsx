import React from 'react';
import { motion } from 'motion/react';

export const HighlightText: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 sm:py-28 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Highlight Text */}
        <div className="flex-1 max-w-[760px]">
          <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-normal tracking-[-0.03em] leading-[1.2] text-white">
            <span className="text-white">We help enterprises reimagine business growth with our </span>
            <span className="cosmoq-gradient-text font-medium">AI Platform</span>
            <span className="text-white">, </span>
            <span className="cosmoq-gradient-text font-medium">Work Solutions</span>
            <span className="text-white">, and </span>
            <span className="cosmoq-gradient-text font-medium">Intelligent Marketplace</span>
            <span className="text-white">. Unlock efficiency, automation, and innovation across every workflow.</span>
          </h2>
        </div>

        {/* Holographic Glowing Sphere with Rotating Emblem */}
        <div className="relative w-[280px] sm:w-[340px] aspect-square flex-shrink-0 flex items-center justify-center">
          {/* Animated Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-transparent to-amber-500/20 blur-2xl animate-pulse-slow" />

          {/* Sphere Image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full relative"
          >
            <img
              src="https://framerusercontent.com/images/emEabgUGaj1mrFtUh9nCcNLOsk.webp?width=692&height=692"
              alt="Holographic Sphere"
              className="w-full h-full object-cover rounded-full brightness-110"
            />
          </motion.div>

          {/* Center COSMOQ Icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute z-10 w-16 h-20 flex items-center justify-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            <img
              src="https://framerusercontent.com/images/rHi83QNHLWfMpfg2vj176ghopo.svg?width=49&height=68"
              alt="COSMOQ Emblem"
              className="w-12 h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
