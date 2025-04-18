import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import GenericSection from "./components/genericSection/GenericSection";
import Sale from "./components/sale/Sale";
import Voucher from "./components/voucher/Voucher";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

// images
import mainPromoImage from "./img/images/header-img.jpg";
import PromoImage2 from "./img/images/promo-img.jpg";
import vouchers from "./img/images/vouchers-img.png";
import cardImg1 from "./img/categories/cat-01.jpg";
import cardImg2 from "./img/categories/cat-02.jpg";
import cardImg3 from "./img/categories/cat-03.jpg";
import cardImg4 from "./img/images/promo-01.jpg";
import cardImg5 from "./img/images/promo-02.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <GenericSection promoImg={mainPromoImage} sectionName="promo">
        <Promo></Promo>
      </GenericSection>
      <Brands />
      <Arrivals
        cards={[
          { title: "Hoodies & Sweetshirt", image: cardImg1 },
          { title: "Hoodies & Sweetshirt", image: cardImg2 },
          { title: "Hoodies & Sweetshirt", image: cardImg3 },
        ]}
      />
      <GenericSection promoImg={PromoImage2} sectionName="sale" reverse>
        <Sale />
      </GenericSection>

      <Arrivals
        cards={[
          { title: "Trending on instagram", image: cardImg4 },
          { title: "All Under $40", image: cardImg5 },
        ]}
      />
      <GenericSection promoImg={vouchers} sectionName="voucher">
        <Voucher />
      </GenericSection>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
