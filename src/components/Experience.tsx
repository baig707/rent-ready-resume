
import React from 'react';
import Section from './Section';
import { BriefcaseBusiness, CalendarDays, Check } from 'lucide-react';

const experiences = [
  {
    title: 'Sr. Lettings Administrator',
    company: 'MR Sales and Lettings – Remote, Reading, UK',
    period: 'July 2023 – Present',
    responsibilities: [
      'Manage the full lettings process from marketing properties to finalizing contracts.',
      'Conduct property viewings, handle tenant inquiries, and facilitate negotiations.',
      'Oversee property listings across multiple platforms (Street, Airbnb, Lodgify, Booking.com, VRBO).',
      'Coordinate maintenance requests, liaising with contractors and property owners for efficient issue resolution.',
      'Ensure compliance with property regulations, including HMO license renewals.',
      'Utilize CRM systems to track property status, manage client relationships, and streamline workflow.',
    ],
  },
];

const ExperienceCard: React.FC<typeof experiences[0]> = ({ title, company, period, responsibilities }) => (
  <div className="card-style mb-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center mb-3">
      <BriefcaseBusiness className="text-portfolio-primary mr-3" size={24} />
      <h3 className="text-xl font-semibold text-portfolio-dark-purple">{title}</h3>
    </div>
    <p className="text-md text-portfolio-secondary mb-1">{company}</p>
    <div className="flex items-center text-sm text-portfolio-neutral-gray mb-4">
      <CalendarDays className="mr-2" size={16} />
      <span>{period}</span>
    </div>
    <ul className="list-none space-y-2">
      {responsibilities.map((resp, index) => (
        <li key={index} className="flex items-start">
          <Check className="text-portfolio-accent mr-2 mt-1 flex-shrink-0" size={18} />
          <span className="text-portfolio-neutral-gray">{resp}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-portfolio-soft-gray">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
