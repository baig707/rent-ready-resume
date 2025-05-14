
import React from 'react';
import { Button } from '@/components/ui/button'; // Using shadcn button

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-400 text-white section-padding min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Hello, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            A dedicated and skilled Lettings Administrator with a background in Computer Science, passionate about property management and client satisfaction.
          </p>
          <div className="space-x-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-violet-700 hover:bg-gray-100 hover:text-violet-800 border-white hover:border-gray-100"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="default" 
              size="lg"
              className="bg-indigo-400 text-white hover:bg-indigo-500"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
