import "./voucher.css";

export default function Voucher({}) {
  return (
    <div className="voucher__text">
      <h1 className="voucher__title">DOWNLOAD APP & GET THE VOUCHER!</h1>
      <p className="voucher__desc">
        Get 30% off for first transaction using Rondovision mobile app for now.
      </p>
      

      <div className="voucher__btn--wrapper">
        <a className="voucher__btn" href="#!">
          Shop Now
        </a>
      </div>
    </div>
  );
}
