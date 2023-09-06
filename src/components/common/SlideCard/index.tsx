import React, { FC } from "react";
import styles from "./styles.module.scss";

interface SlideCardProps {
  theme: "yellow" | "green";
  pointName: string;
  imageUrl: string;
}

const SlideCard: FC<SlideCardProps> = ({theme, pointName, imageUrl }) => {
  const themeClass =
  theme === "yellow" ? styles.yellowBackground : styles.greenBackground;
  return (
    <div
      className={`${styles.card}`}
      style={{
        backgroundImage: `linear-gradient(178deg, rgba(0, 0, 0, 0.00) 0%, #000 70.31%), url(${imageUrl})`,
      }}
    >
      <div className={`${styles.cardHover} ${themeClass}`}></div>
      <div className={`${styles.cardFooter}`}>
        <h1 className={styles.cardPointName}>{pointName}</h1>
        <img src="cards/arrow_icon.svg" alt="Arrow icon" />
      </div>
    </div>
  );
};

export default SlideCard;
