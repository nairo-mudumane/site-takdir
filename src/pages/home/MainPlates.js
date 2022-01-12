import React from "react";
import Container from "../../components/layout/Container";
import PlateCard from "../../components/PlateCard";
import styles from "./MainPlates.module.css";
import imageSrc from "../../assets/food1.png";

export default function MainPlates() {
  return (
    <Container>
      <div className={styles.grid}>
        <PlateCard
          big
          name="Yoshimasa Suchi"
          rating={3}
          datePosted="20/02/2021"
          image={imageSrc}
          alt="Suchi"
          desc="Commodo consequat mollit proident voluptate consequat ipsum quis magna esse elit aliquip sunt amet."
        />
      </div>
    </Container>
  );
}
