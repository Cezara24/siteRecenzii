import styles from "./Review.module.css";

export default function Review(props) {
  const title = props.title;
  const year = props.year;
  const rating = props.rating;
  const genre = props.genre;
  const director = props.director;
  const writers = props.writers;
  const cast = props.cast;
  return (
    <section className={styles.Review}>
      <div className={styles.title}>{title}</div>
      <div className={styles.details}>
        <div className={styles.year}>Year: {year}</div>
        <div className={styles.rating}>Rating: {rating} ⭐</div>
        <div className={styles.genre}>Genre: {genre}</div>
        <div className={styles.director}>Director:{director}</div>
        <div className={styles.writers}>Writers:{writers}</div>
        <div className={styles.cast}>Cast: {cast}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Read the review</button>
      </div>
    </section>
  );
}
