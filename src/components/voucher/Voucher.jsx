import "./voucher.css";
import appStore from "../../img/icons/app-store.png";
import googlePlay from "../../img/icons/google-play.png";

export default function Voucher({}) {
  return (
    <div className="voucher__text">
      <h1 className="voucher__title">DOWNLOAD APP & GET THE VOUCHER!</h1>
      <p className="voucher__desc">
        Get 30% off for first transaction using Rondovision mobile app for now.
      </p>

      <div className="voucher__btn--wrapper">
        <a className="voucher__btn" href="#!">
          <img src={appStore} alt="App-Store" />
        </a>

        <a className="voucher__btn" href="#!">
          <img src={googlePlay} alt="Google-Play" />
        </a>
      </div>
    </div>
  );
}
