import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionTag } from './SectionTag';
import { FAQ_ITEMS_COL1, FAQ_ITEMS_COL2 } from '../data';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const renderFaqCard = (item: FAQItem) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className="w-full rounded-2xl border border-[#7da4ff29] bg-[#0c0f16] overflow-hidden transition-all duration-200"
      >
        <button
          onClick={() => toggleItem(item.id)}
          aria-expanded={isOpen}
          className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-white/[0.02]"
        >
          <span className="text-base sm:text-lg font-medium text-white/95">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white"
          >
            <Plus className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#9ba9c4] leading-relaxed border-t border-white/[0.06] pt-3">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="FAQ"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              Curious About Cosmoq?
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Answers to common questions about our AI-powered enterprise platform.
            </p>
          </div>
        </div>

        {/* 2-Column Accordion */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4">{FAQ_ITEMS_COL1.map(renderFaqCard)}</div>
          <div className="space-y-4">{FAQ_ITEMS_COL2.map(renderFaqCard)}</div>
        </div>
      </div>
    </section>
  );
};
