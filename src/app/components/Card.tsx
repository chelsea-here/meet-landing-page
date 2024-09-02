import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "../css/page.module.css";

type CardProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  color: string;
  backgroundColor: string;
  testimonial: string;
  backgroundStatement: string;
};

export default function CardComponent(props: CardProps) {
  const cardColor = {
    backgroundColor: `var(${props.backgroundColor})`,
    color: `var(${props.color})`,
  };

  return (
    <article className={styles.card} style={cardColor}>
      <div className={styles.titleContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={props.image}
            alt="Image of testimonial giver"
            width={56}
            height={56}
            className={styles.image}
          />
        </div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
      <p className={styles.testimonial}>{props.testimonial}</p>
      <q className={styles.backgroundStatement}>{props.backgroundStatement}</q>
    </article>
  );
}
