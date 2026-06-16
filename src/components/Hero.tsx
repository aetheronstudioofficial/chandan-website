'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Dumbbell, Award, Flame } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 bg-cover bg-center select-none"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Overlays & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-transparent to-brand-black/40" />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
        {/* Element 1: Dumbbell Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-[15%] p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-brand-red shadow-2xl"
        >
          <Dumbbell className="w-8 h-8" />
        </motion.div>

        {/* Element 2: Flame Icon */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[25%] left-[12%] p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-brand-orange shadow-2xl"
        >
          <Flame className="w-8 h-8" />
        </motion.div>

        {/* Element 3: Award Badge */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-[15%] p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-yellow-500 shadow-2xl"
        >
          <Award className="w-8 h-8" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center mt-12"
      >
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-300">
            Jagdishpur's Elite Fitness Hub
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight text-white mb-6 uppercase leading-none font-heading">
          JAGDISHPUR <br className="md:hidden" />
          <span className="text-gradient">FITNESS CLUB</span>
        </h1>

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl font-light tracking-wide text-gray-200 mb-4 max-w-2xl font-body"
        >
          Transform Your Body. Transform Your Life.
        </motion.p>

        {/* Bullet points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-semibold text-gray-400 mb-10 max-w-xl"
        >
          <span>Modern Equipment</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <span>Certified Trainers</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <span>Strength & Cardio</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('membership')}
            className="w-full sm:w-52 py-4 px-8 rounded-full font-bold uppercase tracking-wider bg-gradient-brand text-white shadow-lg shadow-brand-red/30 hover:scale-105 transition-transform duration-300 active:scale-98"
          >
            Join Now
          </button>
          <button
            onClick={() => handleScrollTo('membership')}
            className="w-full sm:w-52 py-4 px-8 rounded-full font-bold uppercase tracking-wider bg-transparent text-white border border-white/20 hover:border-brand-red hover:bg-white/5 transition-all duration-300 active:scale-98"
          >
            View Memberships
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-white" />
      </motion.div>
    </section>
  );
}
