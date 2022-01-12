import React from "react";
import Container from "./layout/Container";
import MenuItem from "./MenuItem";
import styles from "./MenuList.module.css";
import Title from "./text/Title";
import { categories } from "../tests/dataset";

export default function MenuList({ title }) {
  const data = categories;
  console.log(data);

  return (
    <Container>
      <div className={styles.title}>
        <Title text={title} color="var(--color-black-1)" />
      </div>

      {/* todo:receive list form props */}
      <ul className={styles.data}>
        {/* todo:fetch real categories */}
        {data.map((categorie) => (
          <MenuItem key={categorie.id} data={categorie} />
        ))}
      </ul>
    </Container>
  );
}
