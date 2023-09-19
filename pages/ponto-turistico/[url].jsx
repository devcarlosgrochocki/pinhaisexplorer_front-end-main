import Head from "next/head";
import HeaderNoAuth from "../../src/components/Home/HeaderNoAuth";
import PresentationSection from "../../src/components/Home/PresentationSection";
import styles from "../../styles/touristPoint.module.scss";
import TitleSectionComponent from "../../src/components/common/TitleSectionComponent";
import PhotoGallery from "../../src/components/TouristPoint/PhotoGallery";
import AboutTouristicPoint from "../../src/components/TouristPoint/AboutTouristicPoint";
import LocationSection from "../../src/components/Home/LocationSection";
import Footer from "../../src/components/common/Footer";
import Comments from "../../src/components/common/Comments";
import React from "react";

import { useRouter } from "next/router";
import { TouristPointServices } from "../../src/services/modules/touristPoint";

const TouristPoint = function () {
  const [pageData, setPageData] = React.useState(null);

  const [url, setUrl] = React.useState(null);

  const router = useRouter();

  const getPageProps = React.useCallback(async (url) => {
    try {
      const pageProps = await TouristPointServices.getTouristPointByUrl(url);
      setPageData(pageProps.data[0]);
      console.log(pageProps);
    } catch (error) {}
  }, []);

  React.useEffect(() => {
    if (router.query.url) getPageProps(router.query.url);
  }, [router]);

  if (pageData)
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
                <h1 className={styles.titleWhite}>
                  {pageData.name.split(" ")[0]}
                </h1>
                <h1 className={styles.titleGreen}>
                  {pageData.name.split(" ").slice(1).join(" ")}
                </h1>
              </>
            }
            backgroundImageUrl={pageData.imagePath}
          />
          <TitleSectionComponent
            theme="green"
            title={`Galeria de fotos da “${pageData.name}”`} // Usando name do JSON
          />
          <PhotoGallery images={pageData.gallery} />
          <LocationSection
            title={`Como chegar em “${pageData.name}”`}
            hasBackground={true}
            lat={pageData.latitude}
            lng={pageData.longitude}
          />
          <AboutTouristicPoint
            title={`Sobre o “${pageData.name}”`} // Usando name do JSON
            imgUrl={pageData.imagePath} // Usando imagePath do JSON
            text={pageData.description}
          />
          <Comments
            theme="green"
            title={`Comentários sobre o “${pageData.name}”`} // Usando name do JSON
          />
        </main>
        <Footer theme="green" />
      </>
    );
};

export default TouristPoint;
