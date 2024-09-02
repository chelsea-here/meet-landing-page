import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={119}
        height={28}
        className={styles.image}
      />
    </div>
  );
}
