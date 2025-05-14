
import React from 'react';
import { Button } from '@/components/ui/button'; // Using shadcn button

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="bg-gradient-to-br from-primary via-portfolio-ocean-blue to-portfolio-magenta-pink text-white section-padding min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Hello, I'm Muneeb Baig
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            An experienced Lettings Administrator and Property Management Specialist with a passion for optimizing property operations and delivering exceptional client service.
          </p>
          <div className="space-x-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary/90 border-white hover:border-gray-100 transition-colors duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300" // Use theme accent (Ocean Blue)
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

