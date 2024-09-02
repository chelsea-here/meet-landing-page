import styles from "../styles/Bubble.module.css";

type BubbleProps = {
  content: string;
}

export const Bubble: React.FC<BubbleProps> = ({content}) => {
  return (
    <div className={styles.number}>
      <div className={styles.line}>
      </div>
      <div className={styles.circle}>
        <p>{content}</p>
      </div>
    </div>
  )
}
