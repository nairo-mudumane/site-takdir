import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlateCard.module.css";
import Title from "./text/Title";

export default function PlateCard({
  big,
  name,
  image,
  alt,
  desc,
  datePosted,
  rating,
  bgColor,
}) {
  function loopStars(rate) {
    console.log(rate);
    for (let i = 0; i <= rate; i++) {
      return (
        <span className={styles.star}>
          <i className="fas fa-star"></i>
        </span>
      );
    }
  }
  React.useEffect(() => loopStars(rating), [rating]);

  // big card
  if (big)
    return (
      <Link to="/" className={`${styles.card} ${styles.cardBig}`}>
        <div className={styles.image}>
          <img src={image} alt={alt} />
        </div>

        <div className={styles.title}>
          <Title text={name} font={1.2} />

          <div className={styles.rating}>
            <div className={styles.ratingStars}>
              {rating === 1 ? (
                <span className={styles.star}>
                  <i className="fas fa-star"></i>
                </span>
              ) : (
                loopStars(rating)
              )}
            </div>
            {datePosted && (
              <div className={styles.datePosted}>
                <p className="no-margin">em: {datePosted}</p>
              </div>
            )}
          </div>
        </div>

        {desc && (
          <div className={styles.desc}>
            <p className="text-muted no-margin">
              In sint enim aliqua labore cupidatat Lorem ut velit sit dolore
              mollit amet.
            </p>
          </div>
        )}
      </Link>
    );

  return (
    <Link
      to="/"
      className={`${styles.card} ${styles.cardSmall} ${
        bgColor === "black" && styles.blackCard
      } ${bgColor === "red" && styles.redCard} ${
        bgColor === "pink" && styles.pinkCard
      } ${bgColor === "blue-green" && styles.blueGreen}`}
    >
      <div className={styles.image}>
        <img src={image} alt={alt} />
      </div>

      <div className={styles.title}>
        <Title text={name} font={1.0} />

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
    </Link>
  );
}
