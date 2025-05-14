
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-violet-900 text-white py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Muneeb Baig. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with React, Tailwind CSS, and Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
