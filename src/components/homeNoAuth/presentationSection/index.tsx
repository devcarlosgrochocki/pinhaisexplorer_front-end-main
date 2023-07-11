import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRef } from "react";

const PresentationSection = function () {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Container className={styles.container}>
        <Row className="gx-0">
          <Col
            md
            className={`d-flex flex-column align-items-center align-items-sm-start gap-5`}
          >
            <header className="text-center text-sm-start">
              <h1 className={styles.intro}>Olá, seja bem-vindo(a) ao</h1>
              <h2 className={styles.title}>Site de Turismo</h2>
              <h3 className={styles.location}>da cidade de Pinhais</h3>
            </header>
            <div
              className={`${styles.searchBar} bg-white d-flex align-items-center gap-2`}
            >
              <img
                src="/search/search_icon.svg"
                alt="Ícone de pesquisa"
                onClick={handleIconClick}
              />
              <input
                type="text"
                className={`${styles.searchInput} bg-transparent border-0 outline-none w-100`}
                placeholder="Pesquise alguma informação em nosso site"
                ref={inputRef}
              />
            </div>
            <div className="d-flex flex-column gap-3 align-items-sm-start align-items-center">
              <p className={styles.createAccountMessage}>
                Crie uma conta e desfrute do melhor do nosso site!
              </p>
              <Link href="/register">
                <Button className={styles.btnRegister}>Criar conta</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
