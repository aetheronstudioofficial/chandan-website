'use client';

import { motion, Variants } from 'framer-motion';
import { programs } from '@/data/gymData';
import { Clock, BarChart } from 'lucide-react';

export default function Programs() {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="programs" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

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
              Our Training Tracks
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Explore Our <span className="text-gradient">Programs</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              Tailored training paths designed by experts to fit your active lifestyle, whether you seek strength, mobility, or endurance.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl bg-brand-gray border border-white/5 h-[360px] flex flex-col justify-end"
            >
              {/* Card Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${program.image})` }}
              />

              {/* Card Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Content */}
              <div className="relative z-10 p-8 flex flex-col gap-3">
                {/* Meta details */}
                <div className="flex gap-4 text-xs font-semibold text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-red" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{program.intensity}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold uppercase text-white font-heading tracking-wide group-hover:text-brand-orange transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs font-light font-body leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {program.description}
                </p>

                {/* Button overlay indication */}
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-red flex items-center gap-1 group-hover:text-brand-orange transition-colors cursor-pointer">
                  <span>Learn More</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
