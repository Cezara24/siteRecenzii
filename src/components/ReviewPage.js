import styles from "./ReviewPage.module.css";
import Header from "./Header";
import Stars from "./Stars";
import { Data } from "../data";
import { Fragment } from "react";

export default function ReviewPage(props) {
  const name = props.name;
  const data = Data();
  const movieData = data[name];
  const title = movieData.title;
  const review = movieData.review;
  const rating = movieData.rating;

  return (
    <Fragment>
      <Header />
      <section className={styles.ReviewPage}>
        <div className={styles.title}>{title}</div>
        <div className={styles.review}>{review}</div>
        <div>Rating: {rating} <Stars stars={rating} /> </div>
      </section>
    </Fragment>
  );
}
