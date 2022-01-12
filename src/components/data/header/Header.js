import { NavLink } from "react-router-dom";
import Title from "../../text/Title";
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
                        <Title
                          text="Inicio"
                          color="var(--color-black-1)"
                          font={1}
                          icon="fas fa-home"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/requests" className={styles.link}>
                        <Title
                          text="Pedidos"
                          color="var(--color-black-1)"
                          font={1}
                          icon="fas fa-clipboard-list"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/perfil" className={styles.link}>
                        <Title
                          text="Perfil"
                          color="var(--color-black-1)"
                          font={1}
                          icon="fas fa-user"
                        />
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-12">
                <div className={styles.border} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
