import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "../src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "../src/components/HomeNoAuth/PresentationSection";
import TouristSpotSection from "../src/components/HomeNoAuth/TouristSpotSection";
import LocationSection from "../src/components/HomeNoAuth/LocationSection";
import Footer from "../src/components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeNoAuth = () => {
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
      {/* O HEADER ESTAVA DENTRO DA MAIN */}
      {/* <HeaderNoAuth /> */}
      <main data-aos="fade-zoom-in" data-aos-duration="1600">
        <HeaderNoAuth />
        <div className={styles.sectionBackgroundPresentation}>
          <PresentationSection />
        </div>
        <div className={styles.sectionBackgroundTouristSpot}>
          <TouristSpotSection />
        </div>
        <LocationSection />
        <footer className={styles.sectionBackgroundFooter}>
          <Footer />
        </footer>
      </main>
      {/* O FOOTER ESTAVA DENTRO DA MAIN */}
      {/* <footer className={styles.sectionBackgroundFooter}>
        <Footer />
      </footer> */}
    </>
  );
};

export default HomeNoAuth;
