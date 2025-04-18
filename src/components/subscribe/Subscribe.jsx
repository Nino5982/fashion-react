import "./subscribe.css";
export default function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe-wrapper">
        <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        <p>Type your email down below and be young wild generation</p>
        <form className="subscribe__form" action="">
          <input
            className="subscribe__form-input"
            type="email"
            placeholder="Add your email here"
          />
          <button className="subscribe__form-btn" type="submit">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
