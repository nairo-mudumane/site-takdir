import styles from "./Title.module.css";

const Title = ({ text, color, font, icon, iconTopMargin, img, alt }) => {
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

      <div style={color ? { color: color } : { color: "var(--color-white-1)" }}>
        <h2
          className={`${styles.text} no-margin`}
          style={font ? { fontSize: `${font}em` } : { fontSize: "2em" }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Title;
