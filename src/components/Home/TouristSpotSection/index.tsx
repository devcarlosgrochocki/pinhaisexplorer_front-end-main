import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import TitleSectionComponent from "../../common/TitleSectionComponent";
import SlideComponent from "../../common/SlideComponent";

interface TouristSpotSection {
  theme: "yellow" | "green";
  touristPoints: Array<any>;
}

const TouristSpotSection: React.FC<TouristSpotSection> = ({ theme , touristPoints}) => {
  const themeClass =
    theme === "yellow" ? styles.yellowBackground : styles.greenBackground;
  return (
    <section className={themeClass}>
      <Container
        className={styles.container}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TitleSectionComponent theme="green" title="Principais pontos turísticos" />
        <SlideComponent theme={theme} />
      </Container>
    </section>
  );
};

export default TouristSpotSection;
