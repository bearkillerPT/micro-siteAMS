import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nutrilink', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: 'Serviço de subscrição para entrega de comida saudável', // e.g: Welcome to my website
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
  img: 'healthyjpeg.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'login.jpg',
    newLineTitle: ".",
    title: "Aplicação para encomendar comida",
    info:
      'O nosso projeto atualmente é a introdução de uma aplicação. Este sistema de informação vai simplificar o processo de encomendar e pagar pela comida.',
    info2: 'Experimente a app web:',
    //videoSource: 'app.mp4',
    url: 'https://micro-site-ams.herokuapp.com/app', // if no url, the button will not show up
    repo: 'https://github.com/bearkillerPT/appAMS', // if no repo, the button will not show up
    infoDict: {
      'App Android':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/androidBuild/Nutrilink-60d57feb437345dc98edf230ad5b563e-signed.apk',
    }
  },
  {
    id: nanoid(),
    img: 'nostressed.jpg',
    title: 'Entregas feitas até ao momento:',
    info: ' ',
    info2: ' ',
    infoDict: {
      'Entrega nº1 (Lab 1)':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/entregas/entrega1.zip',
      'Entrega nº2 (Lab 2)':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/entregas/entrega2.pdf',
      'Entrega nº3 (Relatório E2)':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/entregas/AMS-E2-Relatorio%20Visao.pdf',
        'Entrega nº4 (Lab 3)':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/entregas/LAB_3_AMS.pdf',
        'Entrega nº5 (Lab 4)':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/entregas/LAB_4_AMS.pdf',
        'Entrega nº6 (Relatório E3)':
        'https://github.com/bearkillerPT/micro-siteAMS/raw/master/entregas/AMS_Iteracao2.zip',
    },
    url: '', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Quer entrar em contacto connosco?',
  btn: 'Enviar email',
  email: 'gilteixeira@ua.pt',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bearkillerPT/micro-siteAMS',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
