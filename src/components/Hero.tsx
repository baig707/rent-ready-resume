
import React from 'react';
import { Button } from '@/components/ui/button'; // Using shadcn button

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-light-purple text-portfolio-white section-padding min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-portfolio-white">
            Hello, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-portfolio-soft-gray max-w-2xl mx-auto">
            A dedicated and skilled Lettings Administrator with a background in Computer Science, passionate about property management and client satisfaction.
          </p>
          <div className="space-x-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-portfolio-white text-portfolio-primary hover:bg-portfolio-soft-gray hover:text-portfolio-primary border-portfolio-white hover:border-portfolio-soft-gray"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="default" 
              size="lg"
              className="bg-portfolio-accent text-portfolio-white hover:bg-opacity-80"
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
