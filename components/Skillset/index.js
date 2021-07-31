import styles from './skill-list.module.scss';
import { SKILL_SET_TYPES } from '../../store/store';
const { MAJOR, MINOR } = SKILL_SET_TYPES;

export default function SkillList({ name, type, skillList }) {
  return (
    <div className={styles.Skillset}>
      <h2 className="section-title">{name}</h2>
      <ul className={[styles['skill-list'], 'padded-list'].join(' ')}>
        {skillList.map(skill => {
          if (type === MAJOR) {
            return (
              <li className={styles.skill} key={skill.name}>
                <span>{skill.name}</span>
                <SkillLevel level={skill.level} />
              </li>
            )
          } else {
            return (
              <li key={skill.name}>
                <span className="">{skill.name}</span>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

function SkillLevel({ level }) {
  const levelMarks = [];
  for (let i = 0; i < level; i++) {
    levelMarks.push(<span className={styles.skillLevelMark}></span>);
  }
  return (
    <div className="content-block--flex">
      {levelMarks}
    </div>
  )
}