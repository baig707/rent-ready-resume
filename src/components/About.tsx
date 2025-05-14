
import React from 'react';
import Section from './Section';
import { UserCircle } from 'lucide-react'; // Or any other relevant icon

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-portfolio-white">
      <div className="max-w-3xl mx-auto text-center">
        <UserCircle size={48} className="mx-auto mb-6 text-portfolio-primary" />
        <p className="text-lg md:text-xl text-portfolio-neutral-gray leading-relaxed">
          Results-driven property professional with hands-on experience in lettings, property management, and CRM systems. Skilled in managing the entire lettings process from property advertising to contract finalization. Adept at handling maintenance coordination, ensuring HMO compliance, and managing listings across multiple platforms. Strong communication, negotiation, and organizational skills with a keen ability to multitask in fast-paced environments. Seeking to contribute my expertise to a dynamic estate agency.
        </p>
      </div>
    </Section>
  );
};

export default About;
