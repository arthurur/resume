import styles from './main-content.module.scss'
import { useSelector } from 'react-redux';

import Education from '../Education';
import WorkExperience from '../WorkExperience';

import { useArthur } from '../../contexts/ArthurContext';

export default function Sidebar() {
  const { education, workExperienceList } = useArthur();

  return (
    <section className={styles.MainContent}>
      <Education {...education} />
      <WorkExperience workExperienceList={workExperienceList} />
    </section>
  );
}