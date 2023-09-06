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
    "/points/parqueDasAguas.png",
    "/points/parqueDasAguas.png",
    "/points/parqueDasAguas.png",
    "/points/parqueDasAguas.png",
    "/points/parqueDasAguas.png",
    "/points/parqueDasAguas.png",
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
      <HeaderNoAuth theme="green" />
      <main>
        <PresentationSection
          titleContent={
            <>
              <h1 className={styles.titleWhite}>Parque</h1>
              <h1 className={styles.titleGreen}>das Águas</h1>
            </>
          }
          backgroundImageUrl={"./points/parqueDasAguasBackground.png"}
        />
        <TitleSectionComponent theme="green" title="Galeria de fotos da “Parque das Águas”" />
        <PhotoGallery images={images} />
        <LocationSection
          title="Como chegar em “Parque das Águas”"
          hasBackground={true}
        />
        <AboutTouristicPoint
          title="Sobre o “Parque das Águas”"
          imgUrl="/points/parqueDasAguas.png"
          text="O Parque das Águas de Pinhais é um dos maiores e mais belos parques da região metropolitana de Curitiba. Localizado na cidade de Pinhais, o parque possui uma área de 1,4 milhão de metros quadrados e oferece diversas atrações para moradores e visitantes de todas as idades.

          O parque é um verdadeiro oásis de paz e tranquilidade em meio à agitação da cidade. Sua exuberante vegetação, composta por árvores nativas e exóticas, abriga uma rica fauna, que inclui aves, mamíferos e répteis.
          
          O Parque das Águas é um excelente local para atividades ao ar livre. O parque conta com pistas de caminhada e ciclovias, academia ao ar livre, parquinho infantil e áreas de piquenique. Além disso, o parque abriga o Lago das Águas, um espaço ideal para pesca e lazer.
          
          O Parque das Águas também é um importante centro de preservação ambiental. O parque abriga o Centro de Educação Ambiental, que promove atividades de educação ambiental para crianças e adultos.
          
          O Parque das Águas é um espaço de lazer, cultura e educação que contribui para o desenvolvimento sustentável de Pinhais"
        />
        <Comments
          theme="green"
          title="Comentários sobre o “Parque das Águas”"
        />
      </main>
      <Footer theme="green" />
    </>
  );
};

export default TouristPoint;
