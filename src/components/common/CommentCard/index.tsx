import React from "react";
import styles from "./styles.module.scss";

interface CommentCardProps {
  theme: "yellow" | "green";
  imageUrl: string;
  name: string;
  comment: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  theme,
  imageUrl,
  name,
  comment,
}) => {
  const themeClass =
    theme === "yellow" ? styles.yellowBackground : styles.greenBackground;
  return (
    <div className={`${styles.card} d-flex flex-column`}>
      <div className={`${styles.imageContainer} d-flex justify-content-center`}>
        <img src={imageUrl} alt="User's avatar" className={styles.userImage} />
      </div>
      <div
        className={`${styles.commentContainer} ${themeClass} d-flex flex-column justify-content-start `}
      >
        <p
          className={`${styles.commentName} d-flex flex-column justify-content-center `}
        >
          {name}
        </p>
        <p className={styles.commentContent}>{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
