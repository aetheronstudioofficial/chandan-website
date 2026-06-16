'use client';

import { motion } from 'framer-motion';
import { Calendar, ShieldAlert, Award, Star } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2021',
    title: 'Club Foundation',
    description: 'JFC was established with a small studio to promote fitness in Jagdishpur, Bihar.',
  },
  {
    year: '2023',
    title: 'Expansion Phase',
    description: 'Expanded gym space, upgraded weights section, and introduced certified personal coaching.',
  },
  {
    year: '2025',
    title: 'Modern Upgrade',
    description: 'Introduced high-tech cardio machines, boxing rings, and specialized cross-fit zones.',
  },
];

interface AchievementItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}

const achievements: AchievementItem[] = [
  { icon: Award, title: 'Certified Staff', value: '100%' },
  { icon: Star, title: 'Google Rating', value: '4.3 ★' },
  { icon: Calendar, title: 'Daily Support', value: '17 Hrs' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-brand-dark-gray overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 glow-grid pointer-events-none opacity-20" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Collages / Visual Section */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Primary Image */}
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full h-[350px] md:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
            </motion.div>

            {/* Experience Badge overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-6 bg-gradient-brand text-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center text-center w-36 h-36 md:w-40 md:h-40 border border-white/10 animate-float-fast"
            >
              <span className="text-4xl md:text-5xl font-black font-heading leading-none">5+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold mt-1">
                Years of <br /> Excellence
              </span>
            </motion.div>
          </div>

          {/* Right: Copywriting / Timeline Section */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-red mb-3 block">
                About Our Journey
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6">
                Transforming Lives in <span className="text-gradient">Jagdishpur</span>
              </h2>
              <p className="text-gray-300 font-body font-light text-sm md:text-base leading-relaxed mb-6">
                Jagdishpur Fitness Club is dedicated to helping members achieve their fitness goals through world-class equipment, professional trainers, and a motivating environment. We believe that fitness is a journey, not a destination, and we are here to support you every single step of the way.
              </p>

              {/* Achievement Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {achievements.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 bg-white/5 border border-white/5 rounded-xl text-center group hover:border-brand-red/30 transition-colors"
                    >
                      <Icon className="w-5 h-5 mx-auto text-brand-orange mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-xl font-bold font-heading text-white">{item.value}</div>
                      <div className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold">{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-6 relative pl-4 border-l border-white/10">
              <h3 className="text-xl font-bold uppercase text-white tracking-wider mb-2">Our Milestones</h3>
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group pl-6"
                >
                  {/* Timeline bullet */}
                  <span className="absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full bg-brand-black border-2 border-brand-red group-hover:bg-brand-orange transition-colors" />
                  
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-brand-orange font-heading">{item.year}</span>
                    <span className="h-[1px] w-4 bg-white/10" />
                    <h4 className="text-sm font-bold uppercase text-white tracking-wider">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-xs font-light font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
