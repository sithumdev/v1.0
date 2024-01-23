export type IExperience = {
  role: string;
  organization: string;
  url: string;
  skills: string[];
  duration: string;
  image: string;
};

export type ICertificate = {
  name: string;
  institute: string;
  image: string;
  year: number;
};

export type IProject = {
  name: string;
  technologies: string[];
  client: string;
  duration: string;
};

export const EXPERIENCES: IExperience[] = [
  {
    role: "Full Stack Developer",
    organization: "InlineMe",
    url: "https://www.linkedin.com/company/inlineme/",
    skills: ["Angular Js", "Node Js", "MongoDB", "Firebase", "Sentry"],
    duration: "Mar 2023 - Present",
    image: "/institutes/inlineme.svg",
  },
  {
    role: "Software Engineer Intern",
    organization: "mobiOs Private Limited",
    url: "https://www.linkedin.com/company/mobios-lk/",
    skills: ["React Js", "Redux Js", "Yup", "REST API", "Material UI"],
    duration: "Sep 2022 - Feb 2023",
    image: "/institutes/mobios.jpeg",
  },
];

export const CERTIFICATES: ICertificate[] = [
  {
    name: "Developing Cloud Native Applications",
    institute: "IBM",
    year: 2024,
    image: "/institutes/ibm.png",
  },
  {
    name: "Introduction to Jenkins",
    institute: "IBM",
    year: 2024,
    image: "/institutes/ibm.png",
  },
  {
    name: "Kotlin for Java Developers",
    institute: "JetBrains",
    year: 2024,
    image: "/institutes/jetbrains.jpeg",
  },
  {
    name: "Exploring GraphQL: A Query Language for APIs",
    institute: "The Linux Foundation",
    year: 2022,
    image: "/institutes/the_linux_foundation.png",
  },
  {
    name: "Introduction to Cloud Development with HTML, CSS, and JavaScript",
    institute: "IBM",
    year: 2021,
    image: "/institutes/ibm.png",
  },
];

export const PROJECTS: IProject[] = [
  {
    name: "UVE Stocks",
    client: "UVE Eagle Confectioneries",
    duration: "2023 - Present",
    technologies: [
      "Next Js",
      "Nest Js",
      "Prisma ORM",
      "PostgresSQL",
      "Firebase",
      "Sentry",
      "REST API",
      "CI/CD",
      "Docker",
    ],
  },
];
