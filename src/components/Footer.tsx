'use client';

import { Dumbbell, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-brand-black border-t border-white/5 pt-20 pb-8 overflow-hidden font-body">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, 'home')}
              className="flex items-center gap-2 text-3xl font-black font-heading tracking-wider text-white hover:opacity-90 transition-opacity"
            >
              <Dumbbell className="h-7 w-7 text-brand-red" />
              <span>
                JFC<span className="text-brand-orange">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Jagdishpur's premier fitness destination. We offer top-tier coaches, world-class equipment, and a thriving community dedicated to full-body transformation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                aria-label="Instagram Page"
                className="p-2.5 bg-white/5 hover:bg-brand-red/15 border border-white/5 hover:border-brand-red/25 text-gray-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                aria-label="Twitter Account"
                className="p-2.5 bg-white/5 hover:bg-brand-red/15 border border-white/5 hover:border-brand-red/25 text-gray-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                aria-label="Facebook Page"
                className="p-2.5 bg-white/5 hover:bg-brand-red/15 border border-white/5 hover:border-brand-red/25 text-gray-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener"
                aria-label="YouTube Channel"
                className="p-2.5 bg-white/5 hover:bg-brand-red/15 border border-white/5 hover:border-brand-red/25 text-gray-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-base font-bold uppercase text-white tracking-widest font-heading">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Programs', id: 'programs' },
                { label: 'Memberships', id: 'membership' },
                { label: 'Our Trainers', id: 'trainers' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-gray-400 hover:text-brand-orange text-sm font-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-base font-bold uppercase text-white tracking-widest font-heading">
              Gym Location
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-gray-400">
              <li className="leading-relaxed">
                FCHR+7MG, Utwarari Jangal Mahal,<br /> Jagdishpur, Bihar 802158
              </li>
              <li>
                <span className="text-white font-medium uppercase text-xs tracking-wider block mb-1">Timings</span>
                Daily: 5:00 AM – 10:00 PM
              </li>
              <li>
                <span className="text-white font-medium uppercase text-xs tracking-wider block mb-1">Call Us</span>
                +91 84441 7092
              </li>
              <li>
                <span className="text-white font-medium uppercase text-xs tracking-wider block mb-1">Email Us</span>
                info@jagdishpurfitnessclub.com
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter subscription */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-base font-bold uppercase text-white tracking-widest font-heading">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Subscribe to get latest fitness guides, diets, and membership special events.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-red rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none transition-all text-xs"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 p-2 bg-gradient-brand text-white rounded-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 text-xs font-medium font-body animate-pulse">
                ✓ Successfully subscribed!
              </p>
            )}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500 font-light">
          <p>
            © 2026 Jagdishpur Fitness Club. All Rights Reserved. | Designed & Developed by{" "}
            <a
              href="https://www.aetheronstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-brand-red transition-colors font-semibold"
            >
              Aetheron Studio
            </a>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
