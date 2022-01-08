import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.flexContainer} row`}>
          <div className={`${styles.logo} col-lg-2`}>logo</div>
          <nav className={`${styles.logo} col-lg-10`}>navbar</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
