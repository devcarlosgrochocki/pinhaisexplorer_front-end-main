import { Container, Row, Col } from "reactstrap";
import TitleSectionComponent from "../../common/TitleSectionComponent";
import styles from "./styles.module.scss";

interface AboutTouristicPointProps {
  title: string;
  text: string;
  imgUrl: string;
}

const AboutTouristicPoint: React.FC<AboutTouristicPointProps> = ({
  title,
  text,
  imgUrl,
}) => {
  return (
    <section className="pb-5 mb-5">
      <TitleSectionComponent title={title} />
      <Container className="pb-5">
        <Row className="gap-5 gap-lg-0 align-items-center">
          <Col lg="6">
            <p className={`${styles.textJustify} fw-bold`}>{text}</p>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg="6"
          >
            <img src={imgUrl} alt={title} className={`${styles.img} img-fluid`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTouristicPoint;
