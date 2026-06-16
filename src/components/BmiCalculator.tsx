'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Activity, ArrowRight, RotateCcw } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function BmiCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) return;

    // BMI formula: weight (kg) / [height (m)]^2
    const heightInMeters = h / 100;
    const computedBmi = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));
    setBmi(computedBmi);

    let cat = '';
    let adv = '';

    if (computedBmi < 18.5) {
      cat = 'Underweight';
      adv = 'We recommend prioritizing strength training and a nutrient-dense caloric surplus diet to build healthy muscle mass.';
    } else if (computedBmi >= 18.5 && computedBmi < 25) {
      cat = 'Normal Weight';
      adv = 'Excellent job! Your weight is in the ideal healthy range. Maintain your current fitness regime and a balanced diet.';
    } else if (computedBmi >= 25 && computedBmi < 30) {
      cat = 'Overweight';
      adv = 'Consider increasing cardio density and structure a moderate caloric deficit. Focus on strength training to preserve muscle.';
    } else {
      cat = 'Obese';
      adv = 'Prioritize consistent cardiovascular exercises, structured resistance training, and consulting a professional nutritionist.';
    }

    setCategory(cat);
    setAdvice(adv);
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
    setAdvice('');
  };

  // Get color based on category
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Underweight':
        return 'text-blue-400 border-blue-400/20 bg-blue-500/5';
      case 'Normal Weight':
        return 'text-green-400 border-green-400/20 bg-green-500/5';
      case 'Overweight':
        return 'text-yellow-400 border-yellow-400/20 bg-yellow-500/5';
      case 'Obese':
        return 'text-brand-red border-brand-red/20 bg-brand-red/5';
      default:
        return 'text-white';
    }
  };

  return (
    <section id="bmi-calculator" className="relative py-24 bg-brand-dark-gray overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 glow-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[130px] pointer-events-none" />

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
              Health Diagnostics
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Check Your <span className="text-gradient">BMI Score</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              Body Mass Index is a quick screening indicator for health risks. Calculate your score in seconds and view custom guidance.
            </p>
          </motion.div>
        </div>

        {/* Form and Result Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-4xl mx-auto">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-brand-black/60 border border-white/5 backdrop-blur-md rounded-3xl shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold uppercase text-white mb-6 flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-orange" />
                <span>BMI Calculator</span>
              </h3>

              <form onSubmit={calculateBmi} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="height-input" className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                    Height (cm)
                  </label>
                  <input
                    id="height-input"
                    type="number"
                    required
                    min="1"
                    max="300"
                    placeholder="e.g. 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-brand-gray/60 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all duration-300 font-body text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="weight-input" className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    id="weight-input"
                    type="number"
                    required
                    min="1"
                    max="500"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-brand-gray/60 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all duration-300 font-body text-sm"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm bg-gradient-brand text-white shadow-lg shadow-brand-red/20 hover:scale-103 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Calculate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  {(weight || height || bmi) && (
                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all duration-300"
                      aria-label="Reset Calculator"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right: Diagnostic Results */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {bmi === null ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 h-full min-h-[320px] bg-brand-black/30 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center text-gray-400"
                >
                  <Activity className="w-12 h-12 text-gray-600 mb-4 animate-pulse" />
                  <p className="text-sm font-body font-light">
                    Enter your height and weight details to retrieve your body mass parameters.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 h-full bg-brand-black/60 border border-white/5 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Background Glow corresponding to categories */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-current opacity-5 blur-3xl pointer-events-none" />
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1 block">Your Calculated Score</span>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-6xl font-black font-heading text-gradient">{bmi}</span>
                      <span className="text-sm uppercase tracking-wider font-semibold text-gray-400 font-body">BMI Score</span>
                    </div>

                    {/* Category Label */}
                    <div className={cn("text-sm font-bold uppercase tracking-widest px-4 py-2 border rounded-xl w-max mb-6", getCategoryColor(category))}>
                      {category}
                    </div>

                    {/* Visual Gauge Meter */}
                    <div className="relative w-full h-2.5 bg-brand-gray rounded-full mb-8 overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-4 h-full pointer-events-none">
                        <div className="border-r border-black/20 bg-blue-500/30" />
                        <div className="border-r border-black/20 bg-green-500/30" />
                        <div className="border-r border-black/20 bg-yellow-500/30" />
                        <div className="bg-brand-red/30" />
                      </div>
                      
                      {/* Meter Slider pin */}
                      <motion.div
                        initial={{ left: 0 }}
                        animate={{ 
                          // Map BMI ranges: <18.5 => 12.5%, 18.5-25 => 37.5%, 25-30 => 62.5%, >30 => 87.5%
                          left: `${
                            bmi < 18.5 
                              ? Math.max(5, (bmi / 18.5) * 25 - 5) 
                              : bmi < 25 
                              ? 25 + ((bmi - 18.5) / 6.5) * 25
                              : bmi < 30 
                              ? 50 + ((bmi - 25) / 5) * 25
                              : Math.min(95, 75 + ((bmi - 30) / 10) * 25)
                          }%` 
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="absolute top-0 -translate-x-1/2 w-3.5 h-full bg-white shadow-xl ring-2 ring-brand-red rounded-full"
                      />
                    </div>

                    <p className="text-gray-300 text-sm font-light leading-relaxed font-body">
                      {advice}
                    </p>
                  </div>

                  <div className="mt-8 text-[10px] text-gray-500 uppercase tracking-wider font-semibold font-body border-t border-white/5 pt-4">
                    Note: BMI classifications do not account for muscle mass variations.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
