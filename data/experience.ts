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
    companyLogo: "/automattic.png",
    title: "Senior Software Engineer",
    startDate: "02/2022",
    description: "Part of the Support Operations development team",
    responsabilities: [
      "Enhanced company support workflow through strategic improvements to existing tools, with a primary focus on the scheduling tool",
      "Spearheaded the development of automation solutions resulting in substantial cost reduction and optimized resource allocation, enabling enhanced focus on high-impact projects.",
      "Updated the existing code base to follow company standards regarding development tools, transitioning from Flow to Typescript.",
      "Leveraged technologies such as React, Typescript, PHP, and Python to develop and enhance support tools and automation solutions."
    ]
  },
  {
    companyLogo: "/ngtacademy.png",
    title: "Lead Software Engineer",
    startDate: "12/2016",
    endDate: "01/2022",
    description:
      "Leading the development team to support the existing LMS platform and build a new project. Analyzing and advising for other technical initiatives for NexGenT's internal teams",
    responsabilities: [
      "Led the development team, overseeing support for the existing Learning Management System (LMS) platform, and providing guidance on technical initiatives.",
      "Implemented SCRUM best practices to improve workflow efficiency and monitored team metrics for continuous improvement.",
      "Streamlined recruitment processes, including candidate screening and interviews.",
      "Collaborated with the team to define product solutions and played a key role in frontend development for the online LMS.",
      "Responsible for technical strategy and solution definition, as well as feature development and testing using technologies such as React, Typescript, and AWS Serverless.Conducted code reviews and provided feedback to peers to maintain high-quality standards.",
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
