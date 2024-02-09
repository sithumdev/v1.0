export type IPersonalDetails = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
};

export type IExperience = {
  role: string;
  organization: string;
  url: string;
  skills: string[];
  duration: string;
  image: string;
};

export type IService = {
  service: string;
  description: string;
  clients: number;
  image: string;
};

export type IGallery = {
  image: string;
  description: string;
  title: string;
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
  attachment: string[];
  tech: string[];
};

export const PERSONAL_DETAILS: IPersonalDetails = {
  email: "sithum.dashantha@gmail.com",
  phone: "+94766108500",
  name: "Sithum Basnayaka",
  linkedin: "https://www.linkedin.com/in/sithum-basnayaka/",
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
    name: "Rack",
    client: "UVE Eagle Confectioneries",
    duration: "2024 - Present",
    technologies: [
      "Next Js",
      "Prisma ORM",
      "PostgresSQL",
      "Supabase",
      "Sentry",
      "REST API",
      "CI/CD",
      "Docker",
    ],
    attachment: [
      "/projects/rack/1.png",
      "/projects/rack/2.png",
      "/projects/rack/3.png",
    ],
    tech: [
      "/tech/nextjs.png",
      "/tech/prisma.png",
      "/tech/sentry.png",
      "/tech/postgressql.png",
      "/tech/docker_container.png",
    ],
  },
  {
    name: "inLineme",
    client: "inLineme",
    duration: "2023 - Present",
    technologies: [
      "Angular Js",
      "Firebase Analytics",
      "Fireabase Cloud Messaging",
      "Node Js",
      "MongoDB",
      "Sentry",
      "REST API",
      "POSTMAN",
    ],
    attachment: ["/projects/inlineme/1.png"],
    tech: [
      "/tech/angular.png",
      "/tech/sentry.png",
      "/tech/docker_container.png",
      "/tech/nodejs.png",
      "/tech/mongodb.png",
      "/tech/firebase.png",
    ],
  },
  {
    name: "Toucan (Project Management SaaS Application)",
    client: "Toucan UK",
    duration: "2023 October - 2023 Novemeber",
    technologies: [
      "React Js",
      "Material UI",
      "Redux Js",
      "Node Js",
      "MongoDB",
      "REST API",
      "POSTMAN",
    ],
    attachment: ["/projects/toucan/1.jpeg"],
    tech: [
      "/tech/react.png",
      "/tech/nodejs.png",
      "/tech/mongodb.png",
      "/tech/redux.png",
    ],
  },
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
    attachment: ["/uve-stocks.png"],
    tech: [
      "/tech/nextjs.png",
      "/tech/nestjs.jpeg",
      "/tech/prisma.png",
      "/tech/sentry.png",
      "/tech/postgressql.png",
      "/tech/docker_container.png",
    ],
  },
  {
    name: "Marketing Page UI",
    client: "RebornIT",
    duration: "2022",
    technologies: ["Figma"],
    attachment: ["/rebornIT.png"],
    tech: ["/tech/figma.png"],
  },
  {
    name: "Avengers Cafe - Mobile Application",
    client: "Avengers Cafe",
    duration: "2022",
    technologies: ["Apache Cordova", "React Js", "Figma"],
    attachment: ["/avengers-cafe.png"],
    tech: ["/tech/react.png", "/tech/cordova.png", "/tech/figma.png"],
  },
];

export const GALLERY: IGallery[] = [
  {
    image: "/aboutme/nuwara-eliya.png",
    title: "Lipton Seat",
    description: "",
  },
  {
    image: "/aboutme/devils-staircase.png",
    title: "Lipton Seat",
    description: "",
  },
  {
    image: "/aboutme/galle.png",
    title: "Lipton Seat",
    description: "",
  },
];

export const SERVICES: IService[] = [
  {
    service: "Web Development",
    description:
      "Crafting websites: Turning ideas into immersive digital experiences.",
    clients: 5,
    image: "/web.svg",
  },
  {
    service: "UI/UX Development",
    description:
      "Designing delightful websites for a user-friendly and engaging digital experience.",
    clients: 10,
    image: "/ux.svg",
  },
];
