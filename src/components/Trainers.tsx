'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { trainers } from '@/data/gymData';

export default function Trainers() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="trainers" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

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
              Elite Fitness Mentors
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Meet Our <span className="text-gradient">Certified Trainers</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              Achieve peak performance with guidance from our passionate, certified industry coaches specializing in diverse fitness protocols.
            </p>
          </motion.div>
        </div>

        {/* Trainers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-brand-gray border border-white/5 shadow-2xl flex flex-col h-[480px]"
            >
              {/* Trainer Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 pointer-events-none">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-brand-black/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

              {/* Hover Glow Accent line */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20" />

              {/* Content Panel */}
              <div className="relative z-10 mt-auto p-6 md:p-8 flex flex-col justify-end">
                {/* Role Badge */}
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full w-max mb-3">
                  {trainer.role}
                </span>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-white font-heading tracking-wide mb-2 group-hover:text-brand-orange transition-colors">
                  {trainer.name}
                </h3>

                {/* Bio (sliding up/fading in on hover) */}
                <p className="text-gray-300 text-xs font-light font-body leading-relaxed mb-6 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {trainer.bio}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 mb-4" />

                {/* Social Links */}
                <div className="flex gap-4 items-center">
                  {trainer.socials.instagram && (
                    <a
                      href={trainer.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-red transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                  )}
                  {trainer.socials.twitter && (
                    <a
                      href={trainer.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-red transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  )}
                  {trainer.socials.facebook && (
                    <a
                      href={trainer.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-red transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
