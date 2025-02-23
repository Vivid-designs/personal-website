import { cn } from '@/lib/utils';
import React from 'react';
import { getExperienceSectionData } from '@/lib/sanity-utils';
import { TimelineItemCard } from './timeline-item-card';

type Props = {
  className?: string;
};

const experience = [
  {
    title: 'Founder Vivid Graphics',
    description: [
      'I spearhead the creation of over 20 integrated websites and animations that drive a 60% client retention rate.',
      'From conceptual design to post-launch support, I deliver innovative digital solutions that leave a lasting impact.',
    ],
    organisation: 'Vivid Graphics',
    startDate: new Date('2022-09'),
    endDate: new Date('2025-02'),
    is_present: true,
    keywords: [
      'Adobe Creative Cloud',
      'React',
      'Javascript',
      'SCSS',
      'Databases',
      'Wordpress',
      'Web Development',
    ],
  },
  {
    title: 'Lead Web Developer & Athlete',
    description: [
      'Merging my passion for technology with my athletic background, I built the company’s first responsive MERN-stack platform—cutting investor onboarding time by 40%.',
      'My design of 15+ social media video campaigns has not only boosted engagement but also automated sponsor communications.',
    ],
    organisation: 'Phoenix Sports Group',
    startDate: new Date('2022-06'),
    endDate: new Date('2025-09'),
    is_present: true,
    keywords: [
      'MongoDB',
      'Express.js',
      'React',
      'JavaScript',
      'Node.js',
      'Next.js',
      'Tailwind CSS',
        'AfterEffects',
        'PremierePro',
    ],
  },
  {
    title: 'Web Developer & Video Producer',
    description: [
      'Provided one-on-one coding tutoring sessions, helping students grasp complex programming concepts, improve their coding skills, and successfully complete their projects, resulting in consistently positive feedback and improved student outcomes.',
      'Teach HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, and PostgreSQL. Provide clear, comprehensive instruction to help students master both foundational and advanced web technologies.',
    ],
    organisation: 'Attain Sports Management',
    startDate: new Date('2023-01'),
    endDate: new Date('2023-11'),
    is_present: false,
    keywords: [
      'Wordpress',
      'Elementor',
      'Premiere Pro',
      'After Effects',
      'Illustrator',
      'PhotoShop',
    ],
  },
  {
    title: 'Manager & Lead Developer ',
    description: [
      'I led a team in architecting secure portals for athletes and coaches using Node.js and Firebase, supporting over 200 user accounts.',
      'Mentoring three interns under Agile workflows, we delivered a production-ready MVP within just six weeks.',
    ],
    organisation: 'IX Internship',
    startDate: new Date('2024-05'),
    endDate: new Date('2024-10'),
    is_present: true,
    keywords: [
      'React',
      'TypeScript',
      'Next.js',
      'Material UI',
      'Tailwind CSS',
      'SCSS',
      'Google Cloud',
      'Firebase',
      'MongoDB',
      'Bootstrap',
    ],
  },
  {
    title: 'Junior Software Engineer',
    description: [
      'I managed user tickets, meticulously tracked bug logs, and implemented timely fixes to enhance the platform’s performance.',
      'created engaging onboarding videos that helped new users navigate the system with ease, significantly improving user understanding and satisfaction.',
    ],
    organisation: 'RealtyPA',
    startDate: new Date('2024-10'),
    endDate: new Date('2024-12'),
    is_present: false,
    keywords: [
      'Angular',
      'PostgresSQL',
      'JavaScript',
      'OpenAi Api',
      'Tailwind CSS',
      'Node.js',
      'After Effects',
      'Premiere Pro',
      'Figma',
    ],
  },
];

export const Timeline = async ({ className }: Props) => {
  return (
    <div className="container">
      <ol
        className={cn(
          className,
          'max-w-3xl mx-auto relative border-s border-gray-200 dark:border-gray-700 flex flex-col gap-10',
        )}
      >
        {experience.map((item, i) => (
          <TimelineItemCard key={i} {...item} />
        ))}
      </ol>
    </div>
  );
};
