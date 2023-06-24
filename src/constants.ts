import ConvoyLogo from './images/convoy_logo.png';
import DMCLogo from './images/dmc_logo.png';
import BrooksLogo from './images/brooks_logo.png';
import IHMELogo from './images/ihme_logo.jpg';

interface JobDetails {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    image: string;
}

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
