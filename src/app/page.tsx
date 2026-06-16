import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Programs from '@/components/Programs';
import Membership from '@/components/Membership';
import Trainers from '@/components/Trainers';
import BmiCalculator from '@/components/BmiCalculator';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
