import Card from "../cards/Card";
import styles from "./Arrivals.module.css";

import card1 from "../../img/categories/cat-01.jpg";
import card2 from "../../img/categories/cat-02.jpg";
import card3 from "../../img/categories/cat-03.jpg";

export default function Arrivals() {
  return (
    <section className={styles.arrivals}>
      <div className="container">
        <div className={styles.arrivals__title}>
          <h2 className="sections--title">NEW ARRIVALS</h2>
        </div>
        <div className={styles.cards__wrapper}>
          <Card title="Hoodies & Sweetshirt" img={card1} />
          <Card title="Coats & Parkas" img={card2} />
          <Card title="Tees & T-Shirt" img={card3} />
        </div>
      </div>
    </section>
  );
}
