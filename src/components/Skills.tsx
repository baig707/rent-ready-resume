
import React from 'react';
import Section from './Section';
import { CheckCheck, Wrench, Users, Award } from 'lucide-react'; // Added Award icon

const keySkills = [
  'Lettings & Tenancy Management',
  'Client Relationship Management',
  'Property Listings & CRM Management',
  'Maintenance Coordination',
  'HMO Compliance & Licensing',
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Responsibility',
  'Adaptability',
];

const technicalSkills = [
  'CRM Platforms: Street, Airbnb, Lodgify, Booking.com, VRBO, PriceLabs',
  'Microsoft Office & Google Workspace',
  'Property Listing & Management Software',
  'Revenue Management: PriceLabs',
];

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="card-style mb-8 md:mb-0">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-portfolio-dark-purple ml-3">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-portfolio-neutral-gray">
          <CheckCheck className="text-portfolio-accent mr-2 flex-shrink-0" size={18} />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills" className="bg-portfolio-soft-gray">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Key Skills" skills={keySkills} icon={<Award className="text-portfolio-primary" size={24} />} />
        <SkillCategory title="Soft Skills" skills={softSkills} icon={<Users className="text-portfolio-primary" size={24} />} />
        <SkillCategory title="Technical Skills" skills={technicalSkills} icon={<Wrench className="text-portfolio-primary" size={24} />} />
      </div>
    </Section>
  );
};

export default Skills;
