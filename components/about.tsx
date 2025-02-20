import { Download, Eye, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import { TypographyH3 } from './ui/typography-h3';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { getAboutSectionData } from '@/lib/sanity-utils';
import { TracingBeam } from './ui/tracing-beam';
import { AboutMeCard } from './about-me-card';
import { AboutItem } from './about-item';

type Props = {};

const paragraphs = [
  {
    title: 'What about me?',
    text: 'I\'m Lario Spence – a Technical Creative, Full-Stack Developer & Motion Designer based in Cape Town, South Africa. My journey from the rugby field to the digital arena has taught me discipline, resilience, and the art of problem-solving. I blend the precision of code with the fluidity of motion design to craft experiences that captivate and drive business outcomes.',
  },
  {
    title: 'Why do I love software development so much?',
    text: "For me, every line of code is an opportunity to solve a problem and tell a story. Whether I’m creating dynamic web solutions or breathing life into digital animations, I thrive on transforming complex challenges into elegant, user-centered designs. It’s the thrill of innovation that keeps me coding—and always pushing the envelope.",
  },
  {
    title:'Why I Love Animation Projects',
    text:'Animation projects are my playground for merging creativity with technology. There’s a unique magic in transforming a blank screen into a dynamic, moving story that connects with people on an emotional level. For me, animation isn’t just about flashy visuals—it’s about solving intricate puzzles frame by frame, where every motion and transition tells a deeper narrative. Whether I\'m crafting interactive web experiences or producing high-energy motion graphics, I relish the challenge of pushing design boundaries and delivering experiences that captivate and inspire. Animation fuels my passion for innovation, turning complex ideas into engaging, immersive digital stories.\n' +
        '\n',
  }  ,
  {
    title: 'Then, what makes me a good software developer?',
    text: "My background as a semi-pro athlete instilled a relentless drive and a never-give-up attitude that I channel into every project. With hands-on experience building platforms for startups and SMEs, I’ve honed my skills in modern web technologies and creative storytelling. This unique mix enables me to seamlessly bridge the gap between design and functionality.",
  },
];

export const About = async (props: Props) => {
  return (
    <TracingBeam>
      <div
        id="about"
        className="container bg-background py-20 px-6 flex md:items-start justify-between transition duration-300 gap-10 lg:gap-20 relative flex-col items-center md:flex-row"
      >
        <div className="">
          <TypographyH1 className="text-4xl sm:text-7xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            About Me
          </TypographyH1>
          <TypographyP className="mt-2">A few things about me</TypographyP>

          <div className="">
            {paragraphs.map((p, i) => (
              <AboutItem key={i} {...p} />
            ))}
          </div>
        </div>
        <div className="sticky top-[30%]">
          <AboutMeCard />
        </div>
      </div>
    </TracingBeam>
  );
};
