import React from "react";
import styles from "./styles.module.scss";

interface CommentCardProps {
  imageUrl: string;
  name: string;
  comment: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  imageUrl,
  name,
  comment,
}) => {
  return (
    <div className={`${styles.card} d-flex flex-column`}>
      <div className={`${styles.imageContainer} d-flex justify-content-center`}>
        <img src={imageUrl} alt="User's avatar" className={styles.userImage} />
      </div>
      <div
        className={`${styles.commentContainer} d-flex flex-column justify-content-start `}
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
