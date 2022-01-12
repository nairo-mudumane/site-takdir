import React from "react";
import Container from "../../components/layout/Container";
import PlateCard from "../../components/PlateCard";
import styles from "./MainPlates.module.css";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";

export default function MainPlates() {
  return (
    <Container>
      <div className={styles.flex}>
        <PlateCard
          big
          name="Yoshimasa Suchi"
          rating={3}
          datePosted="20/02/2021"
          image={food1}
          alt="Suchi"
          desc="Commodo consequat mollit proident voluptate consequat ipsum quis magna esse elit aliquip sunt amet."
        />

        <div className={styles.grid}>
          <PlateCard
            name="Suchi 2"
            bgColor="black"
            image={food2}
            alt=""
            datePosted="04/05/2021"
            rating={3}
          />

          <PlateCard
            name="Suchi 2"
            bgColor="black"
            image={food3}
            alt=""
            datePosted="04/05/2021"
            rating={3}
          />

          <PlateCard
            name="Suchi 2"
            bgColor="black"
            image={food3}
            alt=""
            datePosted="04/05/2021"
            rating={3}
          />
        </div>
      </div>
    </Container>
  );
}
