import React from "react";
import styles from "./CartBtn.module.css";
import { Link } from "react-router-dom";

export default function CartBtn() {
  return (
    <Link to="/" className={styles.link}>
      <i className="fas fa-shopping-cart" />
    </Link>
  );
}
