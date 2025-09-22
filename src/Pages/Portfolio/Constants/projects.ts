import AA from "../Images/Thumbnails/AA.png";
import NIELSEN from "../Images/Thumbnails/NIELSEN.png";
import JUPITER from "../Images/Thumbnails/JUPITER.png";
import SMS from "../Images/Thumbnails/SMS.png";
import WCR from "../Images/Thumbnails/WCR.png";
import TIICKER from "../Images/Thumbnails/TIICKER.png";
import DMSI from "../Images/Thumbnails/DMSI.png";
import EDUSEEDS from "../Images/Thumbnails/EDUSEEDS.png";

import REACT from "../Images/TechStack/REACT.png";
import NODE from "../Images/TechStack/NODE.png";
import PYTHON from "../Images/TechStack/PYTHON.png";
import POSTGRESQL from "../Images/TechStack/POSTGRESQL.png";
import MYSQL from "../Images/TechStack/MYSQL.png";
import AWS from "../Images/TechStack/AWS.png";
import DOCKER from "../Images/TechStack/DOCKER.png";
import ORACLE from "../Images/TechStack/ORACLE.png";

import TYPING_IMAGE from "../Images/Extras/TYPING.png";
import HOLIDAY_IMAGE from "../Images/Extras/HOLIDAY.png";

import type { Experience, Stats } from "../../../Types/PortfolioTypes";
import { APP_ROUTES } from "../../../Constants/General";


export const TECH_STACK_LOGOS = [REACT, NODE, PYTHON, POSTGRESQL, MYSQL, AWS, DOCKER, ORACLE];

export const EXTRAS = [
  {
    isExternal: false,
    path: APP_ROUTES.TYPING_TEST,
    src: TYPING_IMAGE,
    alt: "Typing Image",
    title: "Typing Speed Test",
    description: "Interactive typing speed test with a real-time leaderboard"
  },
  {
    isExternal: false,
    path: APP_ROUTES.HOLIDAY,
    src: HOLIDAY_IMAGE,
    alt: "Holiday Image",
    title: "Your Next Holiday",
    description: "Fetch upcoming holidays using a dynamic API" 
  }
]

export const STATS = [
  {
    value: 15,
    duration: 2.5,
    label: "Projects Delivered"
  },
  {
    value: 1000,
    duration: 3,
    label: "Users Impacted"
  },
  {
    value: 7,
    duration: 2.5,
    label: "Years of Experience"
  }
] as Stats[];

export const EXPERIENCE = [
  {
    date: "November 2024 - Present",
    thumbnail: AA,
    title: "Senior Software Engineer",
    company: "Aerotrends Aviation",
    location: "Dallas, TX (Remote)",
    jobType: "Full Time",
    techStack: ["React (TS)", "Node.js", "PostgreSQL", "Oracle", "AWS"]
  },
  {
    date: "May 2025 - August 2025",
    thumbnail: JUPITER,
    title: "Lead Software Engineer",
    company: "Jupiter House",
    location: "Lincoln, NE",
    jobType: "Contract",
    techStack: ["React (TS)", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    date: "June 2022 - November 2024",
    thumbnail: NIELSEN,
    title: "Software Engineer II",
    company: "Nielsen",
    location: "New York, NY (Remote)",
    jobType: "Full Time",
    techStack: ["React (TS)", "Python", "PostgreSQL", "Docker", "AWS"]
  },
  {
    date: "January 2023 - August 2023",
    thumbnail: SMS,
    title: "Software Engineer",
    company: "SMS Corporate Services",
    location: "Kuala Lumpur, Malaysia (Remote)",
    jobType: "Contract",
    techStack: ["React (TS)", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    date: "February 2021 - May 2022",
    thumbnail: WCR,
    title: "Software Engineer",
    company: "White Castle Roofing",
    location: "Lincoln, NE",
    jobType: "Full Time",
    techStack: ["React (TS)", "Vue.js", "Python", "MySQL", "Oracle", "AWS"]
  },
  {
    date: "May 2020 - January 2021",
    thumbnail: TIICKER,
    title: "Full Stack Developer",
    company: "TiiCKER",
    location: "Detroit, MI (Remote)",
    jobType: "Contract",
    techStack: ["React (JS)", "Python", "MySQL", "Docker", "AWS"]
  },
  {
    date: "May 2020 - December 2020",
    title: "Software Engineer",
    thumbnail: DMSI,
    company: "DMSi Software",
    location: "Omaha, NE (Remote)",
    jobType: "Contract",
    techStack: ["React (JS)", "Node.js", "MySQL", "AWS"]
  },
  {
    date: "May 2019 - January 2020",
    title: "Software Engineer",
    thumbnail: EDUSEEDS,
    company: "Eduseeds",
    location: "Kuala Lumpur, Malaysia (Remote)",
    jobType: "Contract",
    techStack: ["React (JS)", "Node.js", "MySQL", "AWS"]
  }
] as Experience[];