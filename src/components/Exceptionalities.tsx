import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionTag } from './SectionTag';

interface ExceptionalitiesProps {
  onOpenContact: () => void;
}

export const Exceptionalities: React.FC<ExceptionalitiesProps> = ({ onOpenContact }) => {
  // State for interactive sliders in "Control" card
  const [slider1, setSlider1] = useState(50);
  const [slider2, setSlider2] = useState(75);
  const [slider3, setSlider3] = useState(25);

  const integrationRow1 = [
    { name: 'Figma', icon: 'https://framerusercontent.com/images/hdYPy2J7QbpyCYtFC4VUGW13ytI.svg?width=51&height=40' },
    { name: 'Drive', icon: 'https://framerusercontent.com/images/EvRpOn9wuYvQYZzCfYwtnS65jRE.svg?width=40&height=40' },
    { name: 'Jira', icon: 'https://framerusercontent.com/images/FQP31xwbbI4n1vs2r24mfuxRGQI.svg?width=49&height=40' },
    { name: 'Notion', icon: 'https://framerusercontent.com/images/aap1xSJQbafVrLaeVhlLfdpwNZg.svg?width=60&height=60' },
  ];

  const integrationRow2 = [
    { name: 'Confluence', icon: 'https://framerusercontent.com/images/QaeKao8eibxNDl43Zp0JVaFeI.svg?width=49&height=48' },
    { name: 'SAP', icon: 'https://framerusercontent.com/images/7FD49Lwwd6BP9eCtJ1YSgmHeVg.svg?width=43&height=49' },
    { name: 'Slack', icon: 'https://framerusercontent.com/images/DU8DKlxTsbVIEUdhYPL0FdSSqDY.svg?width=40&height=40' },
    { name: 'HubSpot', icon: 'https://framerusercontent.com/images/dRjKz5jULiduxg4HJkqfdEnv54.svg?width=60&height=40' },
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="EXCEPTIONALITIES"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              What sets COSMOQ apart
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Smarter, faster, and more adaptive than traditional AI solutions.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Speed (Span 2 on lg) */}
          <div className="lg:col-span-2 relative min-h-[420px] rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] flex flex-col justify-between group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-125 opacity-70 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/AroYsG98cecxdfVar1RpE3QmpjY.webp?width=1160&height=922)`,
              }}
            />

            {/* Glowing Laser Light Streaks */}
            <div className="relative w-full h-[260px] flex items-center justify-center overflow-hidden">
              {/* Rotating particle burst lines */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 0.98, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 flex items-center justify-center"
              >
                {/* Laser Ray 1 */}
                <div className="absolute w-32 h-[3px] bg-gradient-to-r from-blue-500 via-white to-transparent rounded-full blur-[1px] rotate-[15deg] translate-x-12 -translate-y-8" />
                {/* Laser Ray 2 */}
                <div className="absolute w-36 h-[3px] bg-gradient-to-r from-amber-400 via-white to-transparent rounded-full blur-[1px] rotate-[-45deg] -translate-x-14 translate-y-6" />
                {/* Laser Ray 3 */}
                <div className="absolute w-28 h-[2px] bg-gradient-to-r from-blue-400 to-transparent rounded-full blur-[2px] rotate-[75deg] translate-y-16" />
                {/* Laser Ray 4 */}
                <div className="absolute w-40 h-[3px] bg-gradient-to-r from-amber-500 to-blue-500 rounded-full blur-[1px] rotate-[130deg] translate-x-10 translate-y-10" />

                {/* Central Core Pulse */}
                <div className="w-16 h-16 rounded-full bg-blue-500/20 blur-xl animate-ping" />
              </motion.div>
            </div>

            {/* Bottom Glass Text Panel */}
            <div className="relative z-10 m-4 sm:m-6 p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Speed</h4>
              <p className="text-sm sm:text-base text-[#9ba9c4]">
                Faster time-to-value with our enterprise AI solutions and AI agent marketplace.
              </p>
            </div>
          </div>

          {/* Card 2: Deep Capabilities */}
          <div className="relative min-h-[420px] rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] flex flex-col justify-between group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-125 opacity-70 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/yW0YwfEjj3XVmK9OpcRWpCha3k.png?width=1160&height=832)`,
              }}
            />

            {/* Circuit matrix with pulsing nodes */}
            <div className="relative w-full h-[240px] flex items-center justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Glowing Dots */}
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="absolute top-6 left-8 w-3.5 h-3.5 rounded-full bg-blue-400 blur-[2px] shadow-[0_0_12px_#0175ff]"
                />
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.7, delay: 0.5, repeat: Infinity }}
                  className="absolute bottom-10 right-10 w-3.5 h-3.5 rounded-full bg-amber-400 blur-[2px] shadow-[0_0_12px_#ffac0a]"
                />
                <motion.div
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 3, delay: 1, repeat: Infinity }}
                  className="absolute top-1/2 left-4 w-3 h-3 rounded-full bg-cyan-300 blur-[1px] shadow-[0_0_10px_#00f0ff]"
                />
              </div>
            </div>

            {/* Bottom Glass Text Panel */}
            <div className="relative z-10 m-4 sm:m-6 p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Deep capabilities</h4>
              <p className="text-sm sm:text-base text-[#9ba9c4]">
                An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise.
              </p>
            </div>
          </div>

          {/* Card 3: Control (Interactive Vertical Sliders) */}
          <div className="relative min-h-[420px] rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] flex flex-col justify-between group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-125 opacity-70 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/UoZeXgrLVIo07yWMmdM4MO8F0.webp?width=753&height=922)`,
              }}
            />

            {/* 3 Interactive Vertical Sliders */}
            <div className="relative z-10 w-full h-[240px] flex items-center justify-center gap-8 px-8 pt-6">
              {/* Slider 1 */}
              <div className="flex flex-col items-center h-44">
                <div className="relative w-8 h-full rounded-full bg-white/10 border border-white/20 p-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-blue-600 to-amber-400 shadow-[0_0_12px_rgba(1,117,255,0.8)] transition-all duration-300"
                    style={{ height: `${slider1}%` }}
                  />
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={slider1}
                    onChange={(e) => setSlider1(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              {/* Slider 2 */}
              <div className="flex flex-col items-center h-44">
                <div className="relative w-8 h-full rounded-full bg-white/10 border border-white/20 p-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-blue-600 to-amber-400 shadow-[0_0_12px_rgba(255,172,10,0.8)] transition-all duration-300"
                    style={{ height: `${slider2}%` }}
                  />
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={slider2}
                    onChange={(e) => setSlider2(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              {/* Slider 3 */}
              <div className="flex flex-col items-center h-44">
                <div className="relative w-8 h-full rounded-full bg-white/10 border border-white/20 p-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-blue-600 to-amber-400 shadow-[0_0_12px_rgba(1,117,255,0.8)] transition-all duration-300"
                    style={{ height: `${slider3}%` }}
                  />
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={slider3}
                    onChange={(e) => setSlider3(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Glass Text Panel */}
            <div className="relative z-10 m-4 sm:m-6 p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Control</h4>
              <p className="text-sm sm:text-base text-[#9ba9c4]">
                The power of a standardized platform built for enterprise demands.
              </p>
            </div>
          </div>

          {/* Card 4: Flexibility (Integration Carousel) */}
          <div className="relative min-h-[420px] rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] flex flex-col justify-between group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-125 opacity-70 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/TdhDQYxz25yRgOwLKeC05FZVk.webp?width=754&height=922)`,
              }}
            />

            {/* Dual Scrolling Integration Pills */}
            <div className="relative z-10 w-full h-[240px] flex flex-col justify-center gap-3 overflow-hidden px-2 [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
              {/* Row 1 */}
              <div className="animate-marquee flex items-center gap-3">
                {integrationRow1.concat(integrationRow1).map((app, i) => (
                  <div
                    key={`row1-${i}`}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 flex items-center justify-center p-3 shadow-lg"
                  >
                    <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="animate-marquee-reverse flex items-center gap-3">
                {integrationRow2.concat(integrationRow2).map((app, i) => (
                  <div
                    key={`row2-${i}`}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 flex items-center justify-center p-3 shadow-lg"
                  >
                    <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Glass Text Panel */}
            <div className="relative z-10 m-4 sm:m-6 p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Flexibility</h4>
              <p className="text-sm sm:text-base text-[#9ba9c4]">
                Our design approach is ecosystem agnostic, allowing you to choose.
              </p>
            </div>
          </div>

          {/* Card 5: Ready to get started? CTA Card */}
          <div className="relative min-h-[420px] rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-8 flex flex-col justify-between">
            <div className="relative z-10 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Ready to get started?
              </h3>
              <p className="text-sm sm:text-base text-[#8491ab]">
                Let’s make this happen. We’re ready when you are.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3 mt-6">
              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-2xl bg-black text-white font-semibold text-sm cosmoq-btn-glow border border-white/40 cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </button>
              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-2xl bg-[#0c0f16] border border-[#2f3950] font-semibold text-sm cursor-pointer hover:border-white/30 transition-colors duration-200"
              >
                <span className="cosmoq-gradient-text">Get in touch</span>
              </button>
            </div>

            {/* Atmospheric Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-blue-600/20 to-amber-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
