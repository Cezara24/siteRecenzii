import styles from "./ReviewPage.module.css";
import Header from "./Header";
import { Data } from "../data";
import { Fragment } from "react";

export default function ReviewPage(props) {
  const name = props.name;
  const data = Data();
  const movieData = data[name];
  const title = movieData.title;
  const review = movieData.review;

  return (
    <Fragment>
      <Header />
      <section className={styles.ReviewPage}>
        <div className={styles.title}>{title}</div>
        <div className={styles.review}>{review}</div>
      </section>
    </Fragment>
  );
}
