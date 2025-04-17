import styles from "./Arrivals.module.css";
import Card from "../cards/Card";

export default function Arrivals({ cards }) {
  return (
    <section className={styles.arrivals}>
      <div className="container">
        <div className={styles.arrivals__title}>
          <h2 className="sections--title">NEW ARRIVALS</h2>
        </div>
        <div className={styles.cards__wrapper}>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} img={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
