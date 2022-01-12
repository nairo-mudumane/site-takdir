import styles from "./TodaySpecial.module.css";
import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import { Link } from "react-router-dom";

export default function TodaySpecial() {
  return (
    <>
      <Container>
        <div className={styles.title}>
          <Title text="Prato especial" font={2} />

          <Link to="/" className={styles.btnBuy}>
            Comprar
          </Link>
        </div>

        <div className={styles.muted}>
          <h5 className="text-muted">Lorem ipsu dolor sit amet</h5>
        </div>
      </Container>
    </>
  );
}
