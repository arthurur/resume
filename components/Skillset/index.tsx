import React, { ReactNode } from "react";
import styles from "./skill-list.module.scss";
import { SKILL_SET_TYPES } from "../../contexts/ArthurContext";
import { Skill } from "../../contexts/types";
const { MAJOR, MINOR } = SKILL_SET_TYPES;

type SkillListProps = {
  name: string;
  type: string;
  skillList: Skill[];
};

export default function SkillList({ name, type, skillList }) {
  return (
    <div className={styles.Skillset}>
      <h2 className="section-title">{name}</h2>
      <ul className={[styles["skill-list"], "padded-list"].join(" ")}>
        {skillList.map((skill) => {
          if (type === MAJOR) {
            return (
              <li className={styles.skill} key={skill.name}>
                <span>{skill.name}</span>
                <SkillLevel level={skill.level} />
              </li>
            );
          } else {
            return (
              <li key={skill.name}>
                <span className="">{skill.name}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

function SkillLevel({ level }) {
  const levelMarks: ReactNode[] = [];
  const maxLevel = 5;

  // Filled diamonds for the current level
  for (let i = 0; i < level; i++) {
    levelMarks.push(
      <span key={`filled-${i}`} className={styles.skillLevelMark} />
    );
  }

  // Hollow diamonds for remaining levels
  for (let i = level; i < maxLevel; i++) {
    levelMarks.push(
      <span key={`hollow-${i}`} className={styles.skillLevelMarkHollow} />
    );
  }

  return <div className="content-block--flex">{levelMarks}</div>;
}
