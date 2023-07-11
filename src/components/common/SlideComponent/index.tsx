import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import SlideCard from "../SlideCard";

const SlideComponent = function () {
  return (
    <>
      <div className="d-flex position-relative flex-column align-items-center">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            width: 1200,
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
            <SlideCard pointName="Allison" imageUrl="/cards/bg-card.jpg" />
          </SplideSlide>
          <SplideSlide>
            <SlideCard pointName="Curitiba" imageUrl="/cards/bg-card.jpg" />
          </SplideSlide>
          <SplideSlide>
            <SlideCard pointName="Pinhais" imageUrl="/cards/bg-card.jpg" />
          </SplideSlide>
          <SplideSlide>
            <SlideCard
              pointName="Parque das Aguas Testando"
              imageUrl="/cards/bg-card.jpg"
            />
          </SplideSlide>
          <SplideSlide>
            <SlideCard pointName="Ruppel" imageUrl="/cards/bg-card.jpg" />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
