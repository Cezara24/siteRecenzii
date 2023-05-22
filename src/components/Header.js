import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Logo></Logo>
      <div className={styles.navbar}>
        <Link to="/">
          <button className={styles.button}>Home</button>
        </Link>
        <Link to="/browse">
          <button className={styles.button}>Browse</button>
        </Link>
        <Link to="/write-a-review">
          <button className={styles.button}>Write a review</button>
        </Link>
      </div>
    </header>
  );
}
