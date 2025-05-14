
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark-purple animate-fade-in-up">{title}</h2>
        <div className="animate-fade-in-up animation-delay-200">
          {children}
        </div>
      </div>
    </section>
  );
};

// Helper for animation delays - you might want this in a utils file later
// For now, just add it directly in components or use inline styles
// e.g., style={{ animationDelay: '0.2s' }}

export default Section;
