import "./promo.css";

export default function Promo({ promoImg }) {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h1 className="promo__title">
              <span className="highlight">LET’S</span>
              EXPLORE
              <span className="highlight highlight--yellow">UNIQUE</span>
              CLOTHES.
            </h1>
            <p className="promo__desc">
              Live for Influential and Innovative fashion!
            </p>
            <div className="promo__btn--wrapper">
              <a className="promo__btn" href="#!">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promo-images" />
          </div>
        </div>
      </div>
    </section>
  );
}
