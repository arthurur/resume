import styles from './education.module.scss'

export default function Education({ title, graduation, duration, university }) {
  console.log(title);
  return (
    <section className={styles.Education}>
      <h2 className="section-title">{title}</h2>
      <div className="content-block content-block--flex">
        <span>{graduation}</span>
        <span className="aux-info">{duration}</span>
      </div>
      <span>{university}</span>
    </section>
  )
}