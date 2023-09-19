import { Container } from "reactstrap";
import TitleSectionComponent from "../../common/TitleSectionComponent";
import styles from "./styles.module.scss";
import GoogleMapComponent from "../../common/GoogleMap"; // Atualize o caminho conforme necessário

interface LocationSectionProps {
  title: string;
  hasBackground?: boolean;
  lat: number;
  lng: number;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  title,
  hasBackground = false,
  lat,
  lng,
}) => {
  const sectionClass = hasBackground ? `${styles.withBackground}` : "";
  const h2Class = hasBackground ? `${styles.whiteText}` : "";

  return (
    <section className={sectionClass}>
      <Container
        className={`${styles.container} d-flex flex-column align-items-center`}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TitleSectionComponent title={title} />
        <h2 className={h2Class}>
          Como chegar em Pinhais a partir da sua localização:
        </h2>
        <GoogleMapComponent lat={lat} lng={lng} />
      </Container>
    </section>
  );
};

export default LocationSection;
