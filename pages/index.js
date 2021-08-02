import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Sidebar from '../components/Sidebar/'
import MainContent from '../components/MainContent/'

export default function Home() {
  return (
    <>
    <Head>
      <title>Arthur Rolim</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
    </>
  )
}
