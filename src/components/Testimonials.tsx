import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionTag } from './SectionTag';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center overflow-hidden">
      {/* Background ambient gradient art */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <img
          src="https://framerusercontent.com/images/i8sq3FWUDAbUH2kTIeqGIMeGrwE.webp?width=2968&height=2012"
          alt="Ambient Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="TESTIMONIALS"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              Trusted by customers
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Proven outcomes shared by industry leaders and innovators.
            </p>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#0c0f16]/90 backdrop-blur-xl p-6 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Photo Avatar */}
              <div className="w-36 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden flex-shrink-0 border border-white/20 shadow-2xl relative">
                <img
                  src={current.avatarUrl}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Quote & Author Info */}
              <div className="flex-1 space-y-6">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/95">
                  “{current.quote}”
                </blockquote>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#9ba9c4]">
                      {current.role}, <span className="text-white/80">{current.company}</span>
                    </p>
                  </div>

                  {/* Nav Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous testimonial"
                      className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next testimonial"
                      className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
