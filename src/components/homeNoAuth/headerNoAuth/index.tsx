import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = function () {
  return (
    <header>
      <Container className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-center py-4">
        <Link href="/">
          <img
            src="/logos/logo_projeto.svg"
            alt="Logo do Projeto"
            className={styles.imgLogoProjeto}
          />
        </Link>
        <div className="d-flex gap-2">
          <Link href="/login">
            <Button
              className={`${styles.navBtn} ${styles.navBtnLogin}`}
              aria-label="Botão de Entrar"
            >
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button
              className={`${styles.navBtn} ${styles.navBtnRegister}`}
              aria-label="Botão para Criar Conta"
            >
              Criar conta
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default HeaderNoAuth;
