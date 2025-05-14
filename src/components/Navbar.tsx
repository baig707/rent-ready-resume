
import React, { useState } from 'react';
import { Menu, X, Briefcase, GraduationCap, Settings, User, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Home', icon: <User size={18} /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { href: '#education', label: 'Education', icon: <GraduationCap size={18} /> },
    { href: '#skills', label: 'Skills', icon: <Settings size={18} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="bg-portfolio-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-bold text-portfolio-primary">
              Your Name
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-portfolio-dark-purple hover:bg-portfolio-primary hover:text-portfolio-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-portfolio-dark-purple hover:text-portfolio-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-portfolio-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-portfolio-dark-purple hover:bg-portfolio-primary hover:text-portfolio-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
