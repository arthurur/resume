import styles from "./sidebar.module.scss";

import Personal from "../Personal";
import Skillset from "../Skillset";

import { useArthur } from "../../contexts/ArthurContext";
import React from "react";

export default function Sidebar() {
  const { name, personalInformation, skillsetList } = useArthur();
  console.log("this context", useArthur());

  return (
    <aside className={styles.Sidebar}>
      <h1 className="section-title">{name}</h1>
      <div className={styles.avataWrapper}>
        <img src="/profile-at OPT.jpg" />
      </div>
      <Personal personalInformation={personalInformation} />
      {skillsetList.map((skillSet) => (
        <Skillset key={skillSet.name} {...skillSet} />
      ))}
    </aside>
  );
}
