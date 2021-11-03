export type Skill = {
  title: string;
  value: number;
  icon: string;
};

export const SKILLS_CODE: Skill[] = [
  { title: "Javascript", value: 95, icon: "devicon-javascript-plain" },
  { title: "Typescript",value: 95, icon: "devicon-typescript-plain" },
  { title: "HTML5", value: 85, icon: "devicon-html5-plain" },
  { title: "CSS3", value: 85, icon: "devicon-css3-plain" },
  { title: "NodeJS", value: 75, icon: "devicon-nodejs-plain" },
  { title: "Java", value: 50, icon: "devicon-java-plain" },
];

export const SKILLS_FRAMEWORKS: Skill[] = [
  { title: "React", value: 90, icon: "devicon-react-original" },
  { title: "NextJS", value: 80, icon: "devicon-nextjs-original" },
  { title: "Jest", value: 80, icon: "devicon-jest-plain" },
  { title: "Tailwind", value: 75, icon: "devicon-tailwindcss-plain" },
  { title: "Angular", value: 45, icon: "devicon-angularjs-plain" },
  { title: "Express", value: 40, icon: "devicon-express-original" },
];

export const SKILLS_TOOLS: Skill[] = [
  { title: "Git", value: 95, icon: "devicon-git-plain" },
  { title: "Yarn", value: 85, icon: "devicon-yarn-plain" },
  { title: "NPM", value: 85, icon: "devicon-npm-original-wordmark" },
  { title: "Webpack", value: 75, icon: "devicon-webpack-plain" },
  { title: "Bash", value: 75, icon: "devicon-bash-plain" },
  { title: "AWS", value: 75, icon: "devicon-amazonwebservices-original" },
];

export const SKILLS_OTHERS: Skill[] = [
  { title: "MySQL", value: 95, icon: "devicon-mysql-plain" },
  { title: "Redis", value: 95, icon: "devicon-redis-plain" },
  { title: "Windows", value: 95, icon: "devicon-windows8-original" },
  { title: "Apple", value: 95, icon: "devicon-apple-original" },
  { title: "Linux", value: 95, icon: "devicon-linux-plain" },
];
