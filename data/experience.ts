export type Experience = {
  companyLogo: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsabilities: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    companyLogo: "/ngtacademy.png",
    title: "Director of Engineer",
    startDate: "05/2021",
    description:
      "Leading the development team to support the existing LMS platform and build a new project. Analyzing and advising for other technical initiatives for NexGenT's internal teams",
    responsabilities: [
      "improving the existing workflow according to SCRUM's best practices",
      "tracking and analyzing team metrics",
      "improving the existing recruitment workflow",
      "screening and interviewing candidates",
      "discussing and defining the product solution with the team",
    ],
  },
  {
    companyLogo: "/ngtacademy.png",
    title: "Frontend Developer",
    startDate: "12/2016",
    description:
      "Part of NexGenT's frontend team for the development of the online LMS that allows students to take courses, keep track of their progress, and engage with NexGenT's team of mentors.",
    responsabilities: [
      "Defining the technical approach and solution",
      "Development and testing of the features according to the designs",
      "Automated testing",
      "Code review and feedback to peers.",
    ],
  },
  {
    companyLogo: "/blip-logo.svg",
    title: "Frontend Developer",
    startDate: "09/2016",
    endDate: "12/2016",
    description: "Part of the Betfair Sportsbook development team",
    responsabilities: [
      "Developing new features based on product requirements",
      "Automated testing",
      "Code review and feedback to peers.",
    ],
  },
  {
    companyLogo: "/yieldify-logo.png",
    title: "Senior Software Engineer",
    startDate: "11/2015",
    endDate: "10/2016",
    description:
      "Part of several projects, including building the email services backend server, and the frontend for Yieldify's self-service platform.",
    responsabilities: [
      "Developing new features based on product requirements",
      "Automated testing",
      "Code review and feedback to peers.",
    ],
  },
  {
    companyLogo: "/ibt-logo.png",
    title: "R&D Software Developer",
    startDate: "05/2014",
    endDate: "10/2015",
    description:
      "Part of the Nubium DCM development team, responsible for development and customer support for the product.",
    responsabilities: [
      "Research and development of new features",
      "Automated testing",
      "Code review and feedback to peers.",
      "Deployment and support for the existing clients",
    ],
  },
  {
    companyLogo: "/accenture-logo.png",
    title: "Software Engineering Sr. Analyst",
    startDate: "12/2011",
    endDate: "05/2014",
    description:
      "Part of the CRM development team in one of the biggest Portuguese telecommunications company (ZON).",
    responsabilities: [
      "Analysis and estimate of features based on product requirements",
      "Development",
      "Testing",
      "Production support",
      "Youth training",
    ],
  },
  {
    companyLogo: "/vantis-logo.svg",
    title: "IT Consultant",
    startDate: "07/2011",
    endDate: "12/2011",
    description: "Management of Linux-based servers.",
    responsabilities: [],
  },
];
