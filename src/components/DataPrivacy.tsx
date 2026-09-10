import React from 'react';
import { motion } from 'motion/react';
import { SectionTag } from './SectionTag';

export const DataPrivacy: React.FC = () => {
  const securityBadges = [
    { title: 'Intelligent Protection', desc: 'Active autonomous threat neutralization' },
    { title: 'Real-Time Threat Detection', desc: 'Zero-day vulnerability heuristics' },
    { title: 'Seamless Compliance', desc: 'SOC2 Type II, HIPAA, and GDPR audited' },
  ];

  const securityLayers = [
    { name: 'Layer 1', img: 'https://framerusercontent.com/images/BOO9YkJWPlVaXJACHcXHqAPuBw.png?width=294&height=485' },
    { name: 'Layer 2', img: 'https://framerusercontent.com/images/FFx9tCFoevPxrcvXSaMFTcT8.png?width=294&height=473' },
    { name: 'Layer 3', img: 'https://framerusercontent.com/images/rugS4hRgm7Cf9IUsK51bzhuf4h8.png?width=294&height=492' },
    { name: 'Layer 4', img: 'https://framerusercontent.com/images/6YZCTbgTJSkogwFP5MNM5Z254gQ.png?width=294&height=486' },
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="DATA AND PRIVACY"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              Multi-Layer Security
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Protect your enterprise with multi-layered AI security. From data encryption to behavior monitoring, every layer works together.
            </p>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Info & Badges */}
          <div className="flex-1 max-w-lg space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Enterprise Shield Architecture
              </h3>
              <p className="text-sm sm:text-base text-[#b0bed9] leading-relaxed">
                Every agent executes in isolated sandboxes with ephemeral memory pools, continuous red-teaming defenses, and tamper-proof telemetry logs.
              </p>
            </div>

            {/* Badges List */}
            <div className="space-y-3">
              {securityBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{badge.title}</h5>
                    <p className="text-xs text-[#9ba9c4]">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Holographic Multi-layer Visual */}
          <div className="flex-1 w-full max-w-lg flex items-center justify-center relative min-h-[340px] sm:min-h-[440px]">
            {/* Background Aura */}
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl" />

            {/* 4 Overlapping Hologram Cards */}
            <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
              {securityLayers.map((layer, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [0, idx % 2 === 0 ? -8 : 8, 0],
                    rotate: [idx * 3 - 4.5, idx * 3 - 3, idx * 3 - 4.5],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-[180px] sm:w-[220px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-md"
                  style={{
                    left: `${20 + idx * 16}%`,
                    zIndex: idx + 1,
                    transform: `translateX(-50%)`,
                  }}
                >
                  <img
                    src={layer.img}
                    alt={layer.name}
                    className="w-full h-full object-cover brightness-125 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90">
                    {layer.name} • SECURE
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
