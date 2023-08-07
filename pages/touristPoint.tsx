import Head from "next/head";
import HeaderNoAuth from "../src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "../src/components/HomeNoAuth/PresentationSection";
import styles from "../styles/touristPoint.module.scss";
import TitleSectionComponent from "../src/components/common/TitleSectionComponent";
import PhotoGallery from "../src/components/TouristPoint/PhotoGallery";
import AboutTouristicPoint from "../src/components/TouristPoint/AboutTouristicPoint";
import LocationSection from "../src/components/HomeNoAuth/LocationSection";
import Footer from "../src/components/common/Footer";
import Comments from "../src/components/common/Comments";

const TouristPoint = function () {
  const images = [
    "/cards/bg-card.svg",
    "/cards/bg-card.svg",
    "/cards/bg-card.svg",
    "/cards/bg-card.svg",
    "/cards/bg-card.svg",
    "/cards/bg-card.svg",
  ];

  return (
    <>
      <Head>
        <title>Pinhais Explorer - Ponto Turistico</title>
        <link
          rel="shortcut icon"
          href="/favicon/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <HeaderNoAuth />
      <main>
        <PresentationSection
          titleContent={
            <>
              <h1 className={styles.titleWhite}>Capela Nossa</h1>
              <h1 className={styles.titleGreen}>Senhora da Luz</h1>
            </>
          }
          backgroundImageUrl={"./background/capela.svg"}
        />
        <TitleSectionComponent title="Galeria de fotos da “Capela Nossa Senhora da Luz”" />
        <PhotoGallery images={images} />
        <LocationSection
          title="Como chegar em “Capela Nossa Senhora da Luz”"
          hasBackground={true}
        />
        <AboutTouristicPoint
          title="Sobre a “Capela Nossa Senhora da Luz”"
          imgUrl="/cards/bg-card.svg"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book... "
        />
        <Comments title="Comentários sobre a “Capela Nossa Senhora da Luz”" />
      </main>
      <Footer />
    </>
  );
};

export default TouristPoint;
