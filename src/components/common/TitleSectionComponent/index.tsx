import { Container } from "reactstrap";
import styles from "./styles.module.scss";

interface ContainerTitleSectionProps {
  theme: "yellow" | "green";
  title: string;
}

const ContainerTitleSection: React.FC<ContainerTitleSectionProps> = ({
  theme,
  title,
}) => {
  const themeClass =
  theme === "yellow" ? styles.yellowBackground : styles.greenBackground;
  return (
    <Container
      className="pb-5 d-flex justify-content-between align-items-end gap-4"
      aria-label="Container Title Section"
    >
      <div
        className={`${styles.rectangle} ${themeClass} d-none d-xl-flex`}
        aria-hidden="true"
      ></div>
      <div
        className={`${styles.title} text-center bg-white d-flex justify-content-center align-items-center gap-4 w-100`}
        aria-label="Title"
      >
        <div className={`${styles.rectangle} ${themeClass}`}  aria-hidden="true"></div>
        <h1 className={styles.newsTitle}>{title}</h1>
        <div className={`${styles.rectangle} ${themeClass}`} aria-hidden="true"></div>
      </div>
      <div
        className={`${styles.rectangle} ${themeClass} d-none d-xl-flex`}
        aria-hidden="true"
      ></div>
    </Container>
  );
};

export default ContainerTitleSection;
