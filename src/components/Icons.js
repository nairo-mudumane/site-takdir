import React from "react";
import styles from "./Icons.module.css";

export default function Icons({ icon }) {
  return (
    <span className={styles.container}>
      <i className={icon} />
    </span>
  );
}
