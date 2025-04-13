import "./brands.css";

import hmLogo from "../../img/brands/HM.png";
import obeyLogo from "../../img/brands/Obey.png";
import shopifyLogo from "../../img/brands/Shopify.png";
import lacosteLogo from "../../img/brands/Lacoste.png";
import levisLogo from "../../img/brands/Levis.png";
import amazonLogo from "../../img/brands/Amazon.png";

export default function Brands() {
  return (
    <section className="brands">
      <div className="brands--wrapper">
        <img src={hmLogo} alt="HM" />
        <img src={obeyLogo} alt="obey" />
        <img src={shopifyLogo} alt="Shopify" />
        <img src={lacosteLogo} alt="Lacoste" />
        <img src={levisLogo} alt="Levis" />
        <img src={amazonLogo} alt="Amazon" />
      </div>
    </section>
  );
}
