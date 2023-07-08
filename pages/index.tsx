import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";

const HomeNoAuth = () => {
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
      <main>
        <HeaderNoAuth />
        <div className={styles.sectionBackground}>
          <PresentationSection />
        </div>
      </main>
    </>
  );
};

export default HomeNoAuth;
