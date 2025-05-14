
import React from 'react';
import Section from './Section';
import { Mail, Phone, Link as LinkIcon } from 'lucide-react'; // Renamed Link to LinkIcon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted! (This is a placeholder)");
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-portfolio-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-portfolio-neutral-gray mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="text-portfolio-primary mr-3" size={22} />
              <div>
                <h4 className="font-semibold text-portfolio-dark-purple">Email</h4>
                <a href="mailto:youremail@example.com" className="text-portfolio-accent hover:underline">
                  youremail@example.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-portfolio-primary mr-3" size={22} />
              <div>
                <h4 className="font-semibold text-portfolio-dark-purple">Phone</h4>
                <a href="tel:+1234567890" className="text-portfolio-accent hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <LinkIcon className="text-portfolio-primary mr-3" size={22} />
              <div>
                <h4 className="font-semibold text-portfolio-dark-purple">LinkedIn</h4>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
             {/* Add more contact methods like GitHub if needed */}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 card-style p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark-purple mb-1">Full Name</label>
              <Input type="text" name="name" id="name" required className="w-full bg-portfolio-soft-gray focus:ring-portfolio-primary focus:border-portfolio-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark-purple mb-1">Email Address</label>
              <Input type="email" name="email" id="email" required className="w-full bg-portfolio-soft-gray focus:ring-portfolio-primary focus:border-portfolio-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark-purple mb-1">Message</label>
              <Textarea name="message" id="message" rows={4} required className="w-full bg-portfolio-soft-gray focus:ring-portfolio-primary focus:border-portfolio-primary" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-portfolio-white">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
