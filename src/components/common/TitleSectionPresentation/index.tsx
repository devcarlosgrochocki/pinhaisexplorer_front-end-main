import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

const TitleSectionPresentation = ({ children }: Props) => {
  return <div className="text-center text-sm-start">{children}</div>;
};

export default TitleSectionPresentation;
