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

export const jobs: JobDetails[] = [
    {
        title: 'Software Engineer',
        company: 'Convoy',
        location: 'Seattle, WA',
        startDate: "Feb '22",
        endDate: "Nov '22",
        bullets: ['i worked here'],
        image: ConvoyLogo,
    },
    {
        title: 'Software Engineer',
        company: 'DMC',
        location: 'Seattle, WA',
        startDate: "Feb '20",
        endDate: "Jul '21",
        bullets: [],
        image: DMCLogo,
    },
    {
        title: 'Wear Test Analyst',
        company: 'Brooks Running',
        location: 'Seattle, WA',
        startDate: "Apr '19",
        endDate: "Feb '20",
        bullets: [],
        image: BrooksLogo,
    },
    {
        title: 'Post Bachelor Fellow',
        company: 'Institute For Health Metrics and Evaluation',
        location: 'Seattle, WA',
        startDate: "Sep '17",
        endDate: "Apr '19",
        bullets: [],
        image: IHMELogo,
    },
];

export type { JobDetails };
