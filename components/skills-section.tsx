'use client';
import React, { useState } from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SkillCategory } from './skill-category';

type Props = {};
type Item = {
  name: string;
  logo: string;
};

const frontends = [
  {
    name: 'JavaScript',
    logo: '/javascript.svg',
  },
  {
    name: 'TypeScript',
    logo: '/typescript.svg',
  },
  {
    name: 'React',
    logo: '/images/icons8-react.svg',
  },
  {
    name: 'Next.js',
    logo: '/nextjs-icon-dark-background.svg',
  },
  {
    name: 'TailwindCSS',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name:'Angular',
    logo:'angular.svg',
  },
  {
    name: 'HTML',
    logo: '/images/icons8-html.svg',
  },
  {
    name: 'CSS/SASS',
    logo: '/images/icons8-css.svg',
  },
  {
    name: 'Wordpress',
    logo: '/wordpress.svg',
  },
  {
    name: 'Elementor',
    logo: 'elementor.svg',
  }
];

const backends = [
  {
    name: 'Node.js',
    logo: '/node-js.png',
  },
  {
    name: 'Express.js',
    logo: '/icons8-express-js.svg',
  },
  {
    name: 'Python',
    logo: '/images/icons8-python.svg',
  },
  {
    name: 'Firebase',
    logo: '/firebase.svg',
  },
  {
    name: 'REST APIs',
    logo: '/rest-api.png',
  },
];
const orm = [
  {
    name: 'Prisma',
    logo: '/icons8-express-js.svg',
  },
  {
    name: 'Drizzle ORM',
    logo: '/node-js.svg',
  },
];

const databases = [
  {
    name: 'PostgreSQL',
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
  },
  {
    name: 'Vercel',
    logo: '/vercel-icon-light.svg',
  },
  {
    name: 'CI/CD',
    logo: '/ci-cd-icon.svg',
  },
];

const paas = [
  {
    name: 'Vercel',
    logo: '/vercel-icon-light.svg',
  },
  {
    name: 'Netlify',
    logo: '/netlify-logo.svg',
  },
  {
    name: 'Heroku',
    logo: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
  },
];
const baas = [
  {
    name: 'Supabase',
    logo: '/vercel-icon-light.svg',
  },
  {
    name: 'Firebase',
    logo: '/netlify-logo.svg',
  },
];

const mograph
    = [

  {
    name: 'Blender',
    logo: '/blender.png',
  },
  {
    name: 'Spline',
    logo: '/spline.png',
  },
  {
    name: 'AfterEffects',
    logo: '/ae.svg',
  },
  {
    name: 'Animate',
    logo: '/an.svg',
  },
  {
    name: 'Illustrator',
    logo: '/ai.svg',
  },

  {
    name: 'PremierePro',
    logo: '/pr.svg',
  },
  {
    name: 'PhotoShop',
    logo: '/ps.svg',
  },
  {
    name: 'Dimension',
    logo: '/dn.svg',
  },
];

const tools = [
  {
    name: 'Git',
    logo: '/images/icons8-github.svg',
  },
  {
    name: 'JetBrains',
    logo: '/jetbrains.svg',
  },
  {
    name: 'Agile/Scrum',
    logo: '/images/icons8-agile.png',
  },
  {
    name: 'Figma',
    logo: '/images/icons8-figma.svg',
  },
  {
    name: 'NPM',
    logo: '/images/icons8-npm.png',
  },
  {
    name: 'CreativeCloud',
    logo: '/cc.svg',
  },
  {
    name: 'AdobeStock',
    logo: '/st.svg',
  },
];

const extra = [
  {
    name: 'C++',
    logo: '/icons8-c-plus-plus.svg',
  },
];

const content = [
  {
    title: 'Front-End Development',
    description:
      'I build engaging, responsive interfaces using JavaScript, TypeScript, React, Next.js, Angular, TailwindCSS, CSS/SASS, and WordPress with Elementor. My goal is to deliver clean, high-performance user experiences.',
  },
  {
    title: 'Back-End Development',
    description:
    'I create scalable server solutions with Node.js, Express.js, and Firebase, crafting robust REST APIs. By leveraging PostgreSQL, SQL, and MongoDB along with optimized CI/CD workflows on platforms like Vercel, I ensure secure and efficient systems.',
  },
  {
    title: 'Databases & DevOps' ,
    description:
      'I efficiently manage data with PostgreSQL, SQL, and MongoDB while streamlining deployments through CI/CD workflows on platforms like Vercel.',
  },
  {
    title: 'Motion & Visual Storytelling',
    description:
      'I bring ideas to life through motion design. Using Adobe Premiere Pro, After Effects, Photoshop, Illustrator, Animate, Blender, Three.js, and Aero, I craft dynamic visuals that tell compelling stories and elevate brands.',
  },
  {
    title: 'Development Tools & Workflow',
    description:
      'I keep my process efficient with Git, Agile/Scrum, Figma, and package managers like npm, yarn, and pnpm—backed by the full power of Adobe Creative Cloud for a polished finish.',
  },
];

const SkillsSection = (props: Props) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleCategoryInView = (index: number) => {
    console.log('Category in view', index);
    setActiveCategoryIndex(index);
  };
  return (
    <div
      id="skills"
      className="bg-background pt-60 pb-40 transition duration-300"
    >
      <div className="text-left md:text-center container max-w-5xl mx-auto">
        <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          My skills
        </TypographyH1>
        <TypographyP className="mt-4 lg:mt-6">
          My expertise spans modern full-stack development and innovative motion design, empowering me to transform complex ideas into immersive digital experiences.
        </TypographyP>
      </div>

      <div className="mt-20 container max-w-6xl flex gap-x-10 relative">
        <div className="flex-1 relative">
          <SkillCategory
            title="Front-End Development"
            items={frontends}
            onEnter={() => handleCategoryInView(0)}
          />
          <SkillCategory
            title="Back-End Development"
            items={backends}
            onEnter={() => handleCategoryInView(1)}
          />
          <SkillCategory
            title="Databases Development"
            items={databases}
            onEnter={() => handleCategoryInView(2)}
          />
          <SkillCategory
            title="Motion & Visual Storytelling"
            items={mograph}
            onEnter={() => handleCategoryInView(3)}
          />
          <SkillCategory
            title="Development Tools & Workflow"
            items={tools}
            onEnter={() => handleCategoryInView(4)}
          />
        </div>
        <div className="flex-1 h-full sticky top-[30%]">
          <h2 className="mt-20 text-2xl sm:text-3xl lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {content[activeCategoryIndex].title}
          </h2>
          <p className="mt-2 text-muted-foreground font-light">
            {content[activeCategoryIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
