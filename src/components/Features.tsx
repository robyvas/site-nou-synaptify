import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SectionTag } from './SectionTag';

interface FeaturesProps {
  onOpenContact: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'usage' | 'technology' | 'data'>('usage');
  const [typewriterText, setTypewriterText] = useState('');
  const [promptIndex, setPromptIndex] = useState(0);

  const prompts = [
    'Analyze quarterly ERP logs for discrepancies',
    'Triage incoming support tickets to Tier 2',
    'Generate HIPAA-compliant patient intake summaries',
    'Sync Salesforce deal pipeline with Slack channels',
  ];

  // Live Typewriter Effect for Feature 1
  useEffect(() => {
    let currentText = '';
    let charIndex = 0;
    let isDeleting = false;
    const currentPrompt = prompts[promptIndex];

    const interval = setInterval(() => {
      if (!isDeleting) {
        currentText = currentPrompt.slice(0, charIndex + 1);
        setTypewriterText(currentText);
        charIndex++;
        if (charIndex === currentPrompt.length) {
          isDeleting = true;
          setTimeout(() => {}, 1500);
        }
      } else {
        currentText = currentPrompt.slice(0, charIndex - 1);
        setTypewriterText(currentText);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setPromptIndex((prev) => (prev + 1) % prompts.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearInterval(interval);
  }, [promptIndex]);

  const tabs = [
    { id: 'usage' as const, label: 'Usage', href: '#feature-01' },
    { id: 'technology' as const, label: 'Technology', href: '#feature-02' },
    { id: 'data' as const, label: 'Data', href: '#feature-03' },
  ];

  return (
    <section id="features" className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="FEATURES"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              All-in-one AI for enterprise
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Simplify, accelerate, and transform with one connected AI ecosystem.
            </p>
          </div>
        </div>

        {/* Layout with Sticky Category Sidebar and Showcase Cards */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Category Nav (Sticky on Desktop) */}
          <div className="w-full lg:w-[260px] flex-shrink-0 lg:sticky lg:top-28 z-20 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const el = document.getElementById(tab.href.replace('#', ''));
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`relative flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white/[0.08] border-white/30 text-white shadow-lg'
                      : 'bg-[#0c0f16]/40 border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-400">
                    {tab.id === 'usage' ? '1' : tab.id === 'technology' ? '2' : '3'}
                  </div>
                  <span className="text-sm font-semibold">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-blue-500"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Cards Column */}
          <div className="flex-1 w-full space-y-8">
            {/* Feature 1: AI Agent for work */}
            <div
              id="feature-01"
              className="relative w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-10 flex flex-col xl:flex-row items-center justify-between gap-8"
            >
              <div className="flex-1 max-w-lg space-y-6">
                <div className="space-y-3">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    AI Agent for work
                  </h4>
                  <p className="text-sm sm:text-base text-[#b0bed9] leading-relaxed">
                    Connect to your business systems, understand your data and workflows, and activate agentic intelligence across your operations.
                  </p>
                </div>

                {/* Point Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {['Healthcare', 'Tech Assistance', 'Support', 'Marketer'].map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-[#d1d4e3]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-2.5 rounded-xl bg-[#0c0f16] border border-[#2f3950] font-semibold text-sm hover:border-white/30 transition-colors"
                  >
                    <span className="cosmoq-gradient-text">See Uses</span>
                  </button>
                </div>
              </div>

              {/* Graphic Side with Typewriter Banner */}
              <div className="w-full xl:w-[420px] aspect-[4/3] relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp?width=788&height=922"
                  alt="AI Agent Workflow"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* Floating Interactive Typewriter Prompt Bar */}
                <div className="absolute bottom-6 left-4 right-4 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-white/30">
                    <img
                      src="https://framerusercontent.com/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png?width=57&height=57"
                      alt="AI Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-xs text-white/90 font-mono truncate">
                    <span>{typewriterText}</span>
                    <span className="animate-pulse text-amber-400 font-bold ml-0.5">|</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Alpha Technology */}
            <div
              id="feature-02"
              className="relative w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-10 flex flex-col xl:flex-row items-center justify-between gap-8"
            >
              <div className="flex-1 max-w-lg space-y-6">
                <div className="space-y-3">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    Alpha Technology
                  </h4>
                  <p className="text-sm sm:text-base text-[#b0bed9] leading-relaxed">
                    Create valuable AI agents and agentic workflows with confidence, real-time observability, and ongoing control.
                  </p>
                </div>

                {/* Point Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {['Multi-Agent', 'Latest Model', 'Dialog GPT', 'Supervisor Agents'].map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-[#d1d4e3]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-2.5 rounded-xl bg-[#0c0f16] border border-[#2f3950] font-semibold text-sm hover:border-white/30 transition-colors"
                  >
                    <span className="cosmoq-gradient-text">Explore Tech</span>
                  </button>
                </div>
              </div>

              {/* Graphic Side with Rotating 3D Globe */}
              <div className="w-full xl:w-[420px] aspect-[4/3] relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
                {/* Background image */}
                <img
                  src="https://framerusercontent.com/images/4ABnXaFshXBVkaMyEU2NjeeqE.webp?width=788&height=922"
                  alt="Alpha Tech Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                {/* Floating Tag */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-white font-mono">
                  ALPHA ENGINE v4.2
                </div>

                {/* Rotating 3D Globe */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="w-48 h-48 sm:w-56 sm:h-56 relative z-10"
                >
                  <img
                    src="https://framerusercontent.com/images/LSyUU59PqiiX3GNMxMMlFDJb8I.png?width=478&height=478"
                    alt="Globe"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,117,255,0.4)]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Feature 3: Enterprise data sources */}
            <div
              id="feature-03"
              className="relative w-full rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-6 sm:p-10 flex flex-col xl:flex-row items-center justify-between gap-8"
            >
              <div className="flex-1 max-w-lg space-y-6">
                <div className="space-y-3">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    Enterprise data sources
                  </h4>
                  <p className="text-sm sm:text-base text-[#b0bed9] leading-relaxed">
                    Our design approach is ecosystem agnostic, allowing you to choose how you connect your ERP, databases, CRM, and cloud storage securely.
                  </p>
                </div>

                {/* Point Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {['SharePoint', 'SAP', 'Slack', 'Confluence'].map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-[#d1d4e3]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-2.5 rounded-xl bg-[#0c0f16] border border-[#2f3950] font-semibold text-sm hover:border-white/30 transition-colors"
                  >
                    <span className="cosmoq-gradient-text">Start Setup</span>
                  </button>
                </div>
              </div>

              {/* Graphic Side with Data Connection Streams */}
              <div className="w-full xl:w-[420px] aspect-[4/3] relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/rYyqmKb6ZW8scPMDoDnkLicukfc.png?width=591&height=692"
                  alt="Enterprise Connectors"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* Connector Nodes Overlay */}
                <div className="relative z-10 grid grid-cols-3 gap-4 p-4">
                  {['SAP', 'Salesforce', 'Snowflake', 'Oracle', 'Postgres', 'SharePoint'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      animate={{ y: [0, (i % 2 === 0 ? -4 : 4), 0] }}
                      transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}
                      className="px-3 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-center text-[11px] font-semibold text-white shadow-lg"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
