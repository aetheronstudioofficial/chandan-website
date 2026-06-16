'use client';

import { motion, Variants } from 'framer-motion';
import { pricingPlans } from '@/data/gymData';
import { Check, Dumbbell } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Membership() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="membership" className="relative py-24 bg-brand-dark-gray overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 glow-grid pointer-events-none opacity-25" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-red mb-3 block">
              Flexible Memberships
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Select Your <span className="text-gradient">Membership Plan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              No sign-up fees or hidden contracts. Choose the subscription model that supports your ultimate fitness roadmap.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan) => {
            const isPremium = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={cn(
                  "relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 border overflow-hidden",
                  isPremium 
                    ? "bg-brand-gray border-brand-red/50 shadow-[0_0_30px_rgba(230,57,70,0.15)] lg:scale-105 z-10"
                    : "bg-brand-black/60 border-white/5 backdrop-blur-sm shadow-xl hover:border-white/10"
                )}
              >
                {/* Popular Glow Ring Effect */}
                {isPremium && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-brand-red/25 to-brand-orange/25 blur-3xl pointer-events-none" />
                )}

                {/* Main Card Content */}
                <div>
                  {/* Header / Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className={cn("text-2xl font-bold uppercase tracking-wider font-heading", isPremium ? "text-gradient" : "text-white")}>
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-xs font-light font-body mt-1">{plan.description}</p>
                    </div>
                    {isPremium && (
                      <span className="bg-gradient-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl md:text-5xl font-black text-white font-heading">{plan.price}</span>
                    <span className="text-gray-400 text-xs ml-2 uppercase tracking-wider font-semibold font-body">/ {plan.period}</span>
                  </div>

                  {/* Features Divider */}
                  <div className="w-full h-[1px] bg-white/10 mb-8" />

                  {/* Features List */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-light font-body text-gray-300">
                        <span className={cn(
                          "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border",
                          isPremium 
                            ? "bg-brand-red/10 border-brand-red text-brand-red" 
                            : "bg-white/5 border-white/10 text-brand-orange"
                        )}>
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={cn(
                    "w-full py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all duration-300 mt-auto flex items-center justify-center gap-2 group/btn",
                    isPremium
                      ? "bg-gradient-brand text-white shadow-lg shadow-brand-red/20 hover:scale-103 active:scale-98"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 hover:scale-103 active:scale-98"
                  )}
                >
                  <Dumbbell className="w-4 h-4 text-white group-hover/btn:rotate-45 transition-transform" />
                  <span>Choose Plan</span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
