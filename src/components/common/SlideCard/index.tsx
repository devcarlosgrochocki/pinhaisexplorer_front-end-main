import React, { FC } from "react";
import styles from "./styles.module.scss";

interface SlideCardProps {
  pointName: string;
  imageUrl: string;
}

const SlideCard: FC<SlideCardProps> = ({ pointName, imageUrl }) => {
  return (
    <div
      className={`${styles.card}`}
      style={{
        backgroundImage: `linear-gradient(178deg, rgba(0, 0, 0, 0.00) 0%, #000 70.31%), url(${imageUrl})`,
      }}
    >
      <div className={`${styles.cardHover}`}></div>
      <div className={`${styles.cardFooter}`}>
        <h1 className={styles.cardPointName}>{pointName}</h1>
        <img src="cards/arrow_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default SlideCard;
