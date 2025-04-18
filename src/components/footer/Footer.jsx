import "./footer.css";
import fb from "../../img/socials/fb.svg";
import inst from "../../img/socials/inst.svg";
import tw from "../../img/socials/tw.svg";
import iin from "../../img/socials/in.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <h2>FASHION</h2>
            <p>Complete your style with awesome clothes from us.</p>
            <div className="footer__socials">
              <div className="footer__socials__btn">
                <img src={fb} alt="facebook" />
              </div>
              <div className="footer__socials__btn">
                <img src={inst} alt="instagram" />
              </div>
              <div className="footer__socials__btn">
                <img src={tw} alt="tw" />
              </div>
              <div className="footer__socials__btn">
                <img src={iin} alt="in" />
              </div>
            </div>
          </div>
          <nav className="footer__navigation">
            <div className="footer__navigation__column">
              <h3 className="footer__navigation__title">Company</h3>
              <ul>
                <li className="footer__navigation__list">
                  <a href="#!">about</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">Contact us</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">Support</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer__navigation__column">
              <h3 className="footer__navigation__title">Quick Link</h3>
              <ul>
                <li className="footer__navigation__list">
                  <a href="#!">Share Location</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">Orders Tracking</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">Size Guide</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer__navigation__column">
              <h3 className="footer__navigation__title">Legal</h3>
              <ul>
                <li className="footer__navigation__list">
                  <a href="#!">Terms & conditions</a>
                </li>
                <li className="footer__navigation__list">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
