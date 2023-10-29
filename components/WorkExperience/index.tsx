import React from "react";
import styles from "./work-experience.module.scss";
import { WorkExperienceEntry } from "../../contexts/types";

type WorkExperienceProps = {
  workExperienceList: WorkExperienceEntry[];
};

export default function WorkExperience({
  workExperienceList,
}: WorkExperienceProps) {
  return (
    <section>
      <h2 className="section-title">Work Experience</h2>
      {workExperienceList.map((experience) => (
        <Experience key={experience.company.name} {...experience} />
      ))}
    </section>
  );
}

function Experience({ position, duration, company, bullets }) {
  return (
    <div className="content-block content-block--work">
      <h3 className={styles.position}>{position}</h3>
      <div className={styles.companyAndPeriod}>
        <a className="text-location" href={company.link} target="_blank">
          {company.name}
        </a>
        <span className="aux-info">{duration}</span>
      </div>
      <span>{company.description}</span>
      <ul className={styles.bulletList}>
        {bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
