'use client';

import { motion, Variants } from 'framer-motion';
import { Dumbbell, Flame, Target, Sparkles, Users, Heart } from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const features: FeatureItem[] = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Tons of free weights, power racks, high-end hammer strength machines, and platforms.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Flame,
    title: 'Cardio Zone',
    description: 'High-end treadmills, spin bikes, ellipticals, and rowers with interactive interfaces.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Target,
    title: 'Boxing Area',
    description: 'Professional-grade heavy bags, speed bags, striking shields, and a sparring ring.',
    color: 'from-red-600 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Yoga Sessions',
    description: 'Dedicated studio space with yoga mats, blocks, and mobility equipment for core balance.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Users,
    title: 'Personal Trainers',
    description: '1-on-1 personalized programs, active feedback, and custom nutrition plans.',
    color: 'from-blue-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'Clean Facilities',
    description: 'Daily multiple sanitization rounds, fresh lockers, hot showers, and filtered water.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function WhyChooseUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="why-choose-us" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-red mb-3 block">
              Core Values & Quality
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Why Choose <span className="text-gradient">JFC?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              We stand apart through premium amenities, professional staff guidance, and a motivating fitness culture built around your success.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Glow ring in card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                
                <div>
                  {/* Icon Wrapper */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold uppercase text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm font-light font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated progress-style line decoration */}
                <div className="mt-8 w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                  <div className={`absolute left-0 top-0 h-full w-0 group-hover:w-full bg-gradient-brand transition-all duration-700 ease-out`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
