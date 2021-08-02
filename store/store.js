import { createStore } from 'redux'

export const SKILL_SET_TYPES = {
  MAJOR: 'major',
  MINOR: 'minor',
}

const initialState = {
  name: 'ARTHUR UBERTI ROLIM',
  personalInformation: [
    { type: 'Address', value: 'Florianópolis, Santa Catarina, Brasil' },
    { type: 'Phone', value: '+55 (48) 99119-2737' },
    { type: 'Email', value: 'arthur_ur@hotmail.com' },
  ],
  skillsetList: [
    {
      name: 'Languages',
      type: SKILL_SET_TYPES.MAJOR,
      skillList: [
        { name: 'Portuguese', level: 5 },
        { name: 'English', level: 4 },
        { name: 'Spanish', level: 3 },
        { name: 'Japanese', level: 1 },
      ]
    },
    {
      name: 'Main skills',
      type: SKILL_SET_TYPES.MAJOR,
      skillList: [
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 5 },
        { name: 'VueJS / NuxtJS', level: 4 },
        { name: 'ReactJS / Next', level: 3 },
        { name: 'NodeJS / Express', level: 4 },
        { name: 'SCRUM / Agile', level: 4 },
        { name: 'MongoDB / Mongoose', level: 3 },
      ]
    },
    {
      name: 'Also',
      type: SKILL_SET_TYPES.MINOR,
      skillList: [
        { name: 'PostgreSQL' },
        { name: 'SASS' },
        { name: 'Paypal' },
        { name: 'Stripe' },
        { name: 'Git / Gitflow' },
      ]
    }
  ],
  education: {
    title: 'Education',
    graduation: 'Information Systems B.S.',
    duration: '2013 - 2019',
    university: 'Federal University of Santa Catarina, Florianópolis, SC, Brazil',
  },
  workExperienceList: [
    {
      position: 'FullStack Developer',
      duration: 'May 2021 - Present',
      company: {
        name: 'Clevertech, New York, NY (Remote)',
        link: 'https://www.clevertech.biz/',
        description: 'Clevertech builds core operating technologies, mobile apps and complex web applications that drive business growth while solving our clients\' challenges.'
      },
      bullets: [
        'Worked with the internal hiring management system, one of the most important internal applications',
        'Had experience refactoring big chunks of old React code into a more modern implementation using hooks, context and other recent features, focusing on optimization and improving performance',
        'Had the chance to work with people from multiple countries, cultures and timezones, improving communication efficiency in a remote environment'
      ]
    },
    {
      position: 'FullStack Developer',
      duration: 'Mar 2019 - Apr 2021',
      company: {
        name: 'ArcTouch, Florianópolis, SC, Brazil (Remote for a year)',
        link: 'https://arctouch.com/',
        description: 'ArcTouch develops applications for hundreds of Fortune 500 companies, world‑class brands, and influential startups.'
      },
      bullets: [
        'Worked in the fast growing sports entertainment and media company The Draft Network project, helping them consolidate as one of the big vehicles on the NFL Draft content',
        'Implemented a whole paid subscription flow, front and backend, integrating with Stripe and Paypal payment services',
        'Significant knowledge on development methodology and processes, working with a continuous improvement mindset, and always keeping a healthy relation with the client',
        'Experience working with VueJS and NuxtJS on a medium size WEB application',
        'Experience with payment integrations utilising Stripe and Paypal',
      ]
    },
    {
      position: 'Frontend Developer',
      duration: 'Aug 2017 - Mar 2019',
      company: {
        name: 'OnsignTV, Florianópolis, SC, Brazil',
        link: 'https://onsign.tv/',
        description: 'OnSign TV is one of the main Digital Signage platform in the market.'
      },
      bullets: [
        'Significant improvements on my vanilla Javascript, CSS and HTML skills',
        'Experience with digital signage, on a company that has big clients all over the world',
        'Experience on meeting strict requirements on design, usability, responsiveness and multi‑device compatibility',
      ]
    },
    {
      position: 'FullStack Developer',
      duration: 'Jan 2016 - Dec 2016',
      company: {
        name: 'myTapp, Florianópolis, SC, Brazil',
        link: 'https://www.mytapp.com.br/',
        description: 'myTapp is a fast growing startup that develops a self‑service draft beer system.'
      },
      bullets: [
        'Big improvement on my web development skills, mainly AngularJS and NodeJS',
        'Experience with agile development with SCRUM methodology',
        'Collaborated for the growth of this succeeding Startup on their second year of operation',
      ]
    },
    {
      position: 'FullStack Developer',
      duration: 'Jun 2015 - Apr 2016',
      company: {
        name: 'LabTIC UDESC, Florianópolis, SC, Brazil',
        link: 'http://labtic.udesc.br/',
        description: 'LabTIC is a web development laboratory at the Santa Catarina State University.'
      },
      bullets: [
        'First experience with web development',
        'Learned mainly HTML, CSS, Javascript and some other technologies such as AngularJS and NodeJS',
        'Participated on the development of 3 projects with a development team',
      ]
    },
    {
      position: 'Rental Shop Clerk',
      duration: 'Dec 2014 - Mar 2015',
      company: {
        name: 'Heavenly Sports, South Lake Tahoe, CA',
        link: 'https://www.skiheavenly.com/',
        description: 'Heavenly is a premium snow resort, and a Vail Resorts company.'
      },
      bullets: [
        'Learned and lived the culture of quality service and focus on giving the customers the best experience possible',
        'International experience, worked with people from many different countries, improving a lot my English proficiency, and even some Spanish',
      ]
    },
  ],
}

function userReducer(state = initialState, action) {
  return state;
}

export default createStore(userReducer);

export const getName = state => state.name;
export const getPersonalInformation = state => state.personalInformation;
export const getSkillsetList = state => state.skillsetList;
export const getEducation = state => state.education;
export const getWorkExperienceList = state => state.workExperienceList;