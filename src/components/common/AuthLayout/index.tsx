import React, { FunctionComponent } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

interface AuthLayoutProps {
  children?: React.ReactNode;
  actionText: string;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({
  children,
  actionText,
}) => {
  return (
    <div
      className={`${styles.background} d-flex justify-content-center align-items-start align-items-sm-center`}
    >
      <img
        src="./login/circle-1.svg"
        alt="Circle image 1"
        className={styles.circleImage1}
        loading="lazy"
      />
      <img
        src="./login/circle-2.svg"
        alt="Circle image 2"
        className={styles.circleImage2}
        loading="lazy"
      />
      <img
        src="./login/circle-3.svg"
        alt="Circle image 3"
        className={styles.circleImage3}
        loading="lazy"
      />
      <Container
        className={`${styles.container} ${styles.positionRelative} d-flex justify-content-center align-items-center`}
      >
        <Link href="/">
          <a>
            <img
              src="./login/arrow-left.svg"
              alt="Back arrow"
              className={`${styles.arrowImage}`}
              loading="lazy"
            />
          </a>
        </Link>
        <img
          src="./login/circle-4.svg"
          alt="Circle image 4"
          className={styles.circleImage4}
          loading="lazy"
        />
        <img
          src="./login/circle-5.svg"
          alt="Circle image 5"
          className={styles.circleImage5}
          loading="lazy"
        />
        <Row className={`${styles.loginRow} w-100`}>
          <Col
            lg="6"
            className={`${styles.leftSide} d-none d-lg-flex flex-column justify-content-center align-items-center`}
          >
            <div className="d-flex flex-column justify-content-center px-5">
              <p className={`${styles.text} text-left`}>
                Olá, seja bem-vindo(a) ao
              </p>
              <p className={`${styles.text} ${styles.siteTurismo} text-left`}>
                Site de Turismo
              </p>
              <p className={`${styles.text} text-left`}>
                da cidade de Pinhais!
              </p>
              <span
                className={`${styles.text} ${styles.textDestaque} text-left`}
              >
                {actionText}
              </span>
            </div>
          </Col>
          <Col lg="6" className={styles.rightSide}>
            <div className="content">
              <div className="d-flex justify-content-center mt-3 pb-3">
                <img
                  src="./logos/logo_projeto.svg"
                  alt="Logo da Prefeitura de Pinhais"
                  width={180}
                  loading="lazy"
                />
              </div>
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;
