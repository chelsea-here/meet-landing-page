import styles from "../styles/Button.module.css";

type ButtonProps = {
  content: string;
  contentSpan?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  content,
  contentSpan,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const buttonClass = `${styles.button} ${variant === "secondary" ? styles.secondary : styles.primary}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {content} <span className={styles.span}>{contentSpan}</span>
    </button>
  );
};

export default Button;
