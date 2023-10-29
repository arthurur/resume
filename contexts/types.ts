export type Skill = {
  name: string;
  level?: number;
};

export type WorkExperienceEntry = {
  position: string;
  duration: string;
  company: {
    name: string;
    link: string;
    description: string;
  };
  bullets: string[];
};
