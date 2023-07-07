import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
const HeaderNoAuth = function () {
  return (
    <>
      <header className={styles.header}>
        <img
          src="/logos/logo_projeto.svg"
          alt="logoProjeto"
          className={styles.imgLogoNav}
        />
        <div className={styles.nav}>
          <Link href="/login">
            <Button className={`${styles.navBtn} ${styles.navBtnLogin}`}>
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button className={`${styles.navBtn} ${styles.navBtnRegister}`}>
              Criar conta
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderNoAuth;
