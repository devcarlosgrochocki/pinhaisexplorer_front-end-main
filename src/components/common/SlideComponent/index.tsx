import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import SlideCard from "../SlideCard";
import Link from "next/link";
import React from "react";
import { TouristPointServices } from "../../../services/modules/touristPoint";

const splideOptions = {
  type: "loop",
  perPage: 4,
  perMove: 1,
  width: 1200,
  arrows: false,
  pagination: true,
  breakpoints: {
    1200: {
      perPage: 3,
      width: 900,
    },
    900: {
      perPage: 2,
      width: 640,
    },
    640: {
      perPage: 1,
      width: 300,
    },
    300: {
      width: 250,
    },
  },
};

interface SlideComponentProps {
  theme: "yellow" | "green";
}

const SlideComponent: React.FC<SlideComponentProps> = ({
  theme,
}) => {
  const [touristPoints, setTouristPoints] = React.useState([]);
  const getTouristPoints = React.useCallback(async () => {
    try {
      const response = await TouristPointServices.getAllTouristPoint(); // Assumindo que este método existe

      setTouristPoints(response.data);
    } catch (error) {
      console.error("Erro ao buscar pontos turísticos:", error);
    }
  }, [])

  React.useEffect(() => {
    getTouristPoints();
  }, [getTouristPoints])

  return (
    <>
      <div className="d-flex position-relative flex-column align-items-center">
        <Splide options={splideOptions}>
          {touristPoints.map(({name, url, imagePath}) => (
            <SplideSlide key={name}>
              <Link href={`/ponto-turistico${url}`}>
                <a style={{ color: "inherit", textDecoration: "none" }}>
                  <SlideCard
                    theme={theme}
                    pointName={name}
                    imageUrl={imagePath}
                  />
                </a>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
