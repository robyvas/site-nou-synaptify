import React from 'react';
import { motion } from 'motion/react';
import { PARTNER_LOGOS } from '../data';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const headlineWords = ['Next-gen', 'enterprise', 'with', 'AI', 'Agents'];
  const subtitleWords = [
    'Accelerate', 'the', 'speed', 'of', 'business', 'with', 'the',
    'COSMOQ', 'Platform', 'and', 'our', 'AI', 'solutions', 'for', 'work,',
    'service,', 'and', 'process.'
  ];

  return (
    <section className="relative w-full overflow-hidden pt-36 sm:pt-44 pb-16 px-4 sm:px-8 flex flex-col items-center justify-center">
      {/* Background Video & Frost Container */}
      <div className="absolute top-0 left-0 right-0 h-[860px] pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]">
        {/* Looping Ambient Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-60 scale-105"
          src="https://framerusercontent.com/assets/XyQKBChh8CZBaaXrJoxPbwvI.mp4"
        />

        {/* Ambient Blur & Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black backdrop-blur-[4px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-amber-500/15 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-screen"
          style={{
            backgroundImage: `url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px auto',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center text-center">
        {/* Beta Launch Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.12, 0.23, 0.5, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] mb-8"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[13px] sm:text-[14px] font-medium text-white/90">
            Beta Version is launching on 12th September
          </span>
        </motion.div>

        {/* Hero Title with Word Blur In Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-medium tracking-[-0.03em] leading-[1.1] text-white max-w-[850px]"
        >
          {headlineWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.28em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#d1d4e3] max-w-[560px] leading-relaxed font-normal"
        >
          {subtitleWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.4,
                delay: 0.7 + idx * 0.02,
              }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.12, 0.23, 0.5, 1] }}
          className="mt-8 flex items-center justify-center"
        >
          <button
            onClick={onOpenContact}
            className="group relative px-8 py-3.5 rounded-2xl bg-black text-white font-semibold text-base cosmoq-btn-glow border border-white/40 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-98"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Dashboard Preview Image Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1120px] mt-16 sm:mt-20 rounded-3xl overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)] border border-white/[0.06] bg-[#06070a]"
        >
          <img
            src="https://framerusercontent.com/images/A6N9GDN1T1HJbhYbb15VfR9Os.png?width=2338&height=1458"
            alt="COSMOQ Dashboard Platform"
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* Brand Logos Infinite Marquee Ticker */}
        <div className="w-full max-w-[1120px] mt-12 sm:mt-16 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
          <div className="animate-marquee flex items-center gap-12 sm:gap-20 py-4">
            {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-[120px] sm:w-[150px] h-[40px] sm:h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
