import cocktailIcon from "../assets/images/icons8-cocktail.png";

export const Banner = () => {
  return (
    <section className="bannerBg animate-scale">
      <div className="bannerBgInnerWrapper content">
        <img
          src={cocktailIcon}
          alt="cocktail logo"
          // style={{ transform: "scaleX(-1)" }}
        />
        <h1 className="bannerBgTitle">BaroQue</h1>
      </div>
    </section>
  );
};
