import "./header.css";
import logoImg from "./../../img/icons/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </div>
          <div className="header_nav">NAv</div>
        </div>
      </div>
    </header>
  );
}
