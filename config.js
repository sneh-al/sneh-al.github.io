
export const SITE = {
  website: "https://sneh-al.github.io/",
  author: "Sneh-al",
  desc: "Personal Website.",
  title: "Snehal",
  ogImage: "logo.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/sneh-al",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sneh13/",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/sneh13/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },

  {
    name: "Mail",
    href: "mailto:snehal1380@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },

  {
    name: "Pinterest",
    href: "https://in.pinterest.com/sneh13/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
];
