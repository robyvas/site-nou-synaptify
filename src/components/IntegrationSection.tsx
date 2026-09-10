import React from 'react';
import { motion } from 'motion/react';
import { SectionTag } from './SectionTag';
import { INTEGRATION_APPS } from '../data';

interface IntegrationSectionProps {
  onOpenContact: () => void;
}

export const IntegrationSection: React.FC<IntegrationSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center overflow-hidden">
      {/* Background World/Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 flex items-center justify-center">
        <img
          src="https://framerusercontent.com/images/FMpJMmyNTqRd8oGYputAzs8cso.webp?width=1920&height=1007"
          alt="Integration map background"
          className="w-full max-w-[1400px] h-auto object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Info Column */}
        <div className="flex-1 max-w-lg space-y-6">
          <SectionTag
            label="INTEGRATION"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            }
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Smart Versatile Agent driven Integration
          </h2>

          <p className="text-base text-[#b0bed9] leading-relaxed">
            Connect custom or pre-built connectors to your enterprise and third-party apps with unified governance and live synchronization.
          </p>

          <div>
            <button
              onClick={onOpenContact}
              className="px-7 py-3 rounded-2xl bg-black text-white font-semibold text-sm cosmoq-btn-glow border border-white/40 cursor-pointer hover:scale-105 transition-transform"
            >
              Know More
            </button>
          </div>
        </div>

        {/* 3x2 Glowing Tiles Grid */}
        <div className="grid grid-cols-3 gap-5 sm:gap-6 p-4 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
          {INTEGRATION_APPS.map((app, i) => (
            <motion.div
              key={app.id}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ duration: 0.25 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[1px] bg-gradient-to-tr from-amber-400/30 via-[#0c0f16] to-blue-500/40 shadow-lg flex items-center justify-center cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl bg-[#0c0f16] flex items-center justify-center p-4">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
