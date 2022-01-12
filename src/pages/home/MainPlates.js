import React from "react";
import Container from "../../components/layout/Container";
import PlateCard from "../../components/PlateCard";
import styles from "./MainPlates.module.css";
import imageSrc from "../../assets/food1.png";

export default function MainPlates() {
  return (
    <Container>
      <div className={styles.grid}>
        <PlateCard big image={imageSrc} alt="Suchi" />
      </div>
    </Container>
  );
}
