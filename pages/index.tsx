import Head from "next/head";
import HeaderNoAuth from "../src/components/Home/HeaderNoAuth";
import PresentationSection from "../src/components/Home/PresentationSection";
import TouristSpotSection from "../src/components/Home/TouristSpotSection";
import LocationSection from "../src/components/Home/LocationSection";
import BannerBeer from "../src/components/Home/BannerBeer";
import Footer from "../src/components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styles from "../styles/index.module.scss";

const Home = function () {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Pinhais Explorer</title>
        <link
          rel="shortcut icon"
          href="/favicon/favicon.png"
          type="image/x-icon"
        />
        <meta property="og:title" content="Pinhais Explorer" key="title" />
        <meta
          name="description"
          content="Explore as principais atrações turísticas, mapas, rotas e informações sobre Pinhais. Recursos de login, comentários e geolocalização disponíveis."
        />
      </Head>
      <HeaderNoAuth theme="green" />
      <main data-aos="fade-zoom-in" data-aos-duration="1600">
        <PresentationSection
          titleContent={
            <>
              <h1 className={styles.intro}>Olá, seja bem-vindo(a) ao</h1>
              <h2 className={styles.title}>Site de Turismo</h2>
              <h3 className={styles.location}>da cidade de Pinhais</h3>
            </>
          }
          showRegisterCTA={true}
          backgroundImageUrl={"./background/presentation.svg"}
        />
        <BannerBeer />
        <TouristSpotSection theme="green" />
        <LocationSection title="Como chegar em Pinhais" />
      </main>
      <Footer theme="green" />
    </>
  );
};

export default Home;
