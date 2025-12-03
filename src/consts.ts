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
import warli from "./assets/projects/warli.png";
import purr from "./assets/projects/purrpix.png";
import damien from "./assets/projects/damien.png";
import annaqsh from "./assets/projects/annaqsh.png";

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
      "Completed a 3-month internship and transitioned into a role as a developer. There i worked on projects involving Electron.js and React.js, honing skills in cross-platform application development and creating interactive user interfaces.",
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
    title: "Annaqsh Design",
    tags: ["Wix"],
    url: "https://www.annaqshdesign.ae/",
    info: "A Dubai based interior design studio that brings stylish, luxury spaces to life, while also offering custom and ready-made furniture to fit every home.",
    image: annaqsh,
    heroname: "annaqsh",
  },
  {
    title: "Warli Magic",
    tags: ["React", "tailwind csss", "nextjs"],
    url: "https://warlimagic.vercel.app/",
    info: "A social-media style web app for sharing Warli art: users can upload, view and explore Warli-style paintings, and browse a gallery of creative pieces.",
    image: warli,
    heroname: "warli",
  },

  {
    title: "Purrpix",
    tags: [
      "Reactjs",
      "Firebase hosting",
      "tailwindcss",
      "redux",
      "react-redux",
    ],
    url: "https://purrpix-sneh-al.web.app/",
    info: "A fun cat-image gallery powered by The Cat API, built as a small playful project and hosted on Firebase for fast and simple delivery.",
    isLink: true,
    link: "https://github.com/sneh-al/Cat-Generator",
    image: purr,
    heroname: "purr",
  },
  {
    title: "Photographer website ",
    tags: ["Astrojs", "Reactjs", "netlify", "tailwindcss", "daisyui"],
    url: "https://damien.netlify.app/",
    info: "Phtographer website from figma design by @Praha. A simple, responsive website built using Astrojs and Reactjs, styled with Tailwind CSS and DaisyUI.",
    isLink: true,
    link: "https://github.com/sneh-al/photographer-from-figma",
    image: damien,
    heroname: "damien",
  },
];
