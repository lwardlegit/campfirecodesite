import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/lwardlegit/resume/blob/main/newestResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'esrimap.png',
    title: 'ArcGis Disaster alerts',
    info: 'This application detects weather changes using the arcgis API for real time disaster awareness',
    info2: 'the intention of the application is to showcase free features of the esri maps api',
    url: 'https://lwardlegit.github.io/esrimap/',
    repo: 'https://github.com/lwardlegit/esrimap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'statsproj.png',
    title: 'Angular PC stats retrieval',
    info: 'This angular app pulls processor data from any pc that runs it and displays it for the user',
    info2: 'the application consists of an angular front end, node server for the system info and json server for persistance to show data changes overtime',
    url: 'https://github.com/lwardlegit/AngularPCstats',
    repo: 'https://github.com/lwardlegit/AngularPCstats', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'students.png',
    title: 'student pagination and search',
    info: 'A simple example of a multi page search feature coded in react',
    info2: 'this example allows you to search by tags as well as usernames',
    url: 'https://lwardlegit.github.io/paginationSample/',
    repo: 'https://github.com/lwardlegit/paginationSample', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'mtg.png',
    title: 'MTG deckbuilder application',
    info: 'A react based application to create MTG decks all cards are pulled from the official mtg api',
    info2: 'the application displays statisics based on cards chosen, and ranks deck stats based on cards chosen',
    url: 'https://github.com/lwardlegit/mtgbuild',
    repo: 'https://github.com/lwardlegit/mtgbuild', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [   
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luther-wardle-271a0a198/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lwardlegit',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
