import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Header from "./Header";
import Stars from "./Stars";
import Review from "./Review";
import TheShawshankRedemption from "../images/The Shawshank Redemption 1994.jpg";
import { Data } from "../data";

export default function Home() {
  const topMovieName = "The Shawshank Redemption"

  const data = Data();

  const topMovieData = data[topMovieName];
  const title = topMovieData.title;


  const year = topMovieData.year;
  const rating = topMovieData.rating;
  const genre = topMovieData.genre;
  const director = topMovieData.director;
  const writers = topMovieData.writers;
  const cast = topMovieData.cast;
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
                <div>Rating: {rating} <Stars stars={rating} /></div>
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
            name="The Shawshank Redemption" link="/the-shawshank-redemption"
          />
          <Review
            name="Moana" link="moana"
          />
          <Review
            name="Tom Jones"  link="/tom-jones"
          />
          <Review
            name="The Shawshank Redemption"  link="/the-shawshank-redemption"
          />
          <Review
            name="The Shawshank Redemption"  link="/the-shawshank-redemption"
          />
          
        </div>
      </section>
    </Fragment>
  );
}
