import workIcon from "./assets/svg/work.svg";
import academyIcon from "./assets/svg/academy.svg";
import githubIcon from "./assets/logo/github.png";
import instagramIcon from "./assets/logo/instagram.png";
import gmailIcon from "./assets/logo/gmail.png";
import reactjsLogo from "./assets/svg/reactjs.svg";
import tailwindcssLogo from "./assets/svg/tailwindcss.svg";
import nextjsLogo from "./assets/svg/nextjs.svg";
import astrojsLogo from "./assets/svg/astrojs.svg";
import firebaseLogo from "./assets/svg/firebase.svg";
import nodejsLogo from "./assets/svg/nodejs.svg";
import appwriteLogo from "./assets/svg/appwrite.svg";
import mongodbLogo from "./assets/svg/mongodb.svg";

// project images
import vidya from "./assets/projects/vidya.png";
import warli from "./assets/projects/warli.png";

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  };
};

type SocialLink = {
  icon: string | any;
  friendlyName: string;
  link: string;
};

export const siteConfig: Config = {
  title: "Snehal",
  description: "",
  lang: "en-GB",
  profile: {
    author: "sneh-al",
    description: "Web Developer",
  },
};

export const socialLinks: Array<SocialLink> = [
  {
    icon: githubIcon,
    friendlyName: "github",
    link: "https://github.com/sneh-al",
  },
  {
    icon: instagramIcon,
    friendlyName: "instagram",
    link: "https://www.instagram.com/sneh.al/",
  },
  {
    icon: gmailIcon,
    friendlyName: "email",
    link: "mailto:snehal1380@gmail.com",
  },
];

export const NAV_LINKS: Array<{ title: string; path: string }> = [
  {
    title: "My Work",
    path: "/stuff",
  },
];

export const activities = [
  {
    emoji: "🍿",
    description: "Embarking on thrilling adventures in the realms of anime",
  },
  {
    emoji: "🎬",
    description: "Catching a great movie or TV show",
  },
  { emoji: "🕰️", description: "Time-traveling through history." },
  { emoji: "📱", description: "Staying up-to-date with the technology." },
  { emoji: "🥾", description: "hitting the trails for a good hike" },
  // { emoji: "🌄", description: "Wandering to new places." },
];

export const skills = {
  mainFocus: [
    {
      name: "React.js",
      description: "Ruling with unparalleled popularity! 🌟",
      color: "bg-gradient-to-r from-slate-500 to-slate-800",
      icon: reactjsLogo,
    },

    {
      name: "Next.js",
      description: "Where tradition meets newfound popularity! 🔄",
      color: "bg-gradient-to-r from-emerald-500 to-cyan-500",
      icon: nextjsLogo,
    },
    {
      name: "Astro.js",
      description: "Simplifying web development with cosmic ease! 🚀",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      icon: astrojsLogo,
    },
    {
      name: "Tailwind CSS",
      description: "Simplify styling, amplify enjoyment! 😎",
      color: " bg-gradient-to-r from-violet-500 to-purple-500 ",
      icon: tailwindcssLogo,
    },
  ],
  secondaryFocus: [
    {
      name: "Node.js",
      description: "Empowering developers to reach new heights! 🛠️",
      color: "bg-gradient-to-r from-rose-500 to-red-400 ",
      icon: nodejsLogo,
    },
    {
      name: "Firebase",
      description: "Fueling web development with blazing speed! 🔥",
      color: "bg-gradient-to-r from-sky-600 to-cyan-500",
      icon: firebaseLogo,
    },
    {
      name: "Appwrite",
      description: "Turbocharging backend with simplicity !⚡",
      color: "bg-gradient-to-r from-lime-500 to-lime-500",
      icon: appwriteLogo,
    },
    {
      name: "MongoDB",
      description: "Simplifying data storage for seamless development! 📦",
      color: "bg-gradient-to-r from-teal-500 to-teal-400",
      icon: mongodbLogo,
    },
  ],
};

export const experience = [
  {
    duration: "2021-2022",
    company: "Sravadhi Solution Pvt Ltd, Surat",
    role: "Reactjs Developer",
    description:
      "Completed a 3-month internship and transitioned into a role as a developer. Worked on projects involving Electron.js and React.js, honing skills in cross-platform application development and creating interactive user interfaces. Expanded expertise in frameworks and enhanced proficiency in robust web application development.",
    icon: workIcon,
    type: "work",
  },
];

export const education = [
  {
    degree: "Bachelor's degree in Computer Engineering",
    year: "2020",
    institution: "C. K. Pithawala College of Engineering and Technology",
    university: "Gujarat Technological University",
    icon: academyIcon,
    type: "academy",
  },
  {
    degree: "Diploma in Computer Engineering",
    year: "2015",
    institution: "Institute of Diploma Studies",
    university: "Nirma University",
    icon: academyIcon,
    type: "academy",
  },
];

export const works = [
  {
    title: "Warli generate",
    tags: ["React", "tailwind csss", "nextjs"],
    url: "https://warlimagic.vercel.app/",
    info: "Experience the magic of AI as you craft your own Warli paintings.",
    image: warli,
    heroname: "warli",
  },
  {
    title: "Vidhaykunj English and Gujrati medium school",
    tags: ["Astrojs", "Firebase hosting"],
    url: "https://shrividhyakunjprimarysch-1fd54.web.app/",
    info: "Static website for School",

    image: vidya,
    heroname: "vidya",
  },
];
