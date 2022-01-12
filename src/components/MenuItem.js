import React from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import styles from "./MenuItem.module.css";
import Title from "./text/Title";

export default function MenuItem({ data }) {
  return (
    <li className={styles.container}>
      <Link to="/" className={styles.image}>
        <img src={data.banner} alt={data.bannerAlt} />
      </Link>

      <Link to="/" className={styles.desc}>
        <div className={styles.name}>
          <Title text={data.name} color="var(--color-black-1)" font={1.2} />
        </div>
        <p className={`${styles.stars} no-margin`}>
          <Icons icon="fas fa-star" />{" "}
          <span className="text-muted">{data.stars}</span>
        </p>
        <p>{data.description}</p>
      </Link>
    </li>
  );
}
