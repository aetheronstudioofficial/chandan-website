'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '@/utils/cn';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const tempErrors: Partial<FormState> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      tempErrors.phone = 'Invalid phone number (must be 10 digits)';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData(initialFormState);

      // Trigger Confetti Blast!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E63946', '#FF6B35', '#FFFFFF'],
      });

      // Auto-hide toast
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 glow-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

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
              Reach Our Team
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body font-light text-sm md:text-base leading-relaxed">
              Have questions about memberships or training programs? Send us a message or visit our club today.
            </p>
          </motion.div>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Panel: Contact info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-brand-gray border border-white/5 rounded-3xl flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold uppercase text-white tracking-wider mb-2 font-heading">
                Contact Information
              </h3>

              {/* Timings */}
              <div className="flex gap-4 items-start font-body">
                <div className="p-3 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-1">Timings</h4>
                  <p className="text-gray-300 text-xs font-light">Open Daily: 5:00 AM – 10:00 PM</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start font-body">
                <div className="p-3 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-1">Address</h4>
                  <p className="text-gray-300 text-xs font-light leading-relaxed">
                    FCHR+7MG, Utwarari Jangal Mahal,<br /> Jagdishpur, Bihar 802158
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {/* Call Now */}
                <a
                  href="tel:+91844417092" 
                  className="p-3 bg-brand-black hover:bg-brand-red/15 border border-white/5 hover:border-brand-red/30 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all text-gray-400 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Call Now</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/91844417092?text=Hello%20Jagdishpur%20Fitness%20Club!%20I'd%20like%20to%20know%20more%20about%20memberships."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-black hover:bg-green-500/15 border border-white/5 hover:border-green-500/30 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all text-gray-400 hover:text-white"
                >
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">WhatsApp</span>
                </a>

                {/* Get Directions */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=25.4781803,84.4417092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-black hover:bg-brand-orange/15 border border-white/5 hover:border-brand-orange/30 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all text-gray-400 hover:text-white"
                >
                  <Navigation className="w-4 h-4 text-brand-orange" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Directions</span>
                </a>
              </div>
            </motion.div>

            {/* Embedded Google Map (with premium styling) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/5 h-[240px] shadow-2xl group"
            >
              <iframe
                title="JFC Location Map"
                src="https://maps.google.com/maps?q=25.4781803,84.4417092&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-brand-red/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* Right Panel: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-brand-black/60 border border-white/5 backdrop-blur-md rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold uppercase text-white tracking-wider mb-6 font-heading">
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Rahul Singh"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full bg-brand-gray/60 border rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 font-body text-sm',
                        errors.name
                          ? 'border-brand-red focus:border-brand-red focus:ring-brand-red'
                          : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange'
                      )}
                    />
                    {errors.name && (
                      <p className="text-brand-red text-xs mt-1.5 font-light font-body">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full bg-brand-gray/60 border rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 font-body text-sm',
                        errors.email
                          ? 'border-brand-red focus:border-brand-red focus:ring-brand-red'
                          : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange'
                      )}
                    />
                    {errors.email && (
                      <p className="text-brand-red text-xs mt-1.5 font-light font-body">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={cn(
                      'w-full bg-brand-gray/60 border rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 font-body text-sm',
                      errors.phone
                        ? 'border-brand-red focus:border-brand-red focus:ring-brand-red'
                        : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange'
                    )}
                  />
                  {errors.phone && (
                    <p className="text-brand-red text-xs mt-1.5 font-light font-body">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your message details..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={cn(
                      'w-full bg-brand-gray/60 border rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 font-body text-sm resize-none',
                      errors.message
                        ? 'border-brand-red focus:border-brand-red focus:ring-brand-red'
                        : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange'
                    )}
                  />
                  {errors.message && (
                    <p className="text-brand-red text-xs mt-1.5 font-light font-body">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm bg-gradient-brand text-white shadow-lg shadow-brand-red/25 hover:scale-102 active:scale-98 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-4 bg-brand-gray border border-green-500/30 shadow-2xl rounded-2xl flex items-center gap-3 backdrop-blur-md max-w-sm"
          >
            <div className="p-2 bg-green-500/10 text-green-400 rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Form Submitted!</h4>
              <p className="text-gray-300 text-xs font-light mt-0.5 leading-relaxed font-body">
                Thank you! Our fitness consultant will contact you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
