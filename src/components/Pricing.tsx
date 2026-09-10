import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { SectionTag } from './SectionTag';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onOpenContact: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenContact }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start gap-6 mb-12">
          <SectionTag
            label="PRICING"
            iconSvg={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
              Flexible Plans for Every
            </h2>
            <p className="text-base text-[#b0bed9] max-w-sm">
              Choose the plan that fits your team and scales with your business.
            </p>
          </div>
        </div>

        {/* Monthly / Yearly Billing Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 mb-12">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-white text-black shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              billingCycle === 'yearly'
                ? 'bg-white text-black shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <span>Yearly</span>
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold">
              30% off
            </span>
          </button>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden border border-[#7da4ff29] bg-[#06070a] p-8 flex flex-col justify-between"
              >
                {/* Background Gradient Texture */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
                  style={{ backgroundImage: `url(${plan.bgGradientUrl})` }}
                />

                <div className="relative z-10 space-y-6">
                  {/* Card Title & Pricing */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                        {plan.name}
                      </h4>
                      {plan.popular && (
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-400">
                          Popular
                        </span>
                      )}
                    </div>

                    {!plan.isEnterprise ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm text-[#9ba9c4]">/month</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-white">Custom</div>
                        <p className="text-xs text-[#9ba9c4] leading-relaxed">
                          {plan.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenContact(plan.name)}
                    className="w-full py-3 rounded-xl bg-black text-white font-semibold text-sm cosmoq-btn-glow border border-white/40 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Contact Us
                  </button>

                  <div className="h-[1px] w-full bg-white/10" />

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="h-[2px] w-6 bg-white/40 rounded-full" />
                  <span className="text-xs text-[#9ba9c4] font-medium">{plan.trustedCount}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
