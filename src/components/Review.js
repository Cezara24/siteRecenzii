import styles from "./Review.module.css";
import { Link } from "react-router-dom";
import Stars from "./Stars";
import { Data } from "../data";

export default function Review(props) {
  const name = props.name;
  const data = Data();
  const movieData = data[name];
  const title = movieData.title;
  const year = movieData.year;
  const rating = movieData.rating;
  const genre = movieData.genre;
  const director = movieData.director;
  const writers = movieData.writers;
  const cast = movieData.cast;
  const link = props.link;
  return (
    <section className={styles.Review}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.details}>
          <div className={styles.year}>Year: {year}</div>
          <div className={styles.rating}>
            Rating: {rating} <Stars stars={rating} />
          </div>
          <div className={styles.genre}>Genre: {genre}</div>
          <div className={styles.director}>Director:{director}</div>
          <div className={styles.writers}>Writers:{writers}</div>
          <div className={styles.cast}>Cast: {cast}</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={link}>
          <button className={styles.button}>Read the review</button>
        </Link>
      </div>
    </section>
  );
}
