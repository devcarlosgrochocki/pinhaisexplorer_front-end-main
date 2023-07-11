import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import TitleSectionComponent from "../../common/TitleSectionComponent";
import SlideComponent from "../../common/SlideComponent";

const TouristSpotSection: React.FC = () => {
  return (
    <>
      <Container
        className={styles.container}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TitleSectionComponent title="Principais pontos turísticos" />
        <SlideComponent />
      </Container>
    </>
  );
};

export default TouristSpotSection;
