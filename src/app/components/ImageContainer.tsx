import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";

type ImageProps = {
  id: number;
  image: string;
  imageAlt: string;
  backgroundColor?: string;
  width: number;
  height: number;
};

export default function ImageContainer(props: ImageProps) {
  const inputs = {};

  return (
    <div className={styles.imageContainer} style={inputs}>
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={props.width}
        height={props.height}
        className={styles.image}
      />
    </div>
  );
}
