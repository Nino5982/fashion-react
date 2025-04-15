import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Sale from "./components/sale/Sale";

import mainPromoImage from "./img/images/header-img.jpg";
import PromoImage2 from "./img/images/promo-img.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo promoImg={mainPromoImage}></Promo>
      <Brands />
      <Arrivals />
      <Sale saleImg={PromoImage2} />
    </div>
  );
}

export default App;
