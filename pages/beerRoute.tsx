import Head from "next/head";
import HeaderNoAuth from "../src/components/Home/HeaderNoAuth";
import PresentationSection from "../src/components/Home/PresentationSection";
import styles from "../styles/beerRoute.module.scss";
import TitleSectionComponent from "../src/components/common/TitleSectionComponent";
import PhotoGallery from "../src/components/TouristPoint/PhotoGallery";
import AboutTouristicPoint from "../src/components/TouristPoint/AboutTouristicPoint";
import LocationSection from "../src/components/Home/LocationSection";
import Footer from "../src/components/common/Footer";
import Comments from "../src/components/common/Comments";
import TouristSpotSection from "../src/components/Home/TouristSpotSection";

const BeerRoute = function () {
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
        <title>Pinhais Explorer - Rota da Cerveja</title>
        <link
          rel="shortcut icon"
          href="/favicon/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <HeaderNoAuth theme="yellow" />
      <main>
        <PresentationSection
          titleContent={
            <>
              <h1 className={styles.titleWhite}>Bem vindo à</h1>
              <h1 className={styles.titleYellow}>Rota da Cerveja!</h1>
            </>
          }
          backgroundImageUrl={"./points/beerBackground.jpg"}
        />
        <TouristSpotSection theme="yellow" />

        <TitleSectionComponent theme="yellow" title="Galeria de fotos da “Rota da Cerveja”" />
        <PhotoGallery images={images} />
        <LocationSection
          title="Como chegar na “Rota da Cerveja”"
          hasBackground={true}
        />
        <AboutTouristicPoint
          title="Sobre a “Rota da Cerveja”"
          imgUrl="/favicon/iconeBeerRoute.jpg"
          text="A Rota da Cerveja busca oferecer a você opções de cervejas inovadoras que te levam a descobertas de aromas e sabores inusitados.

 
          Aos apreciadores, descortina-se um novo caminho, uma alternativa para saborear calmamente cervejas produzidas com paixão, com esmero, com capricho, com gostinho do bem receber que te acolhe num gole, de braços abertos.
           
          Para àqueles que ainda não são consumidores de cervejas abre-se uma porta que desperta o desejo de provar, de experimentar.
           
          Desejamos que você mergulhe em um novo conceito, descubra que por trás da fabricação de uma cerveja há técnica, pesquisa, seleção de produtos, respeitando uma cultura milenar que traz consigo a experiência do fazer artesanal."
        />
        <Comments
          theme="yellow"
          title="Comentários sobre a “Rota da Cerveja”"
        />
      </main>
      <Footer theme="yellow" />
    </>
  );
};

export default BeerRoute;
