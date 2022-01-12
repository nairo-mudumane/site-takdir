import styles from "./Title.module.css";

const Title = ({ text, font, icon, iconTopMargin, img, alt }) => {
  return (
    <div className={styles.container}>
      {icon && (
        <span
          className={styles.icon}
          style={iconTopMargin && { marginTop: `${iconTopMargin}px` }}
        >
          <i className={icon} />
        </span>
      )}

      {img && (
        <div className={styles.img}>
          <img src={img} alt={alt} />
        </div>
      )}

      <h2
        className={styles.text}
        style={font ? { fontSize: `${font}em` } : { fontSize: "2em" }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
