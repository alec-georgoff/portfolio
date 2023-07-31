import ConvoyLogo from './images/convoy_logo.png';
import DMCLogo from './images/dmc_logo.png';
import BrooksLogo from './images/brooks_logo.png';
import IHMELogo from './images/ihme_logo.jpg';
import ClinciergeLogo from './images/clincierge_logo.png';

// SKILLS
interface Skill {
    name: string;
    strength: number;
}

export const skills: Skill[] = [
    { name: 'Web App Development', strength: 0.95 },
    { name: 'REST API Development', strength: 0.8 },
    { name: 'HTML', strength: 0.95 },
    { name: 'CSS', strength: 0.9 },
    { name: 'Entity Framework', strength: 0.3 },
    { name: 'JavaScript', strength: 0.9 },
    { name: 'TypeScript', strength: 0.8 },
    { name: 'React', strength: 0.9 },
    { name: 'SQL', strength: 0.5 },
    { name: 'Cloud Computing', strength: 0.5 },
    { name: 'C#/.NET', strength: 0.4 },
    { name: 'Third Party APIs', strength: 0.7 },
    { name: 'Git', strength: 0.9 },
    { name: 'GitHub/GitLab', strength: 0.85 },
    { name: 'Mobile Web Apps', strength: 0.7 },
    { name: 'Responsive Web Design', strength: 0.7 },
    { name: 'CircleCI', strength: 0.3 },
    { name: 'Node.js', strength: 0.8 },
    { name: 'Docker', strength: 0.3 },
    { name: 'Zod', strength: 0.5 },
    { name: 'Bootstrap', strength: 0.75 },
];

export const skillCardColor = (strength: number) =>
    `solid 3px hsla(120, 100%, 40%, ${strength})`;

// EXPERIENCE
interface JobDetails {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    image: string;
}

const clinciergeBullets = [
    'Developing a frontend web application to allow clinical trial patients to submit their own expenses for reimbursement, in preparation to scale up to more than 10,000 payments per year',
    "Adding features to an existing internal accounting application to help employees more easily upload to and retrieve data from the company's central database",
];

const convoyBullets = [
    'Built a heuristics model for predicting trailer loading delays prior to carrier arrival, resulting in a 55% reduction in carrier reported issues for trailer delays',
    'Designed and built a feature to allow shipping companies to define their own late tolerance for shipments, reducing undesired outreach emails by over 50%',
];

const dmcBullets = [
    'Maintained full stack web application for self-guided apartment touring, driving growth for a client startup company',
    'Designed and implemented new features in existing code base, including third-party API integrations and end user UI/UX updates',
    'Worked within cloud computing environment, regularly troubleshooting deployment pipelines',
    'Created single page web application for camera lens manufacturing client, transforming UX Designer wireframes into a fully functional, interactive product',
];

const brooksBullets = [
    'Managed user perception surveys in Qualtrics, designing questions to extract key fit, feel, and ride characteristics of 3 running shoe models to align with development requirements',
    'Wrote reports summarizing testing results for shoes in development, presenting key findings and recommendations to stakeholders throughout footwear department',
];

const ihmeBullets = [
    'Developed mathematical models of malaria transmission using R',
    'Analyzed and mapped GPS travel data for humans in Southeast Asia to incorporate travel behavior into existing malaria transmission models',
];

export const jobs: JobDetails[] = [
    {
        title: 'Software Engineer II',
        company: 'Clincierge',
        location: 'Seattle, WA (Remote)',
        startDate: "Mar '23",
        endDate: 'Present',
        bullets: clinciergeBullets,
        image: ClinciergeLogo,
    },
    {
        title: 'Software Engineer',
        company: 'Convoy',
        location: 'Seattle, WA',
        startDate: "Feb '22",
        endDate: "Nov '22",
        bullets: convoyBullets,
        image: ConvoyLogo,
    },
    {
        title: 'Software Engineer',
        company: 'DMC',
        location: 'Seattle, WA',
        startDate: "Feb '20",
        endDate: "Jul '21",
        bullets: dmcBullets,
        image: DMCLogo,
    },
    {
        title: 'Wear Test Analyst',
        company: 'Brooks Running',
        location: 'Seattle, WA',
        startDate: "Apr '19",
        endDate: "Feb '20",
        bullets: brooksBullets,
        image: BrooksLogo,
    },
    {
        title: 'Post Bachelor Fellow',
        company: 'Institute For Health Metrics and Evaluation',
        location: 'Seattle, WA',
        startDate: "Sep '17",
        endDate: "Apr '19",
        bullets: ihmeBullets,
        image: IHMELogo,
    },
];

export type { JobDetails };

// PROJECTS

export interface Project {
    title: string;
    githubExtension: string;
    skills: string[];
    bullets: string[];
}

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        githubExtension: 'portfolio',
        skills: ['TypeScript', 'React', 'AWS Amplify', 'SASS'],
        bullets: [
            'Portfolio meant to showcase my experience and personal life',
            'Simple React app hosted on AWS Amplify',
        ],
    },
    {
        title: 'Spotify Listening Habits',
        githubExtension: 'spotify-album-art',
        skills: [
            'TypeScript',
            'React',
            'Third Party API Integration',
            'OAuth 2.0',
        ],
        bullets: [
            "Interactive app for exploring a user's Spotify listening habits",
            "Leverages Spotify's public API to pull data about most played songs for a user",
            'Able to view listening habits across three time frames',
        ],
    },
];
