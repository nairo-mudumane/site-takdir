import React from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import styles from "./Home.module.css";
import TodaySpecial from "./TodaySpecial";

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <Section>
          <TodaySpecial />
        </Section>
      </div>
    </PageWrapper>
  );
}
