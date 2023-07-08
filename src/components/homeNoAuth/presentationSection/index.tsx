import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRef } from "react";

const PresentationSection = function () {
  const inputRef = useRef<HTMLInputElement | null>(null); // Inicializa o useRef corretamente

  const handleIconClick = () => {
    inputRef.current?.focus(); // inputRef.current é agora um elemento de entrada HTML, então ele tem o método focus
  };

  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md className={`${styles.container} d-flex flex-column gap-4`}>
            <div className={styles.welcomeMessage}>
              <p className={styles.intro}>Olá, seja bem-vindo(a) ao</p>
              <p className={styles.title}>Site de Turismo</p>
              <p className={styles.location}>da cidade de Pinhais</p>
            </div>
            <div className={styles.searchBar}>
              <img
                src="/search/search_icon.svg"
                alt="logoSearch"
                onClick={handleIconClick}
              />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Pesquise alguma informação em nosso site"
                ref={inputRef}
              />
            </div>
            <div className={styles.callToAction}>
              <p className={styles.createAccountMessage}>
                Crie uma conta e desfrute do melhor do nosso site!
              </p>
              <Link href="/register">
                <Button className={styles.btnRegister}>Criar conta</Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center pt-5">
            <img
              src="/cards/arrow_icon.svg"
              alt="arrowDown"
              className={styles.arrowImg}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
