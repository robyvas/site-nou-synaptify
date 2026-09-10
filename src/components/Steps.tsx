import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionTag } from './SectionTag';

export const Steps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = [
    {
      num: '01',
      title: 'One account, endless sign-in choices',
      description: 'Choose from Google, Apple, GitHub, or create an account with email and passkey.',
      points: [
        'Sign in instantly with Google or GitHub.',
        'Create your own secure login credentials.',
        'Connect through your company’s sign-in.',
      ],
      image: 'https://framerusercontent.com/images/vUiGHc7SR4A4SrQMUODr2UXNbY.png?width=1256&height=1076',
    },
    {
      num: '02',
      title: 'Choose the Agent You Want to Deploy',
      description: 'From a vast universe of intelligent agents, pick the one that best fits your needs and serves your purpose.',
      points: [
        'Choose agents tailored to your specific tasks.',
        'Access universe of pre-built intelligent.',
        'Deploy agents that align with your goals.',
      ],
      image: 'https://framerusercontent.com/images/1h2g2AnKRHxZzmSq2umWuiBsSys.png?width=942&height=807',
    },
    {
      num: '03',
      title: 'Prompt or Set to Automation Mode',
      description: 'You can manually guide and adjust the workflow, or let the agent handle everything automatically.',
      points: [
        'Prompt the agent and adjust workflows.',
        'Let the agent handle tasks end-to-end.',
        'Switch between manual and automated.',
      ],
      image: 'https://framerusercontent.com/images/8KzDLcSNotT5Lxj1UyWAsRCZu3E.png?width=1256&height=1076',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="STEPS TO USE"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.25 2.25L15 7.5" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              3 Steps to Kickstart
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              From setup to measurable success made effortless in three steps.
            </p>
          </div>
        </div>

        {/* Steps Sticky Counter Header (Desktop) */}
        <div className="w-full mb-10 hidden md:flex items-center justify-between relative py-2 border-b border-white/10">
          <div
            className="absolute bottom-0 h-[2px] bg-gradient-to-r from-amber-400 to-blue-500 transition-all duration-500 rounded-full"
            style={{
              left: `${activeStep * 33.33}%`,
              width: '33.33%',
            }}
          />
          {stepsData.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-1/3 text-left py-2 text-sm font-semibold transition-colors cursor-pointer ${
                activeStep === idx ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="font-mono">{step.num}.</span> {step.title.split(' ')[0]} {step.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Step Cards Stack */}
        <div className="w-full space-y-8">
          {stepsData.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onViewportEnter={() => setActiveStep(idx)}
              className="relative w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              {/* Text Side */}
              <div className="flex-1 max-w-lg space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400 font-semibold">
                    STEP {step.num}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#b0bed9] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Point Checkboxes */}
                <div className="space-y-3">
                  {step.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10"
                    >
                      <span className="text-xs sm:text-sm font-medium text-[#d1d4e3]">{pt}</span>
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="9" viewBox="0 0 15 11" fill="none">
                          <path d="M0 4.5L5 8.5L13 0" stroke="url(#check-grad-steps)" strokeWidth="2.5" />
                          <defs>
                            <linearGradient id="check-grad-steps" x1="13" y1="0.89" x2="0" y2="7.6" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFAC08" />
                              <stop offset="1" stopColor="#0075FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic Mockup Side */}
              <div className="flex-1 w-full max-w-xl relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto object-cover brightness-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
