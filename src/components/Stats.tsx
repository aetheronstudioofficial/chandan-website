'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function StatItem({ value, suffix = '', prefix = '', label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border border-white/5 relative overflow-hidden group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-2 flex items-center">
        {prefix && <span className="text-brand-orange mr-1">{prefix}</span>}
        <span className="text-gradient">{count}</span>
        {suffix && <span className="text-brand-red font-medium ml-0.5">{suffix}</span>}
      </span>
      
      <span className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gray-400 text-center relative z-10">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-16 bg-brand-dark-gray overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 glow-grid pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants}>
            <StatItem value={500} suffix="+" label="Active Members" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <StatItem value={10} suffix="+" label="Certified Trainers" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <StatItem value={50} suffix="+" label="Modern Machines" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            {/* Opening Time: 5 AM */}
            <StatItem value={5} suffix=" AM" label="Opening Daily" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
