import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';

// Dynamically import below-the-fold sections to reduce initial bundle size
const Programs = dynamic(() => import('@/components/Programs'));
const Membership = dynamic(() => import('@/components/Membership'));
const Trainers = dynamic(() => import('@/components/Trainers'));
const BmiCalculator = dynamic(() => import('@/components/BmiCalculator'));
const Gallery = dynamic(() => import('@/components/Gallery'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main content grid layout */}
      <main className="flex-1 w-full">
        {/* Full-screen Hero Section */}
        <Hero />

        {/* Scroll-triggered counters */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Quality/Features Section */}
        <WhyChooseUs />

        {/* Exercises/Programs Grid */}
        <Programs />

        {/* Membership & Pricing Plans */}
        <Membership />

        {/* Coaches Profiles */}
        <Trainers />

        {/* BMI Calculator Diagnostic */}
        <BmiCalculator />

        {/* Responsive Lightbox Gallery */}
        <Gallery />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Contact Form & Greyscale Google Map */}
        <Contact />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
