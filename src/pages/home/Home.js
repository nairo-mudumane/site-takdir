import React from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <h1>Home page</h1>
      </div>
    </PageWrapper>
  );
}
