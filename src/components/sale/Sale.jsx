import "./sale.css";

export default function Sale({}) {
  return (
    <div className="sale__text">
      <h1 className="sale__title">
        <span className="highlight">PAYDAY</span>
        SALE NOW
      </h1>
      <p className="sale__desc">
        Spend minimal $100 get 30% off voucher code for your next purchase
      </p>
      <p className="sale__date">1 June - 10 June 2021</p>
      <p className="sale__desc">*Terms & Conditions apply</p>

      <div className="sale__btn--wrapper">
        <a className="sale__btn" href="#!">
          Shop Now
        </a>
      </div>
    </div>
  );
}
