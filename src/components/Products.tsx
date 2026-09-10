import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTag } from './SectionTag';
import { PRODUCT_TABS, VERTICAL_CARDS } from '../data';

export const Products: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('automation');

  const currentTab = PRODUCT_TABS.find((t) => t.id === activeTabId) || PRODUCT_TABS[0];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="PRODUCTS"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              Multiple Products
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Covers all major verticals in the tech industry with top intelligence.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10 mb-8 self-start sm:self-center">
          {PRODUCT_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isActive ? 'text-black' : 'text-white/80 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="product-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Card */}
        <div className="w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="flex-1 max-w-md space-y-6"
            >
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {currentTab.title}
                </h3>
                <p className="text-sm sm:text-base text-[#b0bed9] leading-relaxed">
                  {currentTab.description}
                </p>
              </div>

              {/* Point Checkboxes */}
              <div className="space-y-3">
                {currentTab.points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#d1d4e3]">{pt}</span>
                    <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="9" viewBox="0 0 15 11" fill="none">
                        <path d="M0 4.5L5 8.5L13 0" stroke="url(#check-grad)" strokeWidth="2.5" />
                        <defs>
                          <linearGradient id="check-grad" x1="13" y1="0.89" x2="0" y2="7.6" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFAC08" />
                            <stop offset="1" stopColor="#0075FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Product Dashboard Graphic */}
          <div className="flex-1 w-full max-w-xl relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full relative"
              >
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,117,255,0.25)] rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4 Bottom Category Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERTICAL_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 via-blue-500/20 to-transparent border border-white/20 p-2.5 flex items-center justify-center flex-shrink-0">
                <img src={card.iconUrl} alt={card.title} className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-white">{card.title}</h4>
                <p className="text-xs text-[#9ba9c4] leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
