import "./genericSection.css";

export default function GenericSection({
  sectionName,
  promoImg,
  reverse,
  children,
}) {
  return (
    <section className={sectionName}>
      <div className="container">
        {/* <div className={`promo__content ${reverse ? "reverse" : ""}`}> */}

        <div className={`section__content ${reverse && "reverse"}`}>
          {children}
          <div className={`${sectionName}__img`}>
            <img src={promoImg} alt={`${sectionName}-images`} />
          </div>
        </div>
      </div>
    </section>
  );
}
