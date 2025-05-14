
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-portfolio-dark-purple text-portfolio-soft-gray py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with React, Tailwind CSS, and Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
