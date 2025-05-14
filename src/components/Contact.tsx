
import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react'; // Added MapPin, removed LinkIcon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted! (This is a placeholder for muneebbaig71@gmail.com)");
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
                <a href="mailto:muneebbaig71@gmail.com" className="text-portfolio-accent hover:underline">
                  muneebbaig71@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-portfolio-primary mr-3" size={22} />
              <div>
                <h4 className="font-semibold text-portfolio-dark-purple">Phone</h4>
                <a href="tel:+953455901816" className="text-portfolio-accent hover:underline">
                  +953455901816
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-portfolio-primary mr-3" size={22} />
              <div>
                <h4 className="font-semibold text-portfolio-dark-purple">Address</h4>
                <p className="text-portfolio-neutral-gray">
                  Ward no 8, Gujar Khan, Dist Rawalpindi, Pakistan
                </p>
              </div>
            </div>
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
