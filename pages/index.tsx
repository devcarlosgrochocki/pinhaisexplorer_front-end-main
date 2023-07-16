import Head from "next/head";
import HeaderNoAuth from "../src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "../src/components/HomeNoAuth/PresentationSection";
import TouristSpotSection from "../src/components/HomeNoAuth/TouristSpotSection";
import LocationSection from "../src/components/HomeNoAuth/LocationSection";
import Footer from "../src/components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeNoAuth = function () {
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
      <HeaderNoAuth />
      <main data-aos="fade-zoom-in" data-aos-duration="1600">
        <PresentationSection />
        <TouristSpotSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
};

export default HomeNoAuth;
