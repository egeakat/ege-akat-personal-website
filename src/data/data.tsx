import {AcademicCapIcon, ArrowDownTrayIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.webp';
import profilepic from '../images/ege_akat.jpg';
import {About, ContactSection, ContactType, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ege Akat',
  description: 'Personal website for Ege Akat',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ege Akat`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Cloud Software Engineer</strong>, with a strong passion for cloud app
        development and machine learning.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        You can download my resume below, or contact me directly through my socials and my email at{' '}
        <i>
          {' '}
          <a href="mailto:egeakat@gmail.com">egeakat@gmail.com</a>
        </i>
      </p>
    </>
  ),
  actions: [
    {
      href: '/Ege_Akat_CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` As a cloud engineer and a computer science and engineering graduate, I have a strong passion for creating engineering solutions that are based
  on modern structures. Even though I define myself as a learner I am currently trying to become a Cloud engineering expert with a passion for the
  cloud. During my studies in university, I mostly focused on various machine learning, data processing and artificial intelligence courses. I am also
  interested in Artificial Intelligence and Machine Learning and one of my goals is to develop my own models and deploy them.

  I define myself as a really quick learner and a swiss knife engineer. I have no problems adapting to different fields of work and can accustom
  myself to any projects in almost real time.
  
  In my personal life I’m an amateur chess player. I also enjoy doing research in my free time whether it’s about science, psychology, history or any
  interesting topic I might be curious about. I also have an interest in Neurochemistry and psychology. I enjoy researching and learning about how
  human consciousness and behaviour works and how can we understand it and make it better, healthier.`,
  aboutItems: [
    {label: 'Location', text: 'Ankara, Turkey', Icon: MapIcon},
    {label: 'Nationality', text: 'Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Chess, Psychology, Indie Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Hacettepe University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Javascript',
        level: 10,
      },
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 3,
      },
      {
        name: 'Golang',
        level: 3,
      },
      {
        name: 'C/C++',
        level: 3,
      },
      {
        name: 'PHP',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'AWS SDK',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'Express',
        level: 4,
      },
      {
        name: 'Flask',
        level: 4,
      },
      {
        name: 'Laravel',
        level: 4,
      },
    ],
  },

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'Tailwind',
        level: 6,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Jenkins',
        level: 10,
      },
      {
        name: 'GNU/Linux',
        level: 4,
      },
      {
        name: 'AWS CLI',
        level: 4,
      },
      {
        name: 'Serverless',
        level: 4,
      },
      {
        name: 'Bash',
        level: 4,
      },
      {
        name: 'SQL',
        level: 4,
      },
      {
        name: 'PostgreSQL / MySQL',
        level: 4,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Turkish',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2018 - February 2024',
    location: 'Hacettepe University',
    title: 'B.S. Computer Science and Engineering',
    content: (
      <ul>
        <li>• Studied Computer Science and Engineering</li>
        <li>
          • Took various courses mostly focusing on Data Engineering, Machine Learning and Artificial Intelligence
        </li>
        <li>• 2.86 GPA</li>
      </ul>
    ),
  },
];

export const extracurricularActivity: TimelineItem[] = [
  {
    date: 'Nov. 2019 - Oct. 2021',
    location: 'Hacettepe Free Software Society',
    title: 'Founder & Chairman',
    content: (
      <ul>
        <li>• Assembled and led the board of directors of Hacettepe Free Software Society</li>
        <li>• Have been the organizer for many software courses and the lecturer for some of them</li>
        <li>
          • Organized many panels and interviews with some of the important people from the Academy and the leading
          industry experts
        </li>
        <li>• Raised awareness about free software</li>
        <li>
          • Created a friendly environment for Hacettepe University students to socialize, self improve and network
        </li>
        <li>• Developed the website and the systems needed for the organization</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mar. 2022 - Apr. 2024',
    location: 'Arçelik Global',
    title: 'IoT R&D Trainee Engineer',
    content: (
      <ul>
        <li>
          • Took part in the Cloud Development Team, crafting innovative solutions for the Internal tools squad using
          JavaScript, Java, and AWS Cloud services for both backend and frontend applications.
        </li>
        <li>
          • Architected and deployed scalable solutions using various AWS services including Lambda, S3, ApiGateway, and
          CloudFormation etc. enhancing system efficiency and reliability.
        </li>
      </ul>
    ),
  },
  {
    date: 'Nov. 2018 - Mar. 2022',
    location: 'Hacettepe University',
    title: 'Software Developer and Content Specialist',
    content: (
      <ul>
        <li>
          • Led the development of web management systems, enhancing the digital presence of the Lifelong Learning
          Center through innovative content and social media strategies.
        </li>
        <li>
          • Utilized PHP, Vue.js, GIMP, WordPress, and Google Analytics to develop, manage, and analyze online content,
          significantly increasing user en- gagement.
        </li>
      </ul>
    ),
  },
  {
    date: 'Aug. 2020 - Sep. 2020',
    location: 'Onedio',
    title: 'Software Development Intern',
    content: (
      <ul>
        <li>
          • Contributed to the creation of Onedio Vitrin, a platform for sharing paid or sponsored articles, enhancing
          the company’s content delivery capabilities.
        </li>
        <li>
          • Designed database structures and developed ORM models, facilitating robust data management and streamlined
          CRUD operations.
        </li>
        <li>
          • Employed Node.js, leveraging KOA and Sequelize for backend development, improving application functionality
          and performance.
        </li>
      </ul>
    ),
  },
  {
    date: 'Sep. 2019 - Nov. 2019',
    location: 'Picus Security Inc.',
    title: 'Backend Developer',
    content: (
      <ul>
        <li>
          • Integrated AWS and Zoho CRM into a dev-ops automation tool, streamlining operations and enhancing customer
          relationship management.
        </li>
        <li>
          • Specialized in Python Flask development, contributing to the backend architecture and system integration
          efforts.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch with me.',
  description:
    'You can get in touch with me by sending an email, or by reaching out to me on social media. I am always open to new opportunities and collaborations.',
  items: [
    {
      type: ContactType.Email,
      text: 'egeakat@gmail.com',
      href: 'mailto:egeakat@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ankara, Turkey',
      href: 'https://www.google.com/maps/place/Ankara/@39.9032599,32.5979591,11z/',
    },
    {
      type: ContactType.Instagram,
      text: '@egeakat',
      href: 'https://www.instagram.com/egeakat/',
    },
    {
      type: ContactType.Github,
      text: 'egeakat',
      href: 'https://github.com/egeakat',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/egeakat'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/egeakat/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/egeakat/'},
];
