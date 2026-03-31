"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { Skill, WorkExperienceEntry } from "./types";

export const SKILL_SET_TYPES = {
  MAJOR: "major",
  MINOR: "minor",
} as const;

type SkillSetType = (typeof SKILL_SET_TYPES)[keyof typeof SKILL_SET_TYPES];

type PersonalInformationItem = {
  type: string;
  value: string;
};

type Education = {
  title: string;
  graduation: string;
  duration: string;
  university: string;
};

type SkillSet = {
  name: string;
  type: SkillSetType;
  skillList: Skill[];
};

type ArthurContextData = {
  name: string;
  personalInformation: PersonalInformationItem[];
  skillsetList: SkillSet[];
  education: Education;
  workExperienceList: WorkExperienceEntry[];
};

const initialState: ArthurContextData = {
  name: "ARTHUR UBERTI ROLIM",
  personalInformation: [
    { type: "Based in", value: "Florianópolis, Santa Catarina, Brazil" },
    { type: "Phone", value: "+55 (48) 99119-2737" },
    { type: "Email", value: "arthur_ur@hotmail.com" },
  ],
  skillsetList: [
    {
      name: "Languages",
      type: SKILL_SET_TYPES.MAJOR,
      skillList: [
        { name: "Portuguese", level: 5 },
        { name: "English", level: 5 },
        { name: "Spanish", level: 3 },
        // { name: "Italian", level: 1 },
      ],
    },
    {
      name: "Main skills",
      type: SKILL_SET_TYPES.MAJOR,
      skillList: [
        { name: "HTML", level: 5 },
        { name: "CSS", level: 5 },
        { name: "Javascript / Typescript", level: 4 },
        { name: "ReactJS / Next", level: 4 },
        { name: "VueJS / NuxtJS", level: 3 },
        { name: "NodeJS / Express", level: 4 },
        { name: "MongoDB / Mongoose", level: 4 },
        { name: "Relational Databases / PostgreSQL", level: 3 },
        { name: "React Native / Expo", level: 3 },
        { name: "SCRUM / Agile", level: 4 },
      ],
    },
    {
      name: "Also",
      type: SKILL_SET_TYPES.MINOR,
      skillList: [
        { name: "Design Systems" },
        { name: "Mobile app development" },
        { name: "Git" },
        { name: "Stripe" },
      ],
    },
  ],
  education: {
    title: "Education",
    graduation: "Information Systems B.S.",
    duration: "2013 - 2019",
    university:
      "Federal University of Santa Catarina, Florianópolis, SC, Brazil",
  },
  workExperienceList: [
    {
      position: "FullStack Engineer / Frontend Lead",
      duration: "Sep 2021 - Present",
      company: {
        name: "FLOWN, London, UK (Remote)",
        link: "https://www.flown.com/",
        description:
          "FLOWN offers a toolkit to help remote workers find focus. The main product being the live coworking sessions, with the goals of exploring psychologic effects of doubling and accountability.",
      },
      bullets: [
        "Worked from a very early stage product, with a small tech team, building and improving it into a mature application, with good quality code, well documented, and most importantly, that users love to use",
        "Developed the Design System for the project. Working close to the design team to develop consistent style tokens and components",
        "Helped the company moving from free to paid, leading the implementation of the subscription flow, front and backend, integrating with Stripe",
        "Worked from Brazil, with a team based in London, UK, improving communication efficiency in a remote environment",
      ],
    },
    {
      position: "FullStack Engineer",
      duration: "May 2021 - Jul 2021",
      company: {
        name: "Lumenalta, New York, NY (Remote)",
        link: "https://lumenalta.com/",
        description:
          "Lumenalta builds core operating technologies, mobile apps and complex web applications that drive business growth while solving our clients' challenges.",
      },
      bullets: [
        "Worked with the internal hiring management system, one of the most important internal applications",
        "Had experience refactoring big chunks of old React code into a more modern implementation using hooks, context and other recent features, focusing on optimization and improving performance",
        "Had the chance to work with people from multiple countries, cultures and timezones, improving communication efficiency in a remote environment",
      ],
    },
    {
      position: "FullStack Engineer",
      duration: "Mar 2019 - Apr 2021",
      company: {
        name: "ArcTouch, Florianópolis, SC, Brazil (Remote for a year)",
        link: "https://arctouch.com/",
        description:
          "ArcTouch develops applications for hundreds of Fortune 500 companies, world‑class brands, and influential startups.",
      },
      bullets: [
        "Worked in the fast growing sports entertainment and media company The Draft Network project, helping them consolidate as one of the big vehicles on the NFL Draft content",
        "Implemented a whole paid subscription flow, front and backend, integrating with Stripe and Paypal payment services",
        "Significant knowledge on development methodology and processes, working with a continuous improvement mindset, and always keeping a healthy relation with the client",
        "Experience working with VueJS and NuxtJS on a medium size WEB application",
        "Experience with payment integrations utilizing Stripe and Paypal",
      ],
    },
    {
      position: "Frontend Engineer",
      duration: "Aug 2017 - Mar 2019",
      company: {
        name: "OnsignTV, Florianópolis, SC, Brazil",
        link: "https://onsign.tv/",
        description:
          "OnSign TV is one of the main Digital Signage platform in the market.",
      },
      bullets: [
        "Significant improvements on my vanilla Javascript, CSS and HTML skills",
        "Experience with digital signage, on a company that has big clients all over the world",
        "Experience on meeting strict requirements on design, usability, responsiveness and multi‑device compatibility",
      ],
    },
    {
      position: "FullStack Engineer",
      duration: "Jan 2016 - Dec 2016",
      company: {
        name: "myTapp, Florianópolis, SC, Brazil",
        link: "https://www.mytapp.com.br/",
        description:
          "myTapp is a fast growing startup that develops a self‑service draft beer system.",
      },
      bullets: [
        "Big improvement on my web development skills, mainly AngularJS and NodeJS",
        "Experience with agile development with SCRUM methodology",
        "Collaborated for the growth of this succeeding Startup on their second year of operation",
      ],
    },
  ],
};

export const ArthurContext = createContext({} as ArthurContextData);

type ArthurContextProviderProps = {
  children: ReactNode;
};

export function ArthurContextProvider({
  children,
}: ArthurContextProviderProps) {
  return (
    <ArthurContext.Provider value={{ ...initialState }}>
      {children}
    </ArthurContext.Provider>
  );
}

export const useArthur = () => {
  return useContext(ArthurContext);
};
