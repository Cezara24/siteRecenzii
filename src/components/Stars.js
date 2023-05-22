import styles from "./Stars.module.css";

export default function Stars(props) {
    const stars = parseInt(parseFloat(props.stars)*10);

    return (
        <section
            className={styles.Stars}
            style={{clipPath: `polygon(${stars}% 0%, ${stars}% 100%, 0% 100%, 0% 0%)`}}
        >⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        </section>
    )
}
