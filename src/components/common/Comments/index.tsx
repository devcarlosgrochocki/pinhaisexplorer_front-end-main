// CommentsSection.tsx
import { Container, Row, Col, Button } from "reactstrap";
import TitleSectionComponent from "../../common/TitleSectionComponent";
import styles from "./styles.module.scss";
import CommentCard from "../CommentCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface CommentsSectionProps {
  title: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ title }) => {
  return (
    <section className={styles.container}>
      <TitleSectionComponent title={title} />
      <Container className="pb-5">
        <Row className="align-items-center gap-3 gap-lg-0 pb-5">
          <Col className="text-center text-lg-start" lg="8" md="12">
            <p className={`${styles.subTitle} fw-bold`}>
              Últimos comentários feitos sobre a “Capela Nossa Senhora da Luz”
            </p>
          </Col>
          <Col
            className="text-right d-flex justify-content-center justify-content-lg-end"
            lg="4"
            md="12"
          >
            <Button
              className={`${styles.btn} fw-bold d-flex gap-2 justify-content-space-between align-items-center`}
              aria-label="Botão para Criar Conta"
            >
              <img src="./comments/icon.svg" alt="" />
              <p>Adicionar comentário</p>
            </Button>
          </Col>
        </Row>
        <Splide
          options={{
            type: "loop",
            perPage: 3, // Número de cartões por slide
            arrows: false,
            pagination: false,
            gap: "1rem",
            fixedWidth: "14.24rem", // Largura de cada cartão
            breakpoints: {
              1200: {
                perPage: 3,
              },
              992: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <CommentCard
              imageUrl="./comments/avatar2.jpeg"
              name="Rafael Ruppel"
              comment="Eu dei muito a bunda nesse lugar! Foi incrivel esse dia!"
            />
          </SplideSlide>
          <SplideSlide>
            <CommentCard
              imageUrl="./comments/avatar1.jpeg"
              name="Allison H. Damaceno"
              comment="Adorei dar! Foi tão bom dar nesse lugar"
            />
          </SplideSlide>
        </Splide>
      </Container>
    </section>
  );
};

export default CommentsSection;
