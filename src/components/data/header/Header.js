import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.radius}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className={styles.nav}>
                  <ul>
                    <li>
                      <NavLink to="/" className={styles.link}>
                        <i className="fas fa-home" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/test" className={styles.link}>
                        <i className="fas fa-home" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/asda" className={styles.link}>
                        <i className="fas fa-home" />
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={`${styles.border} col-lg-6`}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
