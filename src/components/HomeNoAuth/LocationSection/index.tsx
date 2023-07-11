import { Container } from "reactstrap";
import TitleSectionComponent from "../../common/TitleSectionComponent";
import styles from "./styles.module.scss";

const LocationSection: React.FC = () => {
  return (
    <>
      <Container
        className={`${styles.container} d-flex flex-column align-items-center`}
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <TitleSectionComponent title="Como chegar em Pinhais" />
        <h2>Como chegar em Pinhais a partir da sua localização:</h2>
        <img src="/location/maps.svg" alt="maps" />
      </Container>
    </>
  );
};

export default LocationSection;
