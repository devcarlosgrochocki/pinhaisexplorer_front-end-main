// PhotoGallery.tsx

import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Container } from "reactstrap";
import styles from "./styles.module.scss";

interface PhotoGalleryProps {
  images: string[];
}

const PhotoGallery: FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <Container className={styles.container}>
      <Splide
        options={{
          type: "loop",
          perPage: 2,
          gap: "1rem",
          arrows: false,
          breakpoints: {
            576: {
              perPage: 1,
            },
            768: {
              perPage: 1,
            },
            992: {
              perPage: 1,
            },
            1200: {
              perPage: 1,
            },
            1540: {
              perPage: 2,
            },
          },
        }}
        style={{ position: "absolute", width: "100%" }}
      >
        {images.map((image, index) => (
          <SplideSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={image}
              alt={`Touristic Point ${index}`}
              style={{ maxWidth: "490px", maxHeight: "262px" }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default PhotoGallery;
