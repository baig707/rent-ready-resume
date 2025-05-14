
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-8 text-center"> {/* Use theme accent (Ocean Blue) */}
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

