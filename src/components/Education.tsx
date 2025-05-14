
import React from 'react';
import Section from './Section';
import { GraduationCap, CalendarDays } from 'lucide-react';

const educationHistory = [
  {
    degree: 'BS Computer Science',
    institution: 'University Name (Details to be confirmed)', // Placeholder as per new info
    period: '2019 – 2023',
  },
];

const EducationCard: React.FC<typeof educationHistory[0]> = ({ degree, institution, period }) => (
  <div className="card-style transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center mb-3">
      <GraduationCap className="text-portfolio-primary mr-3" size={24} />
      <h3 className="text-xl font-semibold text-portfolio-dark-purple">{degree}</h3>
    </div>
    <p className="text-md text-portfolio-secondary mb-1">{institution}</p>
    <div className="flex items-center text-sm text-portfolio-neutral-gray">
      <CalendarDays className="mr-2" size={16} />
      <span>{period}</span>
    </div>
  </div>
);

const Education: React.FC = () => {
  return (
    <Section id="education" title="Educational History" className="bg-portfolio-white"> {/* Changed title slightly */}
      <div className="max-w-3xl mx-auto">
        {educationHistory.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
