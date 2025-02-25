import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const projects = [
  {
    title: 'Spencesa.co.za',
    description:
      'A personal website built with Next.js 14 and TypeScript, by creating a dynamic platform for showcasing projects, resulting in a professional online presence and a valuable resource for sharing insights and connecting with the tech community. ',

    github: 'https://github.com/Vivid-designs',
    demo: 'https://spencesa.co.za',
    image: '/opengraph-image.png',
    size: 'col-span-1 md:col-span-2 row-span-1', // Horizontal project spanning two columns
  },
  {
    title: 'Phoenix Sports Group ',
    description:
      'At Phoenix Sports Group, I merged my passion for technology and athletics to create a responsive MERN-stack platform that cut investor onboarding time by 40%. I also designed and produced over 15 dynamic social media video campaigns, boosting brand engagement and driving digital transformation. ',

    github: '',
    demo: 'https://www.phoenixsportsgroup.co.za',
    image: '/PhoenixSportsGroup.png',
    size: 'col-span-1 md:col-span-2 row-span-1', // Standard size project
  },
  {
    title: 'Attain Sports Management',
    description:
      'During my time at Attain Sports Management, I revamped their website with a mobile-first design approach, resulting in a 55% increase in mobile traffic. I further enhanced their digital presence by producing impactful promotional videos that lifted client inquiries by 60%. ',

    github: '',
    demo: 'https://attainsports.co.za',
    image: '/Attainsports.png',
    size: 'col-span-1 md:col-span-2 md:row-span-1', // Tall project spanning two rows
  },
  {
    title: 'Vivid Graphics',
    description: 'My creative studio',
    github: 'https://github.com/Vivid-designs',
    demo: 'https://vividgraphics.co.za',
    image: '/yeestudio-cover.png',
    size: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1', // Horizontal project spanning two columns
  },
];

export const PortfolioGrid = (props: Props) => {
  return (
    <div className="container max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[250px] lg:auto-rows-[250px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  image: string;
  size: string;
};

const ProjectCard = ({
  title,
  description,
  github,
  demo,
  image,
  size,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative group border border-white/20 rounded-md overflow-hidden shadow-lg cursor-pointer transition duration-300 ${size}`}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition duration-300 ease-in-out transform group-hover:scale-105 brightness-75 group-hover:brightness-[.3]"
        />
      </div>
      <div className="absolute bottom-0 w-full px-4 pb-4 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:-translate-y-0">
        <h3 className="absolute bottom-full pb-2 font-medium text-lg text-neutral-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-light">
          {description}
        </p>
        <div className="flex space-x-4 mt-4">
          {github ? (
            <Link
              href={github}
              className="text-sm font-light text-neutral-300 hover:underline hover:text-white"
            >
              GitHub
            </Link>
          ) : (
            <p className="text-sm font-light text-neutral-300 hover:underline hover:text-white">
              Private Repo
            </p>
          )}
          {demo && (
            <Link
              href={demo}
              className="text-sm font-light text-neutral-300 hover:underline hover:text-white"
            >
              Live Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
