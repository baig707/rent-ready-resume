
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About'; // Import the new About component
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-portfolio-soft-gray">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About /> {/* Add the About component here */}
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
