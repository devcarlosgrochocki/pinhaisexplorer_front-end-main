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
  const textWithBreaks = text.split('\n').map((str, index, array) => (
    <>
      {str}
      {index === array.length - 1 ? null : <br />}
    </>
  ));

  return (
    <section className="pb-5 mb-5">
      <TitleSectionComponent theme="green" title={title} />
      <Container className="pb-5">
        <Row className="gap-5 gap-lg-0 align-items-center">
          <Col lg="7">
            <p className={`${styles.textJustify} fw-bold`}>
              {textWithBreaks}
            </p>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg="5"
          >
            <img src={imgUrl} alt={title} className={`${styles.img} img-fluid`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default AboutTouristicPoint;
 