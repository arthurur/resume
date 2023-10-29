import React from "react";
import styles from "./education.module.scss";

export default function Education({ title, graduation, duration, university }) {
  console.log(title);
  return (
    <section className={styles.Education}>
      <h2 className="section-title">{title}</h2>
      <div className="content-block content-block--flex">
        <h3>{graduation}</h3>
        <span className="aux-info">{duration}</span>
      </div>
      <span className="text-location">{university}</span>
    </section>
  );
}
