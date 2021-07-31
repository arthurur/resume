import styles from './main-content.module.scss'
import { useSelector } from 'react-redux';

import Education from '../Education';
import WorkExperience from '../WorkExperience';

import {
  getEducation,
  getWorkExperienceList,
} from '../../store/store';

export default function Sidebar() {
  const educationData = useSelector(getEducation);
  const workExperienceList = useSelector(getWorkExperienceList);

  return (
    <section className={styles.MainContent}>
      <Education {...educationData} />
      <WorkExperience workExperienceList={workExperienceList} />
    </section>
  )
}