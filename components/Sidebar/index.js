import styles from './sidebar.module.scss'

import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import Personal from '../Personal';
import Skillset from '../Skillset';

import {
  getName,
  getPersonalInformation,
  getSkillsetList,
} from '../../store/store';

export default function Sidebar() {
  const name = useSelector(getName);
  const personalInformation = useSelector(getPersonalInformation);
  const skillSetList = useSelector(getSkillsetList);

  return (
    <section className={styles.Sidebar}>
      <h1 className="section-title">{name}</h1>
      <div className={styles.avataWrapper}>
        <img src="/profile-at OPT.jpg" />
      </div>
      <Personal personalInformation={personalInformation} />
      {skillSetList.map(skillSet => (
        <Skillset key={skillSet.name} {...skillSet} />
      ))}
    </section>
  )
}