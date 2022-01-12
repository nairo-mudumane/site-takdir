import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlateCard.module.css";
import Title from "./text/Title";

export default function PlateCard({ big, image, alt }) {
  if (big)
    return (
      <div className={`${styles.card} ${styles.bigCard}`}>
        <Link to="/">
          <div className={styles.image}>
            <img src={image} alt={alt} />
          </div>

          <div className={styles.title}>
            <Title text="Yoshimassa Suchi" font={1.2} />

            <div className={styles.rating}>
              <div className={styles.ratingStars}>
                <span className={styles.star}>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className={styles.datePosted}>
                <p className="no-margin">em: 12/12/2012</p>
              </div>
            </div>
          </div>

          <div className={styles.desc}>
            <p className="text-muted no-margin">
              In sint enim aliqua labore cupidatat Lorem ut velit sit dolore
              mollit amet.
            </p>
          </div>
        </Link>
      </div>
    );
}
