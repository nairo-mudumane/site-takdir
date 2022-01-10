import React from "react";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageWrapper;
