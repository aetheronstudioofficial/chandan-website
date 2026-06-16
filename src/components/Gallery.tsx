'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '@/data/gymData';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type CategoryFilter = 'all' | 'facilities' | 'workouts' | 'classes';

export default function Gallery() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const openLightbox = (id: string) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

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
              JFC In Action
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Our Training <span className="text-gradient">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              Take a virtual walkthrough of our state-of-the-art layout, dynamic workout zones, and active member class environments.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['all', 'facilities', 'workouts', 'classes'] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border',
                filter === cat
                  ? 'bg-gradient-brand border-transparent text-white shadow-lg shadow-brand-red/15'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <ZoomIn className="w-8 h-8 text-brand-orange animate-bounce" />
                  <h3 className="text-xl font-bold uppercase text-white font-heading tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-red">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white transition-colors z-55"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-6 p-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white transition-colors z-55 hidden md:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={showNext}
              className="absolute right-6 p-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white transition-colors z-55 hidden md:block"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expanded Image Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center gap-4"
            >
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
              
              <div className="text-center">
                <h3 className="text-2xl font-bold uppercase text-white font-heading tracking-wide">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-red mt-1">
                  {filteredItems[lightboxIndex].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
