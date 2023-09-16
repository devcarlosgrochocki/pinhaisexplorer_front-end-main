import React, { ReactNode } from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import SearchBar from "../../common/SearchBar";
import RegisterCallToAction from "../../common/RegisterCallToAction";
import TitleSectionPresentation from "../../common/TitleSectionPresentation";

interface PresentationSectionProps {
  titleContent: ReactNode;
  showRegisterCTA?: boolean;
  backgroundImageUrl: string;
}

const PresentationSection: React.FC<PresentationSectionProps> = ({
  titleContent,
  showRegisterCTA = false,
  backgroundImageUrl,
}) => {
  const bgStyle = {
    background: `linear-gradient(
      91deg,
      #000 11.98%,
      rgba(0, 0, 0, 0) 53.13%,
      #000 88.02%
    ), url(${backgroundImageUrl}) center / cover no-repeat`,
  };

  return (
    <section className={styles.sectionBackgroundPresentation} style={bgStyle}>
      <Container
        className={styles.container}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <Row className="gx-0">
          <Col
            md
            className={`d-flex flex-column align-items-center align-items-sm-start gap-5`}
          >
            <TitleSectionPresentation>{titleContent}</TitleSectionPresentation>
            <SearchBar />
            {showRegisterCTA && <RegisterCallToAction />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PresentationSection;
