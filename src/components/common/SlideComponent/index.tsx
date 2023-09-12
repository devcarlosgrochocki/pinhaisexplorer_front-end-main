import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import SlideCard from "../SlideCard";
import Link from "next/link";

interface SlideComponentProps {
  theme: "yellow" | "green";
}

const SlideComponent: React.FC<SlideComponentProps> = ({ theme }) => {
  return (
    <>
      <div className="d-flex position-relative flex-column align-items-center">
        <Splide
          options={{
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
          }}
        >
          <SplideSlide>
            <Link href="/touristPoint">
              <a style={{ color: "inherit", textDecoration: "none" }}>
                <SlideCard theme={theme} pointName="Parque das Águas" imageUrl="/points/parqueDasAguas.png" />
              </a>
            </Link>
          </SplideSlide>
          <SplideSlide>
            <SlideCard theme={theme} pointName="Bosque Municipal de Pinhais" imageUrl="/points/parqueDasAguas.png" />
          </SplideSlide>
          <SplideSlide>
            <SlideCard theme={theme} pointName="Panoramico Parque Clube" imageUrl="/points/parqueDasAguas.png" />
          </SplideSlide>
          <SplideSlide>
            <SlideCard
              theme={theme}
              pointName="Capela Nossa Senhora da Luz"
              imageUrl="/points/parqueDasAguas.png"
            />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
