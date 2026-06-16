'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { testimonials } from '@/data/gymData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 bg-brand-dark-gray overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 glow-grid pointer-events-none opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

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
              Success Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              What Our <span className="text-gradient">Members Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              Read direct testimonials from members who have transformed their health, body, and lifestyle at Jagdishpur Fitness Club.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-12 h-[340px] md:h-[300px] flex items-center justify-center">
          
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 p-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white hover:text-brand-red transition-all duration-300 z-20 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white hover:text-brand-red transition-all duration-300 z-20 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider Content */}
          <div className="w-full overflow-hidden h-full flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full flex flex-col items-center text-center p-6 md:p-10 glass-panel rounded-3xl border border-white/5 shadow-2xl relative"
              >
                {/* Large Background Quote Icon */}
                <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5 pointer-events-none" />

                {/* Stars Rating */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-base md:text-xl font-light font-body leading-relaxed text-gray-200 mb-8 max-w-2xl italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-red"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white font-heading tracking-wide">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider font-body">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === idx
                  ? 'w-8 bg-gradient-brand shadow-[0_0_8px_rgba(230,57,70,0.5)]'
                  : 'w-2.5 bg-white/10 hover:bg-white/25'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
