import styles from "./Home.module.css";
import Header from "./Header";
import Review from "./Review";
import { Fragment } from "react";

export default function Home() {
  const title = "The Shawshank Redemption";
  const year = "1994";
  const rating = "9.3";
  const genre = "drama";
  const director = "Frank Darabont";
  const writers = ["Stephen King", "Frank Darabont"];
  const cast = [
    ["Tim Robbins", "Andy Dufresne"],
    ["Morgan Freeman", "Ellis Boyd 'Red' Redding"],
    ["Bob Gunton", "Warden Norton"],
    ["William Sadler", "Heywood"],
    ["Clancy Brown", "Captain Hadley"],
  ];
  return (
    <Fragment>
      <Header />
      <section className={styles.Home}>
        <div className={styles.title}>
          Welcome to Screen Score, your ultimate destination for insightful film
          reviews!
        </div>
        <div className={styles.slogan}>
          We dive deep into the world of cinema to help you make informed
          choices and discover the true essence of each motion picture.
        </div>
        <div className={styles.sticker}>Top rated movie #1</div>
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
