import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Header from "./Header";
import Review from "./Review";
import TheShawshankRedemption from "../images/The Shawshank Redemption 1994.jpg";

export default function Home() {
  const title = "The Shawshank Redemption";
  const year = "1994";
  const rating = "9.3";
  const genre = "drama";
  const director = "Frank Darabont";
  const writers = ["Stephen King", "Frank Darabont"];
  const cast =
    "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler, Clancy Brown";
  return (
    <Fragment>
      <Header />
      <section className={styles.Home}>
        <div className={styles.coverContainer}>
          <div className={styles.title}>
            Welcome to Screen Score, your ultimate destination for insightful
            film reviews!
          </div>
          <div className={styles.slogan}>
            We dive deep into the world of cinema to help you make informed
            choices and discover the true essence of each motion picture.
          </div>
          <div className={styles.topMovieContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.coverImg} src={TheShawshankRedemption} />
              <div className={styles.sticker}>
                <div>Top rated</div>
                <div>movie #1</div>
              </div>
            </div>
            <div className={styles.topReview}>
              <div className={styles.movieTitle}>{title}</div>
              <div className={styles.details}>
                <div>Year: {year}</div>
                <div>Rating: {rating} ⭐</div>
                <div>Genre: {genre}</div>
                <div>Director: {director}</div>
                <div>Writers: {writers}</div>
                <div>Cast: {cast}</div>
              </div>
              <div className={styles.buttonContainer}>
                <Link to="/the-shawshank-redemption">
                  <button className={styles.button}>Read the review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <Review
            title={title}
            year={year}
            rating={rating}
            genre={genre}
            director={director}
            writers={writers}
            cast={cast}
          />
          <Review
            title={title}
            year={year}
            rating={rating}
            genre={genre}
            director={director}
            writers={writers}
            cast={cast}
          />
          <Review
            title={title}
            year={year}
            rating={rating}
            genre={genre}
            director={director}
            writers={writers}
            cast={cast}
          />
          <Review
            title={title}
            year={year}
            rating={rating}
            genre={genre}
            director={director}
            writers={writers}
            cast={cast}
          />
          <Review
            title={title}
            year={year}
            rating={rating}
            genre={genre}
            director={director}
            writers={writers}
            cast={cast}
          />
          <Review
            title={title}
            year={year}
            rating={rating}
            genre={genre}
            director={director}
            writers={writers}
            cast={cast}
          />
        </div>
      </section>
    </Fragment>
  );
}
