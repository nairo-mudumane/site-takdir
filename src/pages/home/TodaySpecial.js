import styles from "./TodaySpecial.module.css";
import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import { Link } from "react-router-dom";

export default function TodaySpecial() {
  return (
    <>
      <Container>
        <div className={styles.muted}>
          <h5 className="text-muted">Promocao do dia</h5>
        </div>

        <div className={styles.title}>
          <Title text="Lorem ipsu" font={2.0} color="var(--color-black-1-)" />

          <Link to="/" className={styles.btnBuy}>
            Comprar
          </Link>
        </div>
      </Container>
    </>
  );
}
