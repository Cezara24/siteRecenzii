import styles from "./Review.module.css";

export default function Review() {
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
            <div className={styles.year}>{year}</div>
            <div className={styles.rating}>{rating}</div>
            <div className={styles.genre}>{genre}</div>
            <div className={styles.director}>{director}</div>
            <div className={styles.writers}>{writers}</div>
            <div className={styles.cast}>{cast}</div>
        </section>
    )
}

