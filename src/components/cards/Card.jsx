import styles from "./Card.module.css";

import openIcon from "../../img/icons/arrow.svg";

export default function Card({ title, img }) {
  return (
    <div className={styles.card}>
      <a className={styles.card__link} href="#!"></a>
      <div className={styles.card__img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.card__text}>
        <div className={styles.card__desc}>
          <h3 className={styles.card__title}>{title}</h3>
          <span>Explore Now!</span>
        </div>
        <div className={styles.open}>
          <img src={openIcon} alt="open" />
        </div>
      </div>
    </div>
  );
}
