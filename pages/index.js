import styles from '../styles/Home.module.scss'

import Sidebar from '../components/Sidebar/'
import MainContent from '../components/MainContent/'

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
  )
}
