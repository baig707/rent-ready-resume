
import React from 'react';
import Section from './Section';
import { BriefcaseBusiness, CalendarDays, Check } from 'lucide-react';

const experiences = [
  {
    title: 'Sr. Lettings Administrator',
    company: 'MR Sales and Lettings – Remote, Reading, UK',
    period: 'July 2023 – Present',
    responsibilities: [
      'Managed the complete lettings process, from property marketing to contract finalization.',
      'Conducted property viewings and facilitated tenant negotiations and inquiries.',
      'Maintained and updated property listings on platforms including Street, Airbnb, Lodgify, Booking.com, and VRBO.',
      'Coordinated maintenance tasks, liaising with contractors and landlords to resolve issues efficiently.',
      'Ensured regulatory compliance, including HMO licensing and renewals.',
      'Used CRM systems to manage workflows, track property statuses, and maintain client relationships.',
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
