import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <div className={styles.Logo}>
        <div className={styles.iconsContainer}>
          <span
            className={`${styles.icon} ${styles.icon__stars} ${styles.icon__star1} material-icons-round`}
          >
            star
          </span>
          <span
            className={`${styles.icon} ${styles.icon__stars} ${styles.icon__star2} material-icons-round`}
          >
            star
          </span>
          <span
            className={`${styles.icon} ${styles.icon__stars} ${styles.icon__star3} material-icons-round`}
          >
            star
          </span>
          <span
            className={`${styles.icon} ${styles.icon__camera} material-icons-round`}
          >
            movie_filter
          </span>
        </div>
        <div className={styles.logoText}>Screen Score</div>
      </div>
    </Link>
  );
}
